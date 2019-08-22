import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Table } from 'react-bootstrap';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import axios from 'axios';
import IsLogged from '../components/IsLogged';
import Moment from 'react-moment';

class AdminArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            hits: [],
            redirect: false
        };
    }

    componentDidMount() {
        axios
            .get('http://127.0.0.1:8000/api/tickets', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem('access_token') //the token is a variable which holds the token
                }
            })
            .then(result => {
                this.setState({
                    hits: result.data,
                    isLoading: false
                });
            })
            .catch(error =>
                this.setState({
                    error,
                    isLoading: false
                })
            );
    }

    render() {
        const { redirect } = this.state;

        // if (redirect) {
        //     return <Redirect to='/' />;
        // }

        const hits = this.state.hits;

        const columns = [
            {
                Header: 'Name',
                accessor: 'name_owner' // String-based value accessors!
            },
            {
                Header: 'Mail',
                accessor: 'mail_owner'
            },
            {
                Header: 'Query Type',
                accessor: 'query_type'
            },
            {
                Header: 'Subject', // Custom header components!
                accessor: 'subject'
            },
            {
                Header: 'Message', // Custom header components!
                accessor: 'message',
                resizable: true
            },
            {
                Header: 'Date', // Custom header components!
                accessor: 'created_at',
                Cell: row => <Moment date={row.value} />
            }
        ];

        return (
            <div>
                <IsLogged />
                <p>
                    You can search by each query, sort too by clicking on the
                    categorie. You can resize each columns.
                </p>
                <ReactTable
                    data={hits}
                    columns={columns}
                    minRows={10}
                    filterable={true}
                />
            </div>
        );
    }
}

export default AdminArea;
