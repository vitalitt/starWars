import React from 'react';
import PageInfo from '../PageInfo/PageInfo';
import Graphic from '../../Graphic/Graphic';

import './index.css';

const PagePresentation = ({ fullData, id }) => (
    <div className="page__wrap">
        <PageInfo fullData={fullData} id={id} />
        <Graphic type={['pie']} interval={1500} />
    </div>
);

export default PagePresentation;
