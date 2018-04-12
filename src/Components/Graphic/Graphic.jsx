import c3 from 'c3';
import React, { Component } from 'react';

class Graphic extends Component {
    constructor() {
        super();
        this.generateData = this.generateData.bind(this);
        this.graphRef = React.createRef();
    }
    componentDidMount() {
        // this.interval = (this.fakeData, this.props.interval);
        // this.generateData(4);
        this.createGraph();
        this.startAnimation();
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    startAnimation() {
        setInterval(() => {
            const data = this.generateData(4);
            this.chart.load(data);
        }, this.props.interval);
    }
    createGraph() {
        this.chart = c3.generate({
            bindto: this.graphRef.current,
            data: {
                columns: [],
                type: this.props.type,
            },
        });
    }
    generateData(arrayCount) {
        const min = 1;
        const max = 7;
        const newColumn = [];
        for (let i = 0; i < arrayCount; i += 1) {
            const dataCount = Math.random() * (max - min) + min;
            const newArr = [`data${i}`];
            for (let j = 0; j < dataCount; j += 1) {
                newArr.push(Math.floor(Math.random() * (max - min) + min));
            }
            newColumn.push(newArr);
        }
        const types = this.props.type;
        const currType = types[Math.floor(Math.random() * types.length)];
        const newData = {
            columns: newColumn,
            type: currType,
            labels: true,
        };
        return newData;
    }
    render() {
        return (
            <div id="myRef" ref={this.graphRef}>
                TEST
            </div>
        );
    }
}

export default Graphic;
