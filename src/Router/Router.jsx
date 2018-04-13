// global
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// components
import Navbar from '../Pages/Navbar/Navbar';
import List from '../Pages/List/List';
import Login from '../Pages/Login/Login';
import LoginRouter from '../Router/LoginRouter';
// pages
import PeopleContainerPage from '../RoutePages/PeopleContainerPage';
import PlanetsContainerPage from '../RoutePages/PlanetsContainerPage';
import StarshipsContainerPage from '../RoutePages/StarshipsContainerPage';
import PeopleEditPage from '../RoutePages/PeopleEditPage';
import PlanetsEditPage from '../RoutePages/PlanetsEditPage';
import StarshipsEditPage from '../RoutePages/StarshipsEditPage';
// APIs
import PeopleAPI from '../API/PeopleAPI';
import PlanetsAPI from '../API/PlanetsAPI';
import StarshipsAPI from '../API/StarshipsAPI';

const Routerwrap = () => (
    <Router>
        <div>
            <Route path="/" component={Navbar} />
            <Route path="/login" component={Login} />
            <Route path="/planets" render={() => <List readData={PlanetsAPI} />} />
            <Route path="/starships" render={() => <List readData={StarshipsAPI} />} />
            <Route path="/people" render={() => <List readData={PeopleAPI} />} />

            <LoginRouter path="/people-page/:id" component={PeopleContainerPage} name="user" />
            <LoginRouter path="/planets-page/:id" component={PlanetsContainerPage} name="user" />
            <LoginRouter
                path="/starships-page/:id"
                component={StarshipsContainerPage}
                name="user"
            />

            <LoginRouter path="/people-edit/:id" component={PeopleEditPage} name="admin" />
            <LoginRouter path="/planets-edit/:id" component={PlanetsEditPage} name="admin" />
            <LoginRouter path="/starships-edit/:id" component={StarshipsEditPage} name="admin" />
        </div>
    </Router>
);

export default Routerwrap;
