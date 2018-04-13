// global
import React from 'react';
// components
import PageInfo from '../PageInfo/PageInfo';
import Graphic from '../../../Components/Graphic/Graphic';

import './index.css';

const PagePresentation = ({ fullData, id }) => (
    <div className="page__wrap">
        <PageInfo fullData={fullData} id={id} />
        <Graphic type={['donut']} interval={1000} />
    </div>
);

export default PagePresentation;