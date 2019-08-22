import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class IsLogged extends Component {
    componentDidMount() {}

    render() {
        const token = localStorage.getItem('access_token');
        if (token == null) {
            return <Redirect to='/login' />;
        } else {
            return <div />;
        }
    }
}

export default IsLogged;
