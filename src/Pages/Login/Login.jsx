// global
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// APIs
import Storage from '../../API/Storage';
import DatabaseLogin from '../../API/DatabaseLogin';
// css
import './index.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', redirect: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.register = this.register.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        const { value } = this.state;
        const user = DatabaseLogin.getUser(value);
        if (!user) {
            alert('access denied');
        } else {
            Storage.setData('role', user.role);
            Storage.setData('name', user.name);
            this.setState({ redirect: true });
            event.preventDefault();
        }
    }
    register() {
        const { value } = this.state;
        DatabaseLogin.setUser(value);
        alert('registered');
    }
    render() {
        const { redirect } = this.state;
        return redirect ? (
            <Redirect to={{ pathname: '/' }} />
        ) : (
            <form onSubmit={this.handleSubmit} className="row">
                <div className="col-md-12">Пожалуйста, введите логин:</div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <br />
                <input type="submit" value="Login" />
                <input type="button" value="Register" onClick={this.register} />
            </form>
        );
    }
}

export default Login;
