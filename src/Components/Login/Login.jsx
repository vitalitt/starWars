import React, { Component } from 'react';
import Storage from '../../API/Storage';

import './index.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        const { value } = this.state;
        Storage.setData('login', value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="row">
                <div className="col-md-12">Пожалуйста, введите логин:</div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Login;
