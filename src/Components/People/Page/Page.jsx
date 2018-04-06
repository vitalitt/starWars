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
        this.returnData = this.returnData.bind(this);
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
    returnData() {
        const { fullData } = this.state;
        return (
            <div className="page__wrap">
                <div className="page__item">
                    <span className="itemName">name: </span>
                    <span className="itemValue">{fullData.name}</span>
                </div>
                <div className="page__item">
                    <span className="itemName">birth_year: </span>
                    <span className="itemValue">{fullData.birth_year}</span>
                </div>
                <div className="page__item">
                    <span className="itemName">eye_color: </span>
                    <span className="itemValue">{fullData.eye_color}</span>
                </div>
                <div className="page__item">
                    <span className="itemName">gender: </span>
                    <span className="itemValue">{fullData.gender}</span>
                </div>
                <div className="page__item">
                    <span className="itemName">hair_color: </span>
                    <span className="itemValue">{fullData.hair_color}</span>
                </div>
                <div className="page__item">
                    <span className="itemName">height: </span>
                    <span className="itemValue">{fullData.height}</span>
                </div>
                <div className="page__item">
                    <span className="itemName">mass: </span>
                    <span className="itemValue">{fullData.mass}</span>
                </div>

                <div className="item">
                    <span className="itemName">skin_color: </span>
                    <span className="itemValue">{fullData.skin_color}</span>
                </div>

                <div className="item">
                    <span className="itemName">homeworld: </span>
                    <Link
                        className="itemValue"
                        to={`/planets-page/${fullData.homeworld.slice(-2)}`}
                    >
                        {fullData.homeworld}
                    </Link>
                </div>

                <Link className="link" to="/people">
                    back
                </Link>
            </div>
        );
    }
    render() {
        return <div>{this.state.fullData ? this.returnData() : 'wait...'}</div>;
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
