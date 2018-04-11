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
        const { fullData } = this.state;
        const { Presentation } = this.props;
        return <Presentation fullData={fullData} />;
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
