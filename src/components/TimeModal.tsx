import React, { useState } from 'react';
// react bootstrap component
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface Props {
  show: boolean;
  handleClose: () => void;
  handleShow: () => void;
}

const TimeModal = ({ show, handleClose, handleShow }: Props) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className='py-2' closeButton>
        <Modal.Title className='h5 mb-0'>
          Choose convenient time <span className='fw-normal text-muted'> | work in progress </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className=''>
          <Stack direction='horizontal' className='mb-3 gap-3'>
            <Button className='flex-grow-1' variant='outline-dark'>
              1 Minute
            </Button>
            <Button className='flex-grow-1' variant='outline-dark'>
              2 Minutes
            </Button>
            <Button className='flex-grow-1' variant='outline-dark'>
              5 Minutes
            </Button>
          </Stack>
          <Form.Group className='w-100'>
            <Form.Control type='number' placeholder='Set custom time' />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className='py-2'>
        <Button className='' variant='outline-dark'>
          Set time
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TimeModal;
