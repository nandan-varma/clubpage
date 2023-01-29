import React from 'react';
import { Container } from 'reactstrap';
import Head from 'next/head';

import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Webpage</title>
    </Head>
    <main id="app" className="d-flex flex-column h-100" data->
      <NavBar />
      <Container className="flex-grow-1 mt-5">{children}</Container>
      <Footer />
    </main>
  </>
);

export default Layout;
