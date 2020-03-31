import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

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

        // axios.post('/signup', this.state).then(res => {
        //     console.log(res.data.message);
        // });

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
            <Form onSubmit={this.handleFormSubmit}>
                <FormGroup>
                    <Label for='signup-email'>Email:</Label>
                    <Input type='email' name='email' id='signup-email'
                        placeholder='Enter your email' onChange={this.handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for='signup-username'>Username:</Label>
                    <Input type='text' name='username' id='signup-username'
                        placeholder='Enter your username' onChange={this.handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for="signup-password">Password:</Label>
                    <Input type="password" name="password" id="signup-password"
                        placeholder="Enter your password" onChange={this.handleChange} required
                    />
                </FormGroup>
                <Button color="primary">Sign Up</Button>
            </Form>
        );
    };

};

export default SignupForm;
