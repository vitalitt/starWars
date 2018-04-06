import propTypes from 'prop-types';
import React from 'react';

const RatingPresentation = ({ rating, voteUp, voteDown }) => (
    <div className="ratingButtons">
        <div className="screen">{rating}</div>
        <button onClick={voteUp}>Up</button>
        <button onClick={voteDown}>Down</button>
    </div>
);

RatingPresentation.propTypes = {
    rating: propTypes.number.isRequired,
    voteUp: propTypes.func.isRequired,
    voteDown: propTypes.func.isRequired,
};

export default RatingPresentation;
