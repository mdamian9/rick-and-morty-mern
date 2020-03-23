import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignupForm extends Component {

    handleChange = event => {
        // Extract name & value from event target and set to state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        console.log(this.state);

        // Clear form fields
        event.target.reset();
        // Reset state
        this.setState({
            email: '',
            username: '',
            password: ''
        });
    };

    render = () => {
        return (
            <Form>
            </Form>
        );
    };

};

export default SignupForm;
