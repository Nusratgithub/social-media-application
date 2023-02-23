import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

const main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default main;