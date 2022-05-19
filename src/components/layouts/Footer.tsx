import React from 'react';
// react bootstrap components
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <footer className='border-top'>
      <Container className='text-center'>
        <p className='text-muted mb-0 py-3'>
          Powered by <span className='text-dark fw-bold'>Me of course</span>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
