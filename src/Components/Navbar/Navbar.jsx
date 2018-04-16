// global
import React from 'react';
import { Link } from 'react-router-dom';
// components
import Header from '../Header/Header';

const Navbar = () => (
    <div className="main">
        <div className="navbar">
            <h1>Wiki</h1>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/people">people</Link>
                </li>
                <li>
                    <Link to="/planets">planets</Link>
                </li>
                <li>
                    <Link to="/starships">starships</Link>
                </li>
                <li>
                    <Link to="/login">login</Link>
                </li>
            </ul>
            <Header />
        </div>
    </div>
);

export default Navbar;
