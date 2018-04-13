// global
import React from 'react';
// APIs
import PeopleAPI from '../API/PeopleAPI';
// Components
import PageContainer from '../Pages/List/Page/PageContainer';
import peoplePageEdit from '../Pages/People/PageEdit/PageEdit';

const Page = props => (
    <PageContainer Presentation={peoplePageEdit} readData={PeopleAPI} match={props.match} />
);

export default Page;
