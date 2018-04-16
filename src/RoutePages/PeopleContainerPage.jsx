// global
import React from 'react';
// APIs
import PeopleAPI from '../API/PeopleAPI';
// Components
import PageContainer from '../Pages/PageContainer/PageContainer';
import PeopleIndividualPage from '../Pages/PeopleIndividualPage/PeopleIndividualPage';

const Page = props => (
    <PageContainer
        Presentation={PeopleIndividualPage}
        readData={PeopleAPI}
        match={props.match}
        isEdit={props.edit}
    />
);

export default Page;
