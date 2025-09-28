import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const MainLayout = () => {
    return (
        <div>
            <nav>
                <NavBar></NavBar>
            </nav>
            <Header></Header>
           <div className='max-w-[1600px] mx-auto'>
             <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLayout;