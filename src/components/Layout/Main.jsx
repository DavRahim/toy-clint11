import React from 'react';
import Navber from '../Home/Shared/Navber/Navber.jsx';
import Footer from '../Home/Shared/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
      <div>
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default Main;