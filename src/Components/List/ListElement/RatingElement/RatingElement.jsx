import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Storage from '../../../../API/Storage';

class RatingElement extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    };
    constructor() {
        super();
        this.state = {
            rating: 0,
        };
        this.voteUp = this.voteUp.bind(this);
        this.voteDown = this.voteDown.bind(this);
    }
    componentDidMount() {
        this.setLastRating();
    }
    setLastRating() {
        this.setState({
            rating: Storage.getData(this.props.name) || 0,
        });
    }
    voteUp(e) {
        e.stopPropagation();
        Storage.setData(this.props.name, this.state.rating + 1);
        this.setState(prevState => ({
            rating: +prevState.rating + 1,
        }));
    }
    voteDown(e) {
        e.stopPropagation();
        localStorage.setItem(this.props.name, this.state.rating - 1);
        this.setState(prevState => ({
            rating: +prevState.rating - 1,
        }));
    }

    render() {
        return (
            <div className="ratingButtons">
                <div className="screen">{this.state.rating}</div>
                <button onClick={this.voteUp}>Up</button>
                <button onClick={this.voteDown}>Down</button>
            </div>
        );
    }
}

export default RatingElement;
