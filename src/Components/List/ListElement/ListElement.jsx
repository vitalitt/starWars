import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PeopleSmallE from '../../People/SmallElement/SmallElement';
import PeopleLargeE from '../../People/LargeElement/LargeElement';
import PlanetsSmallE from '../../Planets/SmallElement/SmallElement';
import PlanetsLargeE from '../../Planets/LargeElement/LargeElement';
import StarshipsSmallE from '../../Starships/SmallElement/SmallElement';
import StarshipsLargeE from '../../Starships/LargeElement/LargeElement';

class ListElement extends Component {
    static propTypes = {
        from: PropTypes.string.isRequired,
        info: PropTypes.instanceOf(Object).isRequired,
    };
    constructor() {
        super();
        this.state = {
            clicked: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: !this.state.clicked,
        });
    }

    render() {
        const { from } = this.props;
        let newLarge;
        let newSmall;
        if (from === 'people') {
            newLarge = <PeopleLargeE info={this.props.info} />;
            newSmall = <PeopleSmallE info={this.props.info} />;
        }
        if (from === 'planets') {
            newLarge = <PlanetsLargeE info={this.props.info} />;
            newSmall = <PlanetsSmallE info={this.props.info} />;
        }
        if (from === 'starships') {
            newLarge = <StarshipsLargeE info={this.props.info} />;
            newSmall = <StarshipsSmallE info={this.props.info} />;
        }

        return (
            <div onClick={this.handleClick} onKeyDown={() => {}} role="button" tabIndex={0}>
                {this.state.clicked ? newLarge : newSmall}
            </div>
        );
    }
}

export default ListElement;
