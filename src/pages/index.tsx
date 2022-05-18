import React, { Fragment } from 'react';
// next files
import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';
// react bootstrap components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
//
import Typed from 'react-typed';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Typist App</title>
        <meta name='description' content='Learn how to type faster...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='vh-100 d-flex flex-column'>
        <header className='border-bottom'>
          <Navbar bg='light' variant='light'>
            <Container>
              <Navbar.Brand href='#home' className='fw-bold d-flex justify-content-start align-items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' className='mt-1' viewBox='0 0 16 16'>
                  <path d='M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm-5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm.79-5.373c.112-.078.26-.17.444-.275L3.524 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282c.024-.203.065-.37.123-.498a1.38 1.38 0 0 1 .252-.37 1.94 1.94 0 0 1 .346-.298zm2.167 0c.113-.078.262-.17.445-.275L5.692 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282a1.75 1.75 0 0 1 .118-.492c.058-.13.144-.254.257-.375a1.94 1.94 0 0 1 .346-.3z' />
                </svg>
                <span className='ms-1 h4 mb-0'>
                  TYP<span className='text-danger'>i</span>ST
                </span>
              </Navbar.Brand>
              <Nav className='ms-auto'>
                <Nav.Link href='#home'>&middot;Typist options&middot;</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <section className='flex-grow-1'>
          <div className='bg-dark'>
            <Container className=''>
              <div className='py-1 d-flex justify-content-center'>
                <span className='text-dark h5'>1</span>
                {/* 'Improve your typing skills!', 4000, 'And brag to friends.', 4000 */}
                <span className='text-white h5'>
                  <Typed
                    strings={['Improve your typing skills!!!', 'Learn/play at your own pace... ', 'And brag to friends.']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  />
                </span>
              </div>
            </Container>
          </div>
          <Container>
            <Row className='justify-content-center pt-3'>
              <Col className='' lg={8}>
                <h5 className=''>Enter paragraph content</h5>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                  <Form.Control as='textarea' rows={4} placeholder='Paste a paragraph and set time to practice or select from typist options' />
                </Form.Group>
                <Row className='border-top pt-3 mt-3'>
                  <Col xs={4}>
                    <Button variant='outline-dark' size='lg'>
                      <span>Set Time</span>
                    </Button>
                  </Col>
                  <Col xs={4}>
                    <div className='text-center'>
                      <h2>10:00 Minutes</h2>
                      <p className='text-muted small'>Default Time</p>
                    </div>
                  </Col>
                  <Col xs={4} className='text-end'>
                    <Button variant='outline-dark' size='lg'>
                      <span>Set Paragraph</span>
                    </Button>
                  </Col>
                </Row>
                <div className='border-top pt-3 mt-3'>
                  <Form.Control size='lg' type='text' placeholder='Type here' />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <footer className='border-top'>
          <Container className='text-center'>
            <p className='text-muted mb-0 py-3'>
              Powered by <span className='text-dark fw-bold'>Me of course</span>
            </p>
          </Container>
        </footer>
      </main>
    </Fragment>
  );
};

export default Home;
