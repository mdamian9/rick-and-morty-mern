import React from 'react';
import LandingNavbar from '../LandingNavbar/LandingNavbar';
import { Container, Row, Col, Button } from 'reactstrap';

const LandingPage = () => {
    return (
        <div>
            <LandingNavbar />
            <div id='remaining-div'>
                <br />
                <Container>
                    <Row>
                        <Col className='text-center'>
                            <h4>Play a quick game below or create an account to keep track of your scores!</h4>
                            <Button>
                                Create account
                            </Button>
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

export default LandingPage;
