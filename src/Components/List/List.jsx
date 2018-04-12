import React, { Component } from 'react';
import v4 from 'uuid/v4';
import ListElement from './ListElement/ListElement';
import Wait from '../Wait/Wait';

import './index.css';

class List extends Component {
    constructor() {
        super();
        this.state = {
            fullData: '',
            from: 0,
        };
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData().then(res => {
            this.setState({ fullData: res, from: res.from });
        });
    }
    loadData() {
        return this.props.readData.getList();
    }
    render() {
        const { from } = this.state;
        return (
            <div className="heroesList">
                {this.state.fullData ? (
                    this.state.fullData.results.map(item => (
                        <ListElement info={item} from={from} key={v4()} />
                    ))
                ) : (
                    <Wait />
                )}
            </div>
        );
    }
}

export default List;
