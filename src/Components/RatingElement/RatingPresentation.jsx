// global
import React from 'react';

//  materialUI
import RaisedButton from 'material-ui/RaisedButton';
import { CardActions } from 'material-ui/Card';

const RatingPresentation = ({ rating, voteUp, voteDown }) => (
    <div className="ratingButtons">
        <div className="screen">{rating}</div>
        <CardActions>
            <RaisedButton onClick={voteUp} label="Up" primary="true" />
            <RaisedButton onClick={voteDown} label="Down" primary="true" />
        </CardActions>
    </div>
);

export default RatingPresentation;
