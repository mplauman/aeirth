import React, { useEffect, useRef, useState } from 'react';

const Map = ({initialScale, minScale, maxScale, title, image, children}) => {
  const pan = useRef(null);
  const pinch = useRef(null);

  const [state, setState] = useState({
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

  const handleMouseWheel = (args) => {
    args.stopPropagation();
    args.preventDefault();

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

    return false;
  }

  const beginPinching = (x1, y1, x2, y2) => {
    const dx = (x2 - x1);
    const dy = (y2 - y1);
    const magnitude = dx*dx + dy*dy

    pinch.current = {
      last: magnitude,
      velocity: null,
    };
  }
  const continuePinching = (x1, y1, x2, y2) => {
    if (pinch.current) {
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
    }
  }
  const finishPinching = () => {
    pinch.current = null;
  }

  const beginPanning = (x, y) => {
    pan.current = {
      last: { x, y },
    };
  }
  const continuePanning = (x, y) => {
    if (pan.current) {
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
          dx: state.dx + velocity.x,
          dy: state.dy + velocity.y,
        };
      });
    }
  }
  const finishPanning = () => {
    pan.current = null;
  }

  const handleMouseDown = (args) => {
    args.stopPropagation();
    args.preventDefault();

    beginPanning(args.clientX, args.clientY);

    return false;
  }
  const handleMouseMove = (args) => {
    args.stopPropagation();
    args.preventDefault();

    continuePanning(args.clientX, args.clientY);

    return false;
  }
  const handleMouseUp = (args) => {
    args.stopPropagation();
    args.preventDefault();

    finishPanning();

    return false;
  }

  const handleTouchStart = (args) => {
    args.stopPropagation();
    args.preventDefault();

    if (args.targetTouches.length == 1) {
      beginPanning(args.targetTouches[0].clientX, args.targetTouches[0].clientY);
    }
    
    if (args.targetTouches.length == 2) {
      beginPinching(
        args.targetTouches[0].clientX,
        args.targetTouches[0].clientY,
        args.targetTouches[1].clientX,
        args.targetTouches[1].clientY,
      )
    }

    return false;
  }
  const handleTouchMove = (args) => {
    args.stopPropagation();
    args.preventDefault();

    if (args.targetTouches.length == 1) {
      continuePanning(args.targetTouches[0].clientX, args.targetTouches[0].clientY);
    }
    
    if (args.targetTouches.length == 2) {
      continuePinching(
        args.targetTouches[0].clientX,
        args.targetTouches[0].clientY,
        args.targetTouches[1].clientX,
        args.targetTouches[1].clientY,
      )
    }

    return false;
  }
  const handleTouchEnd = (args) => {
    args.stopPropagation();
    args.preventDefault();

    if (args.targetTouches.length == 0) {
      finishPanning();
    }
    
    if (args.targetTouches.length == 1) {
      finishPinching()
    }

    return false;
  }

  const onImageLoad = async ({target}) => {
    setState({
      ...state,
      dx: state.dx - target.naturalWidth / 2,
      dy: state.dy - target.naturalHeight / 2,
    });
  }

  return (
    <img 
      onLoad={onImageLoad}
      draggable={false}
      style={{position: "fixed", left: 0, top: 0, transform: "translate(50vw, 50vh) translate(" + state.dx + "px, " + state.dy + "px) scale(" + state.s + ")"}}
      src={image}
      alt={title}
    />
  )
}

export default Map;