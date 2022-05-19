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
        <Offcanvas.Title className='py-1'>
          Typist options <small className='text-muted fw-normal'>work in progress </small>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className='px-0'>
        <h6 className='px-3'>
          Easy - <span className='text-muted fw-normal'>Time: </span> 5:00 minutes
        </h6>
        <ListGroup variant='flush' className='border-bottom border-top mb-3'>
          <ListGroup.Item action className='d-flex justify-content-between'>
            road pure engineer after... <small className='text-muted'> | 100 words </small>
          </ListGroup.Item>
          <ListGroup.Item action className='d-flex justify-content-between'>
            themselves pile newspaper... <small className='text-muted'> | 100 words </small>
          </ListGroup.Item>
          <ListGroup.Item action className='d-flex justify-content-between'>
            remove handsome clean... <small className='text-muted'> | 100 words </small>
          </ListGroup.Item>
          <ListGroup.Item action className='d-flex justify-content-between'>
            means rear green verb... <small className='text-muted'> | 100 words </small>
          </ListGroup.Item>
        </ListGroup>
        <h6 className='px-3'>
          Medium - <span className='text-muted fw-normal'>Time: </span> 3:00 minutes
        </h6>
        <ListGroup variant='flush' className='border-bottom border-top mb-3'>
          <ListGroup.Item action className='d-flex justify-content-between'>
            thou press habit cattle... <small className='text-muted'> | 100 words </small>
          </ListGroup.Item>
          <ListGroup.Item action className='d-flex justify-content-between'>
            land shallow helpful... <small className='text-muted'> | 100 words </small>
          </ListGroup.Item>
          <ListGroup.Item action className='d-flex justify-content-between'>
            crew does circus scale... <small className='text-muted'> | 100 words </small>
          </ListGroup.Item>
          <ListGroup.Item action className='d-flex justify-content-between'>
            sport feed putting equal... ac <small className='text-muted'> | 100 words </small>
          </ListGroup.Item>
        </ListGroup>
        <h6 className='px-3'>
          Hard - <span className='text-muted fw-normal'>Time: </span> 1:00 minute
        </h6>
        <ListGroup variant='flush' className='border-bottom border-top mb-3'>
          <ListGroup.Item action className='d-flex justify-content-between'>
            through horn speech wool... <small className='text-muted'> | 100 words </small>
          </ListGroup.Item>
          <ListGroup.Item action className='d-flex justify-content-between'>
            cry grandfather writer... <small className='text-muted'>| 100 words </small>
          </ListGroup.Item>
          <ListGroup.Item action className='d-flex justify-content-between'>
            picture particularly... <small className='text-muted'>| 100 words </small>
          </ListGroup.Item>
          <ListGroup.Item action className='d-flex justify-content-between'>
            bus knife leave... <small className='text-muted'>| 100 words </small>
          </ListGroup.Item>
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default TypistOptions;
