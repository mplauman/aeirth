import React, { useEffect, useState } from 'react';

const Map = ({initialScale, minScale, maxScale, title, image, children}) => {
  const [state, setState] = useState({
    dx: 0,
    dy: 0,
  })

  useEffect(() => {
    window.addEventListener('wheel', handleMouseWheel, { passive: false });

    window.addEventListener('mousedown', handleMouseDown, { passive: false });

    window.addEventListener('touchstart', handleTouchStart, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleMouseWheel, { passive: false });

      window.removeEventListener('mousedown', handleMouseDown, { passive: false });
      window.removeEventListener('mousemove', handleMouseMove, { passive: false });
      window.removeEventListener('mouseup', handleMouseUp, { passive: false });

      window.removeEventListener('touchstart', handleTouchStart, { passive: false });
      window.removeEventListener('touchmove', handleTouchMove, { passive: false });
      window.removeEventListener('touchend', handleTouchEnd, { passive: false });
    }
  })

  const handleMouseWheel = (args) => {
    console.log("Mouse wheel", args);
    args.stopPropagation();
    args.preventDefault();
    return false;
  }

  const handleMouseDown = (args) => {
    console.log("Mouse down", args);
    window.addEventListener('mousemove', handleMouseMove, { passive: false });
    window.addEventListener('mouseup', handleMouseUp, { passive: false });
    args.stopPropagation();
    args.preventDefault();
    return false;
  }
  const handleMouseUp = (args) => {
    console.log("Mouse up", args);
    window.removeEventListener('mousemove', handleMouseMove, { passive: false });
    window.removeEventListener('mouseup', handleMouseUp, { passive: false });
    args.stopPropagation();
    args.preventDefault();
    return false;
  }
  const handleMouseMove = (args) => {
    console.log("Mouse moved", args);
    args.stopPropagation();
    args.preventDefault();
    return false;
  }

  const handleTouchStart = (args) => {
    console.log('touch start', args);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
    args.stopPropagation();
    args.preventDefault();
    return false;
  }
  const handleTouchMove = (args) => {
    console.log('touch move', args);
    args.stopPropagation();
    args.preventDefault();
    return false;
  }
  const handleTouchEnd = (args) => {
    console.log('touch end', args);
    window.removeEventListener('touchmove', handleTouchMove, { passive: false });
    window.removeEventListener('touchend', handleTouchEnd, { passive: false });
    args.stopPropagation();
    args.preventDefault();
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
    <img onLoad={onImageLoad} draggable={false} style={{position: "fixed", left: 0, top: 0, transform: "translate(50vw, 50vh) translate(" + state.dx + "px, " + state.dy + "px)"}} src={image} alt={title}/>
  )
}

export default Map;