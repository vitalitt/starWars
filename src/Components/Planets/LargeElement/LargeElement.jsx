import { Link } from 'react-router-dom';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import propTypes from 'prop-types';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RatingElement from '../../List/ListElement/RatingElement/RatingContainer';

const LargeListElement = ({ info, urlId }) => (
    <Card align="center">
        <CardHeader align="left" title={info.name} subtitle="planet_name" />

        <CardTitle title="Planet_info" />
        <CardText>rotation_period: {info.rotation_period}</CardText>
        <CardText>orbital_period: {info.orbital_period}</CardText>
        <CardText>diameter: {info.diameter}</CardText>
        <CardText>climate: {info.climate}</CardText>
        <MuiThemeProvider>
            <RatingElement name={info.name} />
        </MuiThemeProvider>

        <Link className="link" to={`/planets-page/${urlId}`}>
            learn more
        </Link>
    </Card>
);
LargeListElement.propTypes = {
    info: propTypes.shape({}).isRequired,
    urlId: propTypes.string.isRequired,
};
export default LargeListElement;
