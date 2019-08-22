import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Redirect } from 'react-router';
import axios from 'axios';
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            name: '',
            password: ''
        };
    }

    async loginAPI() {
        // create client_id and client_secret (can't error, only if API is down)
        const response = await axios.post(
            'http://127.0.0.1:8000/createClient',
            {
                'redirect-uri': 'localhost/test',
                grant_type: 'password'
            }
        );

        const bodyLogin = {
            client_id: response.data.client_id,
            client_secret: response.data.client_secret,
            grant_type: 'password',
            username: this.state.name,
            password: this.state.password
        };

        try {
            // try to connect, error if bad id/password
            const getToken = await axios.post(
                'http://127.0.0.1:8000/oauth/v2/token',
                bodyLogin
            );

            localStorage.setItem(
                'access_token',
                `Bearer ${getToken.data.access_token}`
            );

            // wait async response, and redirect to /adminarea
            if (getToken.data.access_token !== undefined) {
                this.props.history.push('/adminarea');
            }
            this.setState({ connected: true });
        } catch (error) {
            alert("Can't connect !");
        }
    }

    validateForm() {
        return this.state.name.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.loginAPI();
    };

    render() {
        return (
            <div className='Login'>
                <p>
                    you can connect with :<code>root:root</code>. To create a
                    new admin, execute :{' '}
                    <code>php bin/console fos:user:create username</code> in the
                    API folder (symfony)
                </p>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId='name' bsSize='large'>
                        <p>Name</p>
                        <FormControl
                            autoFocus
                            type='text'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId='password' bsSize='large'>
                        <p>Password</p>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type='password'
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize='large'
                        disabled={!this.validateForm()}
                        type='submit'
                    >
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}
