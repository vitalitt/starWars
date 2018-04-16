// global
import React from 'react';
// APIs
import PlanetsAPI from '../API/PlanetsAPI';
// Components
import PageContainer from '../Pages/PageContainer/PageContainer';
import PlanetsIndividualPage from '../Pages/PlanetsIndividualPage/PlanetsIndividualPage';

const Page = props => (
    <PageContainer
        Presentation={PlanetsIndividualPage}
        readData={PlanetsAPI}
        match={props.match}
        isEdit={props.edit}
    />
);

export default Page;
