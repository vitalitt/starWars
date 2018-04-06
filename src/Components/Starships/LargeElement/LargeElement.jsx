import { Link } from 'react-router-dom';
import React from 'react';
import propTypes from 'prop-types';
import RatingElement from '../../List/ListElement/RatingElement/RatingContainer';
import './index.css';

const LargeListElement = ({ info }) => (
    <div className="item__wrap-large">
        <div className="header"> {info.name} </div>

        <div className="item">
            <span className="itemName">name: </span>
            <span className="itemValue">{info.name}</span>
        </div>

        <div className="item">
            <span className="itemName">passengers: </span>
            <span className="itemValue">{info.passengers}</span>
        </div>
        <div className="item">
            <span className="itemName">model: </span>
            <span className="itemValue">{info.model}</span>
        </div>
        <div className="item">
            <span className="itemName">manufacturer: </span>
            <span className="itemValue">{info.manufacturer}</span>
        </div>

        <RatingElement name={info.name} />
        <Link className="link" to={`/starships-page/${info.url.slice(-2)}`}>
            learn more
        </Link>
    </div>
);
LargeListElement.propTypes = {
    info: propTypes.shape({}).isRequired,
};
export default LargeListElement;
