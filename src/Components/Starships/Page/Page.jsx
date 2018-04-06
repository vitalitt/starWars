import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

const PagePresentation = ({ fullData }) => (
    <div className="page__wrap">
        <div className="page__item">
            <span className="itemName">name: </span>
            <span className="itemValue">{fullData.name}</span>
        </div>
        <div className="page__item">
            <span className="itemName">MGLT: </span>
            <span className="itemValue">{fullData.MGLT}</span>
        </div>
        <div className="page__item">
            <span className="itemName">cargo_capacity: </span>
            <span className="itemValue">{fullData.cargo_capacity}</span>
        </div>
        <div className="page__item">
            <span className="itemName">consumables: </span>
            <span className="itemValue">{fullData.consumables}</span>
        </div>
        <div className="page__item">
            <span className="itemName">cost_in_credits: </span>
            <span className="itemValue">{fullData.cost_in_credits}</span>
        </div>
        <div className="page__item">
            <span className="itemName">crew: </span>
            <span className="itemValue">{fullData.crew}</span>
        </div>
        <div className="page__item">
            <span className="itemName">hyperdrive_rating: </span>
            <span className="itemValue">{fullData.hyperdrive_rating}</span>
        </div>

        <div className="item">
            <span className="itemName">manufacturer: </span>
            <span className="itemValue">{fullData.manufacturer}</span>
        </div>
        <div className="item">
            <span className="itemName">max_atmosphering_speed: </span>
            <span className="itemValue">{fullData.max_atmosphering_speed}</span>
        </div>

        <Link className="link" to="/starships">
            back
        </Link>
    </div>
);
PagePresentation.propTypes = {
    fullData: propTypes.shape({}).isRequired,
};

export default PagePresentation;
