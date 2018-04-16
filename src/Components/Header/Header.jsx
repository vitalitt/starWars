import React from 'react';
import Storage from '../../API/Storage';

import adminLogo from './admin.png';
import userLogo from './user.png';
import unnamedLogo from './dontLogined.png';

import './index.css';

const Header = () => {
    const logo = user => {
        const userLogos = {
            admin: adminLogo,
            user: userLogo,
            dont_logined: unnamedLogo,
        };
        return userLogos[user];
    };
    const name = Storage.getData('name');
    let role = Storage.getData('role');
    if (role !== 'admin' && role !== 'user') {
        role = 'dont_logined';
    }
    return (
        <div>
            <span>name: </span>
            {name}
            <br />
            <span>Status: </span>
            <img className="imgHeader" src={logo(role)} alt="logo" />
            {role}
        </div>
    );
};

export default Header;
