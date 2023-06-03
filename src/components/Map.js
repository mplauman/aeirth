import React, { useState } from 'react';

const Map = ({initialScale, minScale, maxScale, title, image, children}) => {
  const [state, setState] = useState({
    dx: 0,
    dy: 0,
  })

  const onImageLoad = async ({target}) => {
    setState({
      ...state,
      dx: state.dx - target.naturalWidth / 2,
      dy: state.dy - target.naturalHeight / 2,
    });
  }

  return (
    <img onLoad={onImageLoad} style={{position: "fixed", left: 0, top: 0, transform: "translate(50vw, 50vh) translate(" + state.dx + "px, " + state.dy + "px)"}} src={image} alt={title}/>
  )
}

export default Map;