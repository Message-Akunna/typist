import React from 'react';
import '../assets/sass/app.scss';
import 'react-circular-progressbar/dist/styles.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
