import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class LoginForm extends Component {

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
    };

    render = () => {
        return (
            <Form onSubmit={this.handleFormSubmit}>

            </Form>
        );
    };

};

export default LoginForm;
