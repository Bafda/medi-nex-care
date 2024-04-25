import React from 'react';
import patient from './Patient.png'; // Import your image
// import './App.css'; 

const Image = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '70vh' }}>
{/* Container with relative positioning */}
<div className='text'>
  <p className='t1' >STREAMLINE HEALTHCARE ACCESS</p>
</div>
<img
  src={patient}
  alt="Logo" className="logo-image "
  style={{
    position: 'absolute',
    top: 0,
    right: 0,
    maxWidth: '600px', // Adjust size as needed
    maxHeight: '600px', // Adjust size as needed
  }}
/>
</div>
  );
}

export default Image;
