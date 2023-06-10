import React, { useEffect, useRef, useState } from 'react';

import MapMarker from './MapMarker';

const ID = '69989e04-b229-4553-8c83-9a596f10c658';

const Map = ({initialScale, minScale, maxScale, title, image, markers}) => {
  const pan = useRef(null);
  const pinch = useRef(null);
  const momentum = useRef(null);

  const [state, setState] = useState({
    w: null,
    h: null,
    dx: 0,
    dy: 0,
    s: initialScale,
  })

  useEffect(() => {
    window.addEventListener('wheel', handleMouseWheel, { passive: false });

    window.addEventListener('mousedown', handleMouseDown, { passive: false });
    window.addEventListener('mousemove', handleMouseMove, { passive: false });
    window.addEventListener('mouseup', handleMouseUp, { passive: false });

    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleMouseWheel, { passive: false });

      window.removeEventListener('mousedown', handleMouseDown, { passive: false });
      window.removeEventListener('mousemove', handleMouseMove, { passive: false });
      window.removeEventListener('mouseup', handleMouseUp, { passive: false });

      window.removeEventListener('touchstart', handleTouchStart, { passive: false });
      window.removeEventListener('touchmove', handleTouchMove, { passive: false });
      window.removeEventListener('touchend', handleTouchEnd, { passive: false });
    }
  }, [state])

  const shouldHandle = (event) => {
    var target = event.target

    while (target != null) {
      if (target.id == ID) {
        return true
      }

      target = target.parentElement
    }

    return false;
  }

  const handleMouseWheel = (args) => {
    if (!shouldHandle(args)) {
      return
    }

    var scale = 0.0;
    if (args.deltaY < 0) {
      scale = Math.min(maxScale, state.s + 0.25);
    } else {
      scale = Math.max(minScale, state.s - 0.25);
    }

    setState({
      ...state,
      s: scale,
    });
  }

  const beginPinching = (x1, y1, x2, y2) => {
    const dx = (x2 - x1);
    const dy = (y2 - y1);
    const magnitude = dx*dx + dy*dy

    pinch.current = {
      last: magnitude,
      velocity: null,
    };

    return true
  }
  const continuePinching = (x1, y1, x2, y2) => {
    if (!pinch.current) {
      return false
    }

    const dx = (x2 - x1);
    const dy = (y2 - y1);
    const magnitude = dx*dx + dy*dy

    // The large divisor here is because the magnitudes are pretty big: first they haven't been
    // square rooted (doesn't matter since just looking for relative size) and second because
    // pixel differences are *not* the same as scale factors.
    const velocity = (magnitude - pinch.current.last) / 10000.0;

    pinch.current = {
      last: magnitude,
      velocity: velocity,
    };

    setState((old) => {
      return {
        ...old,
        s: Math.min(maxScale, Math.max(minScale, state.s + velocity)),
      };
    });

    return true
  }
  const finishPinching = () => {
    if (pinch.current == null) {
      return false
    }

    pinch.current = null
    return true
  }

  const beginPanning = (x, y) => {
    momentum.current = null;
    pan.current = {
      last: { x, y },
    }

    return true
  }
  const continuePanning = (x, y) => {
    if (!pan.current) {
      return false
    }

    const velocity = { 
      x: x - pan.current.last.x,
      y: y - pan.current.last.y,
    };

    pan.current = { 
      last: { x, y },
      velocity: velocity,
    };

    setState((old) => {
      return {
        ...old,
        dx: old.dx + (velocity.x / old.s),
        dy: old.dy + (velocity.y / old.s),
      };
    });

    return true
  }
  const momentumPanning = (timestamp) => {
    const m = momentum.current;

    if (m == null || m.velocity == null) {
      return;
    }

    const dx = m.velocity.x;
    const dy = m.velocity.y;
    const magnitudeSquared = dx*dx + dy*dy;
   
    if (magnitudeSquared < 4) {
      momentum.current = null;
      return;
    }

    setState((old) => {
      return {
        ...old,
        dx: old.dx + (dx / old.s),
        dy: old.dy + (dy / old.s),
      }
    });

    const timeDelta = timestamp - m.lastTimestamp;
    const percentSecond = timeDelta / 1000.0;

    momentum.current = {
      lastTimestamp: timestamp,
      velocity: {
        x: dx * (1.0 - percentSecond) * 0.95,
        y: dy * (1.0 - percentSecond) * 0.95,
      }
    };

    window.requestAnimationFrame(momentumPanning);
  }

  const finishPanning = () => {
    if (!pan.current) {
      return false
    }

    momentum.current = {
      lastTimestamp: performance.now(),
      velocity: pan.current.velocity,
    };
    pan.current = null;
    window.requestAnimationFrame(momentumPanning);

    return true
  }

  const handleMouseDown = (args) => {
    if (shouldHandle(args) && beginPanning(args.clientX, args.clientY)) {
      args.stopPropagation();
      args.preventDefault();
    }
  }
  const handleMouseMove = (args) => {
    if (continuePanning(args.clientX, args.clientY)) {
      args.stopPropagation();
      args.preventDefault();
    }
  }
  const handleMouseUp = (args) => {
    if (finishPanning()) {
      args.stopPropagation();
      args.preventDefault();
    }
  }

  const handleTouchStart = (args) => {
    if (!shouldHandle(args)) {
      return
    }

    const touches = args.targetTouches

    if (touches.length == 1 && beginPanning(touches[0].clientX, touches[0].clientY)) {
      args.stopPropagation();
      args.preventDefault();
    }

    
    if (touches.length == 2 && beginPinching(touches[0].clientX, touches[0].clientY, touches[1].clientX, touches[1].clientY)) {
      args.stopPropagation();
      args.preventDefault();
    }
  }
  const handleTouchMove = (args) => {
    if (!shouldHandle(args)) {
      return
    }

    const touches = args.targetTouches
    
    if (args.targetTouches.length == 1 && continuePanning(touches[0].clientX, touches[0].clientY)) {
      args.stopPropagation();
      args.preventDefault();
    }
    
    if (args.targetTouches.length == 2 && continuePinching(touches[0].clientX, touches[0].clientY, touches[1].clientX, touches[1].clientY)) {
      args.stopPropagation();
      args.preventDefault();
    }
  }
  const handleTouchEnd = (args) => {
    if (!shouldHandle(args)) {
      return
    }

    const touches = args.targetTouches
    
    if (touches.length == 0 && finishPanning()) {
      args.stopPropagation();
      args.preventDefault();
    }
    
    if (touches.length == 1 && finishPinching()) {
      args.stopPropagation();
      args.preventDefault();
    }
  }

  const onImageLoad = async ({target}) => {
    setState({
      ...state,
      w: target.naturalWidth,
      h: target.naturalHeight,
    });
  }

  const S = (1.0 - state.s) / 2.0
  const WW = state.w * S
  const HH = state.h * S
  const DX = (state.dx * state.s) - state.w / 2.0
  const DY = (state.dy * state.s) - state.h / 2.0

  return (
    <div id={ID} style={{position: "fixed", left: 0, top: 0, transform: "translate(50vw, 50vh) translate(" + DX + "px, " + DY + "px)"}}>
      <img 
        onLoad={onImageLoad}
        draggable={false}
        style={{transform: "scale(" + state.s + ")"}}
        src={image}
        alt={title}
      />
      {
        markers.map((marker, index) => {
          return <MapMarker key={index} x={WW + marker.x * state.s} y={HH + marker.y * state.s} type='city'/>
        })
      }
    </div>
  )
}

export default Map;