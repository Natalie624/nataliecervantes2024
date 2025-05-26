import React from 'react';

const bannerStyle: React.CSSProperties = {
  backgroundColor: '#ffcc00',
  color: '#000',
  padding: '10px',
  textAlign: 'center',
  fontWeight: 'bold',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 9999,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const Banner = () => {
  return <div style={bannerStyle}>🚧 Preview Mode: Viewing Draft Content 🚧</div>;
};

export default Banner;