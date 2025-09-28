import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
    return (
        <div className="navbar bg-[#5c2702] shadow-sm">
            <Link to={'/'} className="btn mx-auto text-orange-600 btn-ghost text-2xl text-center">Espresso Emporium</Link>
        </div>
    );
};

export default NavBar;