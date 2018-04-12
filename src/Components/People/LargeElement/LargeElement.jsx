import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import seapig, { OPTIONAL, REQUIRED } from 'seapig';
import propTypes from 'prop-types';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';

import './index.css';
/* eslint-disable */
class LargeListElement extends Component {
    render() {
        const { info, urlId } = this.props;
        const { ratingChildren, labelChildren } = seapig(this.props.children, {
            rating: REQUIRED,
            label: OPTIONAL,
        });
        return (
            <Card align="center">
                <CardHeader align="left" title={info.name} subtitle="hero_name" />

                <CardTitle title="Hero_info" />
                <CardText>eye_color: {info.eye_color}</CardText>
                <CardText>hair_color: {info.hair_color}</CardText>
                <CardText>height: {info.height}</CardText>
                <CardText>mass: {info.mass}</CardText>
                <div> { /*SEAPIG*/ }
                    {labelChildren}
                    <MuiThemeProvider>{ratingChildren}</MuiThemeProvider>
                </div>
                <Link className="link" to={`/people-page/${urlId}`}>
                    learn more
                </Link>
            </Card>
        );
    }
}
/* eslint-enable */
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
    urlId: propTypes.string.isRequired,
};

export default LargeListElement;
