import React, { Fragment } from 'react';
// react bootstrap components
import Container from 'react-bootstrap/Container';
//external components
import Typed from 'react-typed';
// 
import Footer from './Footer';
import Header from './Header';
import AppHead from './AppHead';
import TypistOptions from './../TypistOptions';
// TypistOptionContext
import { TypistOptionProvider } from '../../context/TypistOptionsContext';


type Props = {
  children: React.ReactNode;
};

const Layout = ({
  children
}: Props) => {
  return (
    <Fragment>
      <AppHead/>
      <TypistOptionProvider>
        <main className='vh-100 d-flex flex-column'>
          <Header/>
          <section className='flex-grow-1'>
            <div className='bg-dark'>
              <Container className=''>
                <div className='py-1 d-flex justify-content-center'>
                  <span className='text-dark h5'>1</span>
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
            <div className=''>
              <Container className=''>
                {children}
              </Container>
            </div>
          </section>
          <Footer/>
          <TypistOptions/>
        </main>
      </TypistOptionProvider>
    </Fragment>
  );
};

export default Layout;
