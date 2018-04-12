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
import peoplePageEdit from '../People/PageEdit/PageEdit';
import planetsPageEdit from '../Planets/PageEdit/PageEdit';
import starshipsPageEdit from '../Starships/PageEdit/PageEdit';
import Login from '../Login/Login';
import Logged from '../../API/Logged';

const Routerwrap = () => (
    <Router>
        <div>
            <Route path="/" component={Navbar} />
            <Route path="/login" component={Login} />
            <Route path="/planets" render={() => <List readData={PlanetsAPI} />} />
            <Route path="/starships" render={() => <List readData={StarshipsAPI} />} />
            <Route path="/people" render={() => <List readData={PeopleAPI} />} />
            <Route
                path="/people-page/:id"
                render={props =>
                    Logged.checkUserLogin() ? (
                        <PageContainer Presentation={PeoplePage} readData={PeopleAPI} {...props} />
                    ) : (
                        'not logined'
                    )
                }
            />
            <Route
                path="/planets-page/:id"
                render={props =>
                    Logged.checkUserLogin() ? (
                        <PageContainer
                            Presentation={PlanetsPage}
                            readData={PlanetsAPI}
                            {...props}
                        />
                    ) : (
                        'not logined'
                    )
                }
            />
            <Route
                path="/starships-page/:id"
                render={props =>
                    Logged.checkUserLogin() ? (
                        <PageContainer
                            Presentation={StarshipsPage}
                            readData={StarshipsAPI}
                            {...props}
                        />
                    ) : (
                        'not logined'
                    )
                }
            />
            <Route
                path="/people-edit/:id"
                render={props =>
                    Logged.checkAdminLogin() ? (
                        <PageContainer
                            Presentation={peoplePageEdit}
                            readData={PeopleAPI}
                            {...props}
                        />
                    ) : (
                        'not admin'
                    )
                }
            />
            <Route
                path="/planets-edit/:id"
                render={props =>
                    Logged.checkAdminLogin() ? (
                        <PageContainer
                            Presentation={planetsPageEdit}
                            readData={PlanetsAPI}
                            {...props}
                        />
                    ) : (
                        'not admin'
                    )
                }
            />
            <Route
                path="/starships-edit/:id"
                render={props =>
                    Logged.checkAdminLogin() ? (
                        <PageContainer
                            Presentation={starshipsPageEdit}
                            readData={StarshipsAPI}
                            {...props}
                        />
                    ) : (
                        'not admin'
                    )
                }
            />
        </div>
    </Router>
);

export default Routerwrap;
