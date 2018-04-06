import { Link } from 'react-router-dom';
import React from 'react';
import propTypes from 'prop-types';
import RatingElement from '../../List/ListElement/RatingElement/RatingElement';
import './index.css';

const LargeListElement = ({ info }) => (
    <div className="item__wrap-large">
        <div className="header"> {info.name} </div>

        <div className="item">
            <span className="itemName">rotation_period: </span>
            <span className="itemValue">{info.rotation_period}</span>
        </div>

        <div className="item">
            <span className="itemName">orbital_period: </span>
            <span className="itemValue">{info.orbital_period}</span>
        </div>
        <div className="item">
            <span className="itemName">diameter: </span>
            <span className="itemValue">{info.diameter}</span>
        </div>
        <div className="item">
            <span className="itemName">climate: </span>
            <span className="itemValue">{info.climate}</span>
        </div>

        <RatingElement name={info.name} />
        <Link className="link" to={`/planets-page/${info.url.slice(-2)}`}>
            learn more
        </Link>
    </div>
);
LargeListElement.propTypes = {
    info: propTypes.shape({}).isRequired,
};
export default LargeListElement;
