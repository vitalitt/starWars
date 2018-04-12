import propTypes from 'prop-types';
import React from 'react';
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

RatingPresentation.propTypes = {
    rating: propTypes.number.isRequired,
    voteUp: propTypes.func.isRequired,
    voteDown: propTypes.func.isRequired,
};

export default RatingPresentation;
