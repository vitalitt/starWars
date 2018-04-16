// global
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// APIs
import Storage from '../API/Storage';

const AdminRouter = ({ component: Component, name, edit, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            Storage.getData('role') === 'admin' ? (
                <Component edit={edit} {...props} />
            ) : (
                <Redirect to={{ pathname: '/' }} />
            )
        }
    />
);

export default AdminRouter;
