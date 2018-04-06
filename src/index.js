import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import PeopleAPI from './API/PeopleAPI';
import PlanetsAPI from './API/PlanetsAPI';
import StarshipsAPI from './API/StarshipsAPI';
import PeoplePage from './Components/People/Page/Page';
import PlanetsPage from './Components/Planets/Page/Page';
import StarshipsPage from './Components/Starships/Page/Page';
import './index.css';
import List from './Components/List/List';

/* eslint-disable */
ReactDOM.render(
    <Router>
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
            <Route path="/" />
            <Route path="/planets" render={() => <List readData={PlanetsAPI} />} />
            <Route path="/starships" render={() => <List readData={StarshipsAPI} />} />
            <Route path="/people" render={() => <List readData={PeopleAPI} />} />
            <Route
                path="/people-page/:id"
                render={props => <PeoplePage readData={PeopleAPI} {...props} />}
            />
            <Route
                path="/planets-page/:id"
                render={props => <PlanetsPage readData={PlanetsAPI} {...props} />}
            />
            <Route
                path="/starships-page/:id"
                render={props => <StarshipsPage readData={StarshipsAPI} {...props} />}
            />
        </div>
    </Router>,
    document.getElementById('root')
);
/* eslint-enable */
