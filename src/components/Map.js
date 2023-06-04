import React, { useEffect, useState } from 'react';

const Map = ({initialScale, minScale, maxScale, title, image, children}) => {
  const [state, setState] = useState({
    dx: 0,
    dy: 0,
    s: 1,
    pan: null,
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
    console.log("Mouse wheel", args);

    args.stopPropagation();
    args.preventDefault();

    var scale = 0.0;
    if (args.deltaY < 0) {
      scale = state.s + 0.25;
    } else {
      scale = Math.max(0, state.s - 0.25);
    }

    console.log("new scale", scale);

    setState({
      ...state,
      s: scale,
    });

    return false;
  }

  const beginPanning = (x, y) => {
    setState({
      ...state,
      pan: {
        last: {
          x: x,
          y: y,
        },
      },
    });
  }
  const continuePanning = (x, y) => {
    if (state.pan) {
      const velocity = { 
        x: x - state.pan.last.x,
        y: y - state.pan.last.y,
      };

      setState({
        ...state,
        pan: {
          last: {
            x: x,
            y: y,
          },
          velocity: velocity,
        },
        dx: state.dx + velocity.x,
        dy: state.dy + velocity.y,
      });
    }
  }
  const finishPanning = () => {
    setState({
      ...state,
      pan: null,
    });
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

    return false;
  }
  const handleTouchMove = (args) => {
    args.stopPropagation();
    args.preventDefault();

    if (args.targetTouches.length == 1) {
      continuePanning(args.targetTouches[0].clientX, args.targetTouches[0].clientY);
    }

    return false;
  }
  const handleTouchEnd = (args) => {
    args.stopPropagation();
    args.preventDefault();

    if (args.targetTouches.length == 0) {
      finishPanning();
    }

    return false;
  }

  const onImageLoad = async ({target}) => {
    console.log('image loaded');
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