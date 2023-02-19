import React from 'react';
import { Container } from 'reactstrap';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from './NavBar';
import Footer from './Footer';
import Transiton from '../components/Transition'

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Met@rics</title>
    </Head>
    <main id="app" className="d-flex flex-column h-100 mb-5" data->
      <NavBar />
      <Transiton>
      <Container className="mt-5 mb-5">{children}</Container>
      </Transiton>
      <Footer />
    </main>
  </>
);

export default Layout;
