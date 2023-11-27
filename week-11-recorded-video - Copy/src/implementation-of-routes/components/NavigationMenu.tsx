import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationMenu = () => {
    return (
        // <div className="navigation-links">
        //     <NavLink to="/" activeClassName="active" exact>Home</NavLink>
        //     <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        // </div>

        <div className='navigation-links'>
            <NavLink to='/' activeClassName='active' exact>Home</NavLink>
            <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
        </div>
    );
};

export default NavigationMenu;