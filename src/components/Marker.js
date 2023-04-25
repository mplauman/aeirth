import React from 'react';
import { KeepScale } from 'react-zoom-pan-pinch';

const Marker = ({x, y, children}) => {
    return (
      <div className='marker' style={{ top: y, left: x }}>
        <KeepScale>
          { children }
        </KeepScale>
      </div>
    )
  }
  
  export default Marker;
  