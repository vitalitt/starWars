import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import C3Chart from 'react-c3js';
import './index.css';

const PagePresentation = ({ fullData, data }) => (
    <div className="page__wrap">
        <div className="page__item">
            <span className="itemName">name: </span>
            <span className="itemValue">{fullData.name}</span>
        </div>
        <div className="page__item">
            <span className="itemName">climate: </span>
            <span className="itemValue">{fullData.climate}</span>
        </div>
        <div className="page__item">
            <span className="itemName">diameter: </span>
            <span className="itemValue">{fullData.diameter}</span>
        </div>
        <div className="page__item">
            <span className="itemName">gravity: </span>
            <span className="itemValue">{fullData.gravity}</span>
        </div>
        <div className="page__item">
            <span className="itemName">orbital_period: </span>
            <span className="itemValue">{fullData.orbital_period}</span>
        </div>
        <div className="page__item">
            <span className="itemName">population: </span>
            <span className="itemValue">{fullData.population}</span>
        </div>
        <div className="page__item">
            <span className="itemName">rotation_period: </span>
            <span className="itemValue">{fullData.rotation_period}</span>
        </div>

        <div className="item">
            <span className="itemName">surface_water: </span>
            <span className="itemValue">{fullData.surface_water}</span>
        </div>
        <div className="item">
            <span className="itemName">terrain: </span>
            <span className="itemValue">{fullData.terrain}</span>
        </div>

        <Link className="link" to="/planets">
            back
        </Link>

        <C3Chart data={data} />
    </div>
);
PagePresentation.propTypes = {
    fullData: propTypes.shape({}).isRequired,
    data: propTypes.shape({}).isRequired,
};

export default PagePresentation;
