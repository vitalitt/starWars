// global
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// components
import Navbar from '../Components/Navbar/Navbar';
import PeopleList from '../Pages/PeopleList/PeopleList';
import PlanetList from '../Pages/PlanetList/PlanetList';
import StarshipList from '../Pages/StarshipsList/StarshipsList';
import Login from '../Pages/Login/Login';
import AdminRouter from '../Router/AdminRouter';
import LoginRouter from '../Router/LoginRouter';
// pages
import PeopleContainerPage from '../RoutePages/PeopleContainerPage';
import PlanetsContainerPage from '../RoutePages/PlanetsContainerPage';
import StarshipsContainerPage from '../RoutePages/StarshipsContainerPage';

const Routerwrap = () => (
    <Router>
        <div>
            <LoginRouter path="/" component={Navbar} />
            <Route path="/login" component={Login} />
            <LoginRouter path="/planets" component={PlanetList} />
            <LoginRouter path="/starships" component={StarshipList} />
            <LoginRouter path="/people" component={PeopleList} />

            <LoginRouter path="/people-page/:id" component={PeopleContainerPage} />
            <AdminRouter path="/people-edit/:id" component={PeopleContainerPage} edit />

            <LoginRouter path="/planets-page/:id" component={PlanetsContainerPage} />
            <AdminRouter path="/planets-edit/:id" component={PlanetsContainerPage} edit />

            <LoginRouter path="/starships-page/:id" component={StarshipsContainerPage} />
            <AdminRouter path="/starships-edit/:id" component={StarshipsContainerPage} edit />
        </div>
    </Router>
);

export default Routerwrap;
