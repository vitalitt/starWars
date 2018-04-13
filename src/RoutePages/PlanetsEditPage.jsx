// global
import React from 'react';
// APIs
import PlanetsAPI from '../API/PlanetsAPI';
// Components
import PageContainer from '../Pages/List/Page/PageContainer';
import planetsPageEdit from '../Pages/Planets/PageEdit/PageEdit';

const Page = props => (
    <PageContainer Presentation={planetsPageEdit} readData={PlanetsAPI} match={props.match} />
);

export default Page;
