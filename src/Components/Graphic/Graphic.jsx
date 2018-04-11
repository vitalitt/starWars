import C3Chart from 'react-c3js';
import React, { Component } from 'react';
import propTypes from 'prop-types';

class Graphic extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
        };
        this.fakeData = this.fakeData.bind(this);
        this.generateData = this.generateData.bind(this);
    }
    componentDidMount() {
        this.interval = setInterval(this.fakeData, this.props.interval);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    generateData(arrayCount) {
        const min = 1;
        const max = 7;
        const newColumn = [];
        for (let i = 0; i < arrayCount; i += 1) {
            const dataCount = Math.random() * (max - min) + min;
            const newArr = [`data${i}`];
            for (let j = 0; j < dataCount; j += 1) {
                newArr.push(Math.random() * (max - min) + min);
            }
            newColumn.push(newArr);
        }
        // const types = ['bar', 'step', 'pie'];
        const types = this.props.type;
        const currType = types[Math.floor(Math.random() * types.length)];
        const newData = {
            columns: newColumn,
            type: currType,
        };
        this.setState({
            data: newData,
        });
    }
    fakeData() {
        this.name = 1;
        this.generateData(4);
    }
    render() {
        const { data } = this.state;

        return data ? <C3Chart data={data} /> : 'wait...';
    }
}
Graphic.propTypes = {
    interval: propTypes.number.isRequired,
    type: propTypes.shape.isRequired,
};

export default Graphic;
