import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import LandingNavbar from '../LandingNavbar/LandingNavbar';
import SignupModal from '../SignupModal/SignupModal';
import AuthService from '../AuthService/AuthService';

class LandingPage extends Component {

    constructor() {
        super();
        this.Auth = new AuthService();
        this.handleLogin = this.handleLogin.bind(this);
    };

    // Do not stay on landing page if already logged in
    componentWillMount = () => {
        if (this.Auth.loggedIn()) {
            this.props.history.replace('/home');
        };
    };

    // Log in the user and redirect them to the user home page
    handleLogin = (username, password) => {
        this.Auth.login(username, password).then(() => {
            this.props.history.replace('/home');
        }).catch(err => {
            console.log(err.response);
            alert(err.response.data.message);
        });
    };

    render = () => {
        return (
            <div>
                <LandingNavbar handleLogin={this.handleLogin} />
                <div className='full-r-div'>
                    <br />
                    <Container>
                        <Row>
                            <Col className='text-center'>
                                <h4>Play a quick game below or create an account to keep track of your scores!</h4>
                                <SignupModal history={this.props.history} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5></h5>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    };

};

export default LandingPage;
