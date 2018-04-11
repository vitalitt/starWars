import React from 'react';
import { Link } from 'react-router-dom';

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
            </ul>
        </div>
    </div>
);

export default Navbar;
