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
    let user = Storage.getData('login');
    if (user !== 'admin' && user !== 'user') {
        user = 'dont_logined';
    }
    return (
        <div>
            <span>Status: </span>
            <img className="imgHeader" src={logo(user)} alt="logo" />
            {user}
        </div>
    );
};

export default Header;
