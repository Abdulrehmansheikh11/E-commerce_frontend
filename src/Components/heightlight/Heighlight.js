import React from 'react';

const Highlight = ({ color, children }) => {
  return (
    <div style={{ backgroundColor: color, padding: '10px', margin: '5px', borderRadius: '5px' }}>
      {children}
    </div>
  );
}

export default Highlight;
