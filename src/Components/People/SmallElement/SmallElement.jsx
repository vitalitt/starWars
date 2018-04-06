import React from 'react';
import propTypes from 'prop-types';
import './index.css';

const SmallListElement = ({ info }) => (
    <div className="item__wrap">
        <div className="header"> {info.name} </div>

        <div className="item">
            <span className="itemName">mass: </span>
            <span className="itemValue">{info.mass}</span>
        </div>

        <div className="item">
            <span className="itemName">height: </span>
            <span className="itemValue">{info.height}</span>
        </div>
    </div>
);
SmallListElement.propTypes = {
    info: propTypes.shape({
        birth_year: propTypes.string.isRequired,
        created: propTypes.string.isRequired,
        edited: propTypes.string.isRequired,
        eye_color: propTypes.string.isRequired,
        gender: propTypes.string.isRequired,
        hair_color: propTypes.string.isRequired,
        height: propTypes.string.isRequired,
        homeworld: propTypes.string.isRequired,
        mass: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        skin_color: propTypes.string.isRequired,
        url: propTypes.string.isRequired,
    }).isRequired,
};
export default SmallListElement;
