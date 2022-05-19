import React, { useContext } from 'react';
// next components
import { useRouter } from 'next/router';
// react bootstrap components
import ListGroup from 'react-bootstrap/ListGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';
//
import { TypistOptionsContext } from '../context/TypistOptionsContext';

const TypistOptions = () => {
  const { showOptions, handleCloseOptions } = useContext(TypistOptionsContext);
  const router = useRouter();

  return (
    <Offcanvas show={showOptions} onHide={handleCloseOptions} placement='end' scroll={true} backdrop={false}>
      <Offcanvas.Header closeButton className='border-bottom py-2'>
        <Offcanvas.Title className='py-1'>Typist options</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className='px-0'>
        <h6 className='px-3'>
          Easy - <span className='text-muted fw-normal'>Time: </span> 5:00 minutes
        </h6>
        <ListGroup variant='flush' className='border-bottom border-top mb-3'>
          <ListGroup.Item action>Cras justo odio</ListGroup.Item>
          <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
        <h6 className='px-3'>
          Medium - <span className='text-muted fw-normal'>Time: </span> 3:00 minutes
        </h6>
        <ListGroup variant='flush' className='border-bottom border-top mb-3'>
          <ListGroup.Item action>Cras justo odio</ListGroup.Item>
          <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
        <h6 className='px-3'>
          Hard - <span className='text-muted fw-normal'>Time: </span> 1:00 minute
        </h6>
        <ListGroup variant='flush' className='border-bottom border-top mb-3'>
          <ListGroup.Item action>Cras justo odio</ListGroup.Item>
          <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default TypistOptions;
