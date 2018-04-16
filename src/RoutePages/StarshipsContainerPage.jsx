// global
import React from 'react';
// APIs
import StarshipsAPI from '../API/StarshipsAPI';
// Components
import PageContainer from '../Pages/PageContainer/PageContainer';
import StarshipsIndividualPage from '../Pages/StarshipsIndividualPage/StarshipsIndividualPage';

const Page = props => (
    <PageContainer
        Presentation={StarshipsIndividualPage}
        readData={StarshipsAPI}
        match={props.match}
        isEdit={props.edit}
    />
);

export default Page;
