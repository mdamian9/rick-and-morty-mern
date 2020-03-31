import React, { Component } from 'react';
import LogoNavbar from '../LogoNavbar/LogoNavbar';
import AuthService from '../AuthService/AuthService';

class LoginPage extends Component {

    constructor() {
        super();
        this.Auth = new AuthService()
    };

    componentWillMount = () => {
        if (this.Auth.loggedIn()) {
            this.props.history.replace('/home');
        };
    };

    handleLogin = (username, password) => {

    };

    render = () => {
        return (
            <div>
                <LogoNavbar />

            </div>
        );
    };

};

export default LoginPage;
