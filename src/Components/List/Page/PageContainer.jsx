import React, { Component } from 'react';
import Wait from '../../Wait/Wait';

class Page extends Component {
    constructor() {
        super();
        this.state = {
            fullData: '',
        };
        this.loadData = this.loadData.bind(this);
        this.returnData = this.returnData.bind(this);
    }
    componentDidMount() {
        this.loadData().then(res => {
            this.setState({ fullData: res });
        });
    }

    loadData() {
        const { id } = this.props.match.params;
        const { readData } = this.props;
        return readData.getListById(id);
    }
    returnData() {
        const { id } = this.props.match.params;
        const { fullData } = this.state;
        const { Presentation } = this.props;
        return <Presentation fullData={fullData} id={id} />;
    }
    render() {
        return <div>{this.state.fullData ? this.returnData() : <Wait />}</div>;
    }
}

export default Page;
