import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {

    const headerLogo = require('../Header/logo_white.png')

    return (
        <header>
            <div className="header-logo">
                <img src={headerLogo}
                    alt="PizzaShop Logo"/>
            </div>

            <ul className="header-menu">
                <Link to='/menu' style={{textDecoration: "none"}}>Pizza</Link>
                <li>Sides</li>
                <li>Salads</li>
                <li>Deserts</li>
                <li>Beverages</li>
                <li>Deals</li>
                <li>Contact</li>
                <Link to="/cart" style={{textDecoration: "none"}}>Cart</Link>
                <Link to='/login' style={{textDecoration: "none"}}>Login</Link>           
            </ul>

        </header>

    )
}

export default Header