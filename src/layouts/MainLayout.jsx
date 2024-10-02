import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../partials/Sidebar';

const MainLayout = () => {
  return (
    <div style={layoutStyle}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}> 
        <Sidebar />
        <main style={mainStyle}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyle = {
  flex: 1,
  paddingTop: '12%',
  paddingLeft: '12%',
}
;

export default MainLayout;
