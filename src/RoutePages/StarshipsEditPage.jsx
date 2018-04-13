// global
import React from 'react';
// APIs
import StarshipsAPI from '../API/StarshipsAPI';
// Components
import PageContainer from '../Pages/List/Page/PageContainer';
import starshipsPageEdit from '../Pages/Starships/PageEdit/PageEdit';

const Page = props => (
    <PageContainer Presentation={starshipsPageEdit} readData={StarshipsAPI} match={props.match} />
);

export default Page;
