import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PeopleSmallE from '../../People/SmallElement/SmallElement';
import PeopleLargeE from '../../People/LargeElement/LargeElement';
import PlanetsSmallE from '../../Planets/SmallElement/SmallElement';
import PlanetsLargeE from '../../Planets/LargeElement/LargeElement';
import StarshipsSmallE from '../../Starships/SmallElement/SmallElement';
import StarshipsLargeE from '../../Starships/LargeElement/LargeElement';

class ListElement extends Component {
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
    parseUrlId(url) {
        this.name = 'qq';
        let i = url.length;
        i -= 2;
        let result = '';
        while (url[i] !== '/') {
            result = result.concat(url[i]);
            i -= 1;
        }
        return result
            .split('')
            .reverse()
            .join('');
    }
    render() {
        const { from } = this.props;
        let newLarge;
        let newSmall;
        const { info } = this.props;
        const { url } = this.props.info;
        const urlId = this.parseUrlId(url);
        // как вариант, можно передавать компоненты через props из index, но мне кажется так наглядней
        if (from === 'people') {
            newLarge = <PeopleLargeE info={info} urlId={urlId} />;
            newSmall = <PeopleSmallE info={info} />;
        }
        if (from === 'planets') {
            newLarge = <PlanetsLargeE info={info} urlId={urlId} />;
            newSmall = <PlanetsSmallE info={info} />;
        }
        if (from === 'starships') {
            newLarge = <StarshipsLargeE info={info} urlId={urlId} />;
            newSmall = <StarshipsSmallE info={info} />;
        }

        return (
            <div onClick={this.handleClick} onKeyDown={() => {}} role="button" tabIndex={0}>
                {this.state.clicked ? newLarge : newSmall}
            </div>
        );
    }
}
ListElement.propTypes = {
    from: PropTypes.string.isRequired,
    info: PropTypes.shape({
        birth_year: PropTypes.string.isRequired,
        created: PropTypes.string.isRequired,
        edited: PropTypes.string.isRequired,
        eye_color: PropTypes.string.isRequired,

        gender: PropTypes.string.isRequired,
        hair_color: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        homeworld: PropTypes.string.isRequired,

        mass: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        skin_color: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }).isRequired,
};
export default ListElement;
