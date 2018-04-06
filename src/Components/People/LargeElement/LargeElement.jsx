import { Link } from 'react-router-dom';
import React from 'react';
import propTypes from 'prop-types';
import RatingElement from '../../List/ListElement/RatingElement/RatingContainer';
import './index.css';

const LargeListElement = ({ info }) => (
    <div className="item__wrap-large">
        <div className="header"> {info.name} </div>
        <div className="item">
            <span className="itemName">eye_color: </span>
            <span className="itemValue">{info.eye_color}</span>
        </div>
        <div className="item">
            <span className="itemName">hair_color: </span>
            <span className="itemValue">{info.hair_color}</span>
        </div>
        <div className="item">
            <span className="itemName">height: </span>
            <span className="itemValue">{info.height}</span>
        </div>
        <div className="item">
            <span className="itemName">mass: </span>
            <span className="itemValue">{info.mass}</span>
        </div>

        <RatingElement name={info.name} />
        <Link className="link" to={`/people-page/${info.url.slice(-2)}`}>
            {/* info.url - full url, we need only id */}
            learn more
        </Link>
    </div>
);

LargeListElement.propTypes = {
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

export default LargeListElement;
