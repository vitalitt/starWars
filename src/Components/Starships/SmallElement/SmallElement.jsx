import React from 'react';
import propTypes from 'prop-types';
import './index.css';

const SmallListElement = ({ info }) => (
    <div className="item__wrap">
        <div className="header"> {info.name} </div>

        <div className="item">
            <span className="itemName">name: </span>
            <span className="itemValue">{info.name}</span>
        </div>

        <div className="item">
            <span className="itemName">passengers: </span>
            <span className="itemValue">{info.passengers}</span>
        </div>
    </div>
);
SmallListElement.propTypes = {
    info: propTypes.shape({}).isRequired,
};

export default SmallListElement;
