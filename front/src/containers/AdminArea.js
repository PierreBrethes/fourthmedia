import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

class AdminArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            hits: [],
            redirect: false
        };
    }

    componentWillMount() {
        axios
            .get('http://127.0.0.1:8000/api/tickets', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem('access_token') //the token is a variable which holds the token
                }
            })
            .then(result => {
                console.log(result);
                this.setState({
                    hits: result.data,
                    isLoading: false
                });
            })
            .catch(error =>
                this.setState({
                    redirect: true,
                    error,
                    isLoading: false
                })
            );
    }

    componentDidMount() {}

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/' />;
        }

        const hits = this.state.hits;

        return (
            <div>
                <ul>
                    {hits.map(hit => (
                        <li key={hit.id}>
                            <p>
                                {hit.name_owner} : {hit.subject} - {hit.message}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default AdminArea;
