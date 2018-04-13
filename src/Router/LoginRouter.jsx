// global
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// APIs
import Storage from '../API/Storage';

const LoginRouter = ({ component: Component, name, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            Storage.getData('login') === name || Storage.getData('login') === 'admin' ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/' }} />
            )
        }
    />
);

export default LoginRouter;
