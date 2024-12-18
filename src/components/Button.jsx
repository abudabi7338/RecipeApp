// Button.jsx

import React from 'react';
import '.././styles/components/Button.scss'; 

// Komponent Button
function Button({children}) {
  return (
    <button className='btn'>{children}</button>
  );
}

export default Button;