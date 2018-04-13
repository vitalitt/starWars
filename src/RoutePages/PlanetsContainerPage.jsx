// global
import React from 'react';
// APIs
import PlanetsAPI from '../API/PlanetsAPI';
// Components
import PageContainer from '../Pages/List/Page/PageContainer';
import PlanetsPage from '../Pages/Planets/Page/Page';

const Page = props => (
    <PageContainer Presentation={PlanetsPage} readData={PlanetsAPI} match={props.match} />
);

export default Page;
