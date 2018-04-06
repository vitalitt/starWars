import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

class Page extends Component {
    constructor() {
        super();
        this.state = {
            fullData: '',
        };
        this.loadData = this.loadData.bind(this);
    }
    componentDidMount() {
        this.loadData().then(res => {
            this.setState({ fullData: res });
        });
    }
    loadData() {
        const { id } = this.props.match.params;
        const { readData } = this.props;
        return readData.getListById(id);
    }
    render() {
        const { fullData } = this.state;
        return (
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
            </div>
        );
    }
}
Page.propTypes = {
    match: propTypes.shape({
        params: propTypes.shape({
            id: propTypes.string.isRequired,
        }),
    }).isRequired,
    readData: propTypes.func.isRequired,
};

export default Page;
