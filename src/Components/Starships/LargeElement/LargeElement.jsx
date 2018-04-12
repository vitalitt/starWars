import { Link } from 'react-router-dom';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import propTypes from 'prop-types';
import RatingElement from '../../List/ListElement/RatingElement/RatingContainer';
import './index.css';

const LargeListElement = ({ info, urlId }) => (
    <Card align="center">
        <CardHeader align="left" title={info.name} subtitle="starship_name" />

        <CardTitle title="Starship_info" />
        <CardText>passengers: {info.passengers}</CardText>
        <CardText>model: {info.model}</CardText>
        <CardText>manufacturer: {info.manufacturer}</CardText>
        <MuiThemeProvider>
            <RatingElement name={info.name} />
        </MuiThemeProvider>

        <Link className="link" to={`/starships-page/${urlId}`}>
            learn more
        </Link>
    </Card>
);
LargeListElement.propTypes = {
    info: propTypes.shape({}).isRequired,
    urlId: propTypes.string.isRequired,
};
export default LargeListElement;
