import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {

    const headerLogo = require('../Header/logo_white.png')

    return (
        <header>
            <div className="header-logo">
                <Link to='/'>
                    <img src={headerLogo}
                        alt="PizzaShop Logo"/>
                </Link>
            </div>

            <ul className="header-menu">
                <Link to='/menu' style={{textDecoration: "none", padding: "0px 5px"}}>Pizza</Link>
                <Link to='/sides' style={{textDecoration: "none", padding: "0px 5px"}}>Sides</Link>
                <Link to='/salads' style={{textDecoration: "none", padding: "0px 5px"}}>Salads</Link>
                <Link to='/desserts' style={{textDecoration: "none", padding: "0px 5px"}}>Desserts</Link>
                <Link to="/beverages" style={{textDecoration: "none", padding: "0px 5px" }}>Beverages</Link>
                <Link to='/deals' style={{textDecoration: "none", padding: "0px 5px"}}>Deals</Link>
                <Link to="/cart" style={{textDecoration: "none", padding: "0px 5px"}}>Cart</Link>
                <Link to='/login' style={{textDecoration: "none", padding: "0px 5px"}}>Login</Link>
                <Link to='/contact' style={{textDecoration: "none", padding: "0px 5px"}}>Contact</Link>       
            </ul>

        </header>

    )
}

export default Header