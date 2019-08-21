import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './Ticket.css';

class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            query_type: '',
            subject: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return (
            this.state.name.length > 0 &&
            this.state.email.length > 0 &&
            this.state.query_type.length > 0 &&
            this.state.subject.length > 0 &&
            this.state.message.length > 0
        );
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
        console.log(this.state);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className='Ticket'>
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
                    <FormGroup controlId='email' bsSize='large'>
                        <p>Email</p>
                        <FormControl
                            autoFocus
                            type='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId='query_type'>
                        <p>Query type</p>
                        <FormControl
                            componentClass='select'
                            placeholder='Choose your type of ticket'
                            value={this.state.query_type}
                            onChange={this.handleChange}
                        >
                            <option value='General query'>General query</option>
                            <option value='Account management'>
                                Account management
                            </option>
                            <option value='Technical support'>
                                Technical support
                            </option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId='subject' bsSize='large'>
                        <p>Subject</p>
                        <FormControl
                            value={this.state.subject}
                            onChange={this.handleChange}
                            type='text'
                        />
                    </FormGroup>
                    <FormGroup controlId='message' bsSize='large'>
                        <p>Message</p>
                        <FormControl
                            componentClass='textarea'
                            placeholder='How can we help you ?'
                            value={this.state.message}
                            onChange={this.handleChange}
                            type='text'
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize='large'
                        disabled={!this.validateForm()}
                        type='submit'
                    >
                        Send
                    </Button>
                </form>
            </div>
        );
    }
}

export default Ticket;
