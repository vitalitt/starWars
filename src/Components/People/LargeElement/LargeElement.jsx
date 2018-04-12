import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import seapig, { OPTIONAL, REQUIRED } from 'seapig';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';

import './index.css';
/* eslint-disable */
class LargeListElement extends Component {
    render() {
        const { info, urlId } = this.props;
        const { rating_children, label_children } = seapig(this.props.children, {
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
    }
}
/* eslint-enable */

export default LargeListElement;
