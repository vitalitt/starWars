// global
import React from 'react';
// components
import PageInfo from '../../Components/Starships/PageInfo/PageInfo';
import PageEdit from '../../Components/Starships/PageEdit/PageEdit';
import Graphic from '../../Components/Graphic/Graphic';

import './index.css';

const PagePresentation = ({ fullData, id, isEdit }) =>
    isEdit === true ? (
        <div className="page__wrap">
            <PageEdit fullData={fullData} id={id} />
        </div>
    ) : (
        <div className="page__wrap">
            <PageInfo fullData={fullData} id={id} />
            <Graphic type={['bar']} interval={1000} />
        </div>
    );

export default PagePresentation;
