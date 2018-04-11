import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import PeopleAPI from '../../API/PeopleAPI';
import PlanetsAPI from '../../API/PlanetsAPI';
import StarshipsAPI from '../../API/StarshipsAPI';
import PageContainer from '../../Components/List/Page/PageContainer';
import PeoplePage from '../../Components/People/Page/Page';
import PlanetsPage from '../../Components/Planets/Page/Page';
import StarshipsPage from '../../Components/Starships/Page/Page';
import List from '../../Components/List/List';

const Routerwrap = () => (
    <Router>
        <div>
            <Route path="/" component={Navbar} />
            <Route path="/planets" render={() => <List readData={PlanetsAPI} />} />
            <Route path="/starships" render={() => <List readData={StarshipsAPI} />} />
            <Route path="/people" render={() => <List readData={PeopleAPI} />} />
            <Route
                path="/people-page/:id"
                render={props => (
                    <PageContainer Presentation={PeoplePage} readData={PeopleAPI} {...props} />
                )}
            />
            <Route
                path="/planets-page/:id"
                render={props => (
                    <PageContainer Presentation={PlanetsPage} readData={PlanetsAPI} {...props} />
                )}
            />
            <Route
                path="/starships-page/:id"
                render={props => (
                    <PageContainer
                        Presentation={StarshipsPage}
                        readData={StarshipsAPI}
                        {...props}
                    />
                )}
            />
        </div>
    </Router>
);

export default Routerwrap;
