// global
import React from 'react';
// APIs
import PeopleAPI from '../API/PeopleAPI';
// Components
import PageContainer from '../Pages/List/Page/PageContainer';
import PeoplePage from '../Pages/People/Page/Page';

const Page = props => (
    <PageContainer Presentation={PeoplePage} readData={PeopleAPI} match={props.match} />
);

export default Page;
