import React from 'react';

export const Card = ({ image, code }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
      <img
        src={image}
        alt={code}
        width="100"
        style={{ boxShadow: '0 0.0625em 0.125em rgba(0, 0, 0, 0.15)' }}
      />
    </div>
  );
};
