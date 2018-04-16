// global
import React, { Component } from 'react';
import v4 from 'uuid/v4';
// APIs
import PeopleAPI from '../../API/PlanetsAPI';
// components
import ListElement from '../../Components/ListElement/ListElement';
import Loader from '../../Components/Loader/Loader';
// css
import './index.css';

class List extends Component {
    constructor() {
        super();
        this.state = {
            fullData: '',
            from: 0,
        };
    }

    componentDidMount() {
        PeopleAPI.getList().then(res => {
            this.setState({ fullData: res, from: res.from });
        });
    }
    render() {
        const { from, fullData, fullData: { results } } = this.state;
        return (
            <div className="heroesList">
                {fullData ? (
                    results.map(item => <ListElement info={item} from={from} key={v4()} />)
                ) : (
                    <Loader />
                )}
            </div>
        );
    }
}

export default List;
