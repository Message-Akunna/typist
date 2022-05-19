import React, {  useContext } from 'react';
// next files
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import { useContextualRouting } from 'next-use-contextual-routing';
// react bootstrap components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
//
import { TypistOptionsContext } from '../../context/TypistOptionsContext';

const Header = () => {
  const { handleShowOptions } = useContext(TypistOptionsContext);

  return (
    <header className='border-bottom'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Link href='/' passHref>
            <Navbar.Brand className='fw-bold d-flex justify-content-start align-items-center'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' className='mt-1 mb-0' viewBox='0 0 16 16'>
                <path d='M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm-5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm.79-5.373c.112-.078.26-.17.444-.275L3.524 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282c.024-.203.065-.37.123-.498a1.38 1.38 0 0 1 .252-.37 1.94 1.94 0 0 1 .346-.298zm2.167 0c.113-.078.262-.17.445-.275L5.692 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282a1.75 1.75 0 0 1 .118-.492c.058-.13.144-.254.257-.375a1.94 1.94 0 0 1 .346-.3z' />
              </svg>
              <span className='ms-1 h4 mb-0'>
                TYP<span className='text-danger'>i</span>ST
              </span>
            </Navbar.Brand>
          </Link>
          <Nav className='ms-auto'>
            {/* <Link href='/#' passHref>
            </Link> */}
            <Button onClick={handleShowOptions} variant='outline-danger' size='sm' className=''>
              &middot; Typist options &middot;
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
