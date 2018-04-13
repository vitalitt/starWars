// global
import React from 'react';
import { Link } from 'react-router-dom';
import seapig, { OPTIONAL, REQUIRED } from 'seapig';
// materialUi
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
// css
import './index.css';

/* eslint-disable */
const LargeListElement = props => {
    const { info, urlId } = props;
    const { rating_children, label_children } = seapig(props.children, {
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
            <div>
                <label_children />
                <MuiThemeProvider>
                    <rating_children />
                </MuiThemeProvider>
            </div>
            <Link className="link" to={`/people-page/${urlId}`}>
                learn more
            </Link>
        </Card>
    );
};

/* eslint-enable */

export default LargeListElement;
