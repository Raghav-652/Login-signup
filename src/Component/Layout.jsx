import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar /> {/* Sidebar is always visible */}
      <div className="content">
        {/* This is where the main content (page data) will render */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
