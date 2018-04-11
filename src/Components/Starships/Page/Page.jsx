import React from 'react';
import propTypes from 'prop-types';
import PageInfo from '../PageInfo/PageInfo';
import Graphic from '../../Graphic/Graphic';

import './index.css';

const PagePresentation = ({ fullData }) => (
    <div className="page__wrap">
        <PageInfo fullData={fullData} />
        <Graphic type={['donut']} interval={1000} />
    </div>
);
PagePresentation.propTypes = {
    fullData: propTypes.shape({}).isRequired,
};

export default PagePresentation;
