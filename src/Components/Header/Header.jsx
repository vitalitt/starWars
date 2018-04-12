import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            status: 'admin',
        };
    }

    render() {
        return (
            <div>
                <span>Status: </span>
                {this.state.status}
            </div>
        );
    }
}

export default Header;
