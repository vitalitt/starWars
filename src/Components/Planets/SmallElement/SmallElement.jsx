import React from 'react';
import propTypes from 'prop-types';
import './index.css';

const SmallListElement = ({ info }) => (
    <div className="item__wrap">
        <div className="header"> {info.name} </div>

        <div className="item">
            <span className="itemName">rotation_period: </span>
            <span className="itemValue">{info.rotation_period}</span>
        </div>

        <div className="item">
            <span className="itemName">orbital_period: </span>
            <span className="itemValue">{info.orbital_period}</span>
        </div>
    </div>
);
SmallListElement.propTypes = {
    info: propTypes.shape({}).isRequired,
};

export default SmallListElement;
