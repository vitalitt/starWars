import React, { Component } from 'react';
import v4 from 'uuid/v4';
import PropTypes from 'prop-types';
import ListElement from './ListElement/ListElement';

import './index.css';

class List extends Component {
    static propTypes = {
        readData: PropTypes.func.isRequired,
    };
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
                {this.state.fullData
                    ? this.state.fullData.results.map(item => (
                          <ListElement info={item} from={from} key={v4()} />
                      ))
                    : 'wait...'}
            </div>
        );
    }
}

export default List;
