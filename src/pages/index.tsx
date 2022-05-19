import React, { Fragment } from 'react';
// next files
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
// react bootstrap components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//
import Typed from 'react-typed';
// 
import Layout from '../components/layouts'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Layout>
        <Row className='justify-content-center pt-3'>
          <Col className='' lg={8}>
            <h5 className=''>Enter paragraph content</h5>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
              <Form.Control as='textarea' rows={4} placeholder='Paste a paragraph and set time to practice or select from typist options' />
            </Form.Group>
            <Row className='border-top pt-3 mt-3'>
              <Col xs={6} md={4} className='order-2 order-md-1 d-grid d-md-block'>
                <Button variant='outline-dark' size='lg' className=''>
                  <span className='text-nowrap'>Set Time</span>
                </Button>
              </Col>
              <Col xs={12} md={4} className='order-1 order-md-2'>
                <div className='text-center'>
                  <h2>10:00 Minutes</h2>
                  <p className='text-muted small'>Default Time</p>
                </div>
              </Col>
              <Col xs={6} md={4} className='text-end order-3 d-grid d-md-block'>
                <Button variant='outline-dark' size='lg' className=''>
                  <span className='text-nowrap'>Set Paragraph</span>
                </Button>
              </Col>
            </Row>
            <div className='border-top pt-3 mt-3'>
              <Form.Control size='lg' type='text' placeholder='Type here' />
            </div>
          </Col>
        </Row>
      </Layout>
    </Fragment>
  );
};

export default Home;
