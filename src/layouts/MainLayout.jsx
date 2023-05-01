import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout = () => {
    return (
        <>
      <Header/>
        <Outlet></Outlet>
        </>
    );
};

export default MainLayout;