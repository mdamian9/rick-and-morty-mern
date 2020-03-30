import React, { Component } from 'react';
import LandingNavbar from '../LandingNavbar/LandingNavbar';
import { Container, Row, Col, Button } from 'reactstrap';
import SignupModal from '../SignupModal/SignupModal';

class LandingPage extends Component {

    render = () => {
        return (
            <div>
                <LandingNavbar />
                <div id='remaining-div'>
                    <br />
                    <Container>
                        <Row>
                            <Col className='text-center'>
                                <h4>Play a quick game below or create an account to keep track of your scores!</h4>
                                <SignupModal />
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
