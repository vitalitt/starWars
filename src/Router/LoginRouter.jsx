// global
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// APIs
import Storage from '../API/Storage';

const LoginRouter = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            Storage.getData('role') ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/login' }} />
            )
        }
    />
);

export default LoginRouter;
