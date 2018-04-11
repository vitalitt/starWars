import React, { Component } from 'react';
import propTypes from 'prop-types';

class Page extends Component {
    constructor() {
        super();
        this.state = {
            fullData: '',
        };
        this.loadData = this.loadData.bind(this);
        this.returnData = this.returnData.bind(this);
        this.fakeData = this.fakeData.bind(this);
    }
    componentDidMount() {
        this.loadData().then(res => {
            this.setState({ fullData: res });
        });
    }
    fakeData() {
        const max = 7;
        const min = 3;
        const length = Math.random() * (max - min) + min;
        const res = [];
        const row = ['newData'];
        this.fakeName = 'q';
        for (let i = 0; i < length; i += 1) {
            row.push(Math.floor(Math.random() * (max - min) + min));
        }
        res.push(row);
        return res;
    }
    loadData() {
        const { id } = this.props.match.params;
        const { readData } = this.props;
        return readData.getListById(id);
    }
    returnData() {
        const columnData = this.fakeData();
        const data = {
            columns: columnData,
            types: {
                newData: 'bar',
            },
        };
        const { fullData } = this.state;
        const { Presentation } = this.props;
        return <Presentation fullData={fullData} data={data} />;
    }
    render() {
        return <div>{this.state.fullData ? this.returnData() : 'wait...'}</div>;
    }
}
Page.propTypes = {
    match: propTypes.shape({
        params: propTypes.shape({
            id: propTypes.string.isRequired,
        }),
    }).isRequired,
    readData: propTypes.func.isRequired,
    Presentation: propTypes.shape({}).isRequired,
};

export default Page;
