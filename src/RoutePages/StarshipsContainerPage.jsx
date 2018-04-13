// global
import React from 'react';
// APIs
import StarshipsAPI from '../API/StarshipsAPI';
// Components
import PageContainer from '../Pages/List/Page/PageContainer';
import StarshipsPage from '../Pages/Starships/Page/Page';

const Page = props => (
    <PageContainer Presentation={StarshipsPage} readData={StarshipsAPI} match={props.match} />
);

export default Page;
