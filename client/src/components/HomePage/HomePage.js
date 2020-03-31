import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import AuthService from '../AuthService/AuthService';
import withAuth from '../withAuth/withAuth';
import UserNavbar from '../UserNavbar/UserNavbar';

const Auth = new AuthService();

class HomePage extends Component {

    handleLogout = () => {
        Auth.logout();
        this.props.history.replace('/');
    };

    render = () => {
        return (
            <div>
                <UserNavbar handleLogout={this.handleLogout} />
                <br />
                <div>

                </div>
            </div>
        );
    };

};

export default HomePage;

