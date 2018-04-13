// global
import React, { Component } from 'react';
import v4 from 'uuid/v4';
// components
import ListElement from './ListElement/ListElement';
import Wait from '../../Components/Wait/Wait';
// css
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
        const { from, fullData, fullData: { results } } = this.state;
        return (
            <div className="heroesList">
                {fullData ? (
                    results.map(item => <ListElement info={item} from={from} key={v4()} />)
                ) : (
                    <Wait />
                )}
            </div>
        );
    }
}

export default List;
