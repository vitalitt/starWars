// global
import React from 'react';
// components
import PageInfo from '../PageInfo/PageInfo';
import Graphic from '../../../Components/Graphic/Graphic';
// css
import './index.css';

const PagePresentation = ({ fullData, id }) => (
    <div className="page__wrap">
        <PageInfo fullData={fullData} id={id} />
        <Graphic type={['pie']} interval={1500} />
    </div>
);

export default PagePresentation;
