import React, { Component } from 'react';
import Storage from '../../../../API/Storage';
import RatingPresentation from './RatingPresentation';

class RatingContainer extends Component {
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
            rating: +Storage.getData(this.props.name) || 0,
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
        const { rating } = this.state;
        return <RatingPresentation rating={rating} voteUp={this.voteUp} voteDown={this.voteDown} />;
    }
}

export default RatingContainer;
