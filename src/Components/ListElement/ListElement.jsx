// global
import React, { Component } from 'react';
// materialUI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// components
import RatingElement from '../RatingElement/RatingContainer';
// small&large components
import PeopleSmallE from '../People/SmallElement/SmallElement';
import PeopleLargeE from '../People/LargeElement/LargeElement';
import PlanetsSmallE from '../Planets/SmallElement/SmallElement';
import PlanetsLargeE from '../Planets/LargeElement/LargeElement';
import StarshipsSmallE from '../Starships/SmallElement/SmallElement';
import StarshipsLargeE from '../Starships/LargeElement/LargeElement';

class ListElement extends Component {
    constructor() {
        super();
        this.state = {
            isOpened: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isOpened: !this.state.isOpened,
        });
    }
    parseUrlId(url) {
        // wtf????
        this.name = 'qq';
        const currentUrl = url.split('/');
        return currentUrl[currentUrl.length - 2];
    }
    selectElement() {
        const { from } = this.props;
        const elem = { newLarge: '', newSmall: '' };
        const { info } = this.props;
        const { url } = this.props.info;
        const { name } = this.props.info;
        const urlId = this.parseUrlId(url);

        switch (from) {
            case 'people':
                elem.newLarge = (
                    <MuiThemeProvider>
                        <PeopleLargeE info={info} urlId={urlId}>
                            <RatingElement rating name={name} />
                            <span label>Rating:</span>
                        </PeopleLargeE>
                    </MuiThemeProvider>
                );
                elem.newSmall = (
                    <MuiThemeProvider>
                        <PeopleSmallE info={info} />
                    </MuiThemeProvider>
                );
                break;
            case 'planets':
                elem.newLarge = (
                    <MuiThemeProvider>
                        <PlanetsLargeE info={info} urlId={urlId} />
                    </MuiThemeProvider>
                );
                elem.newSmall = (
                    <MuiThemeProvider>
                        <PlanetsSmallE info={info} />
                    </MuiThemeProvider>
                );
                break;
            case 'starships':
                elem.newLarge = (
                    <MuiThemeProvider>
                        <StarshipsLargeE info={info} urlId={urlId} />
                    </MuiThemeProvider>
                );
                elem.newSmall = (
                    <MuiThemeProvider>
                        <StarshipsSmallE info={info} />
                    </MuiThemeProvider>
                );
                break;
            default:
                elem.newLarge = (
                    <MuiThemeProvider>
                        <StarshipsLargeE info={info} urlId={urlId} />
                    </MuiThemeProvider>
                );
                elem.newSmall = (
                    <MuiThemeProvider>
                        <StarshipsSmallE info={info} />
                    </MuiThemeProvider>
                );
        }
        return elem;
    }
    render() {
        const element = this.selectElement();
        return (
            <div onClick={this.handleClick} onKeyDown={() => {}} role="button" tabIndex={0}>
                {this.state.isOpened ? element.newLarge : element.newSmall}
            </div>
        );
    }
}

export default ListElement;
