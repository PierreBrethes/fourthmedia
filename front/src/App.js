import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Routes from './Routes';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            connected: false
        };
    }

    Nav() {
        if (localStorage.getItem('access_token') != null) {
            return (
                <Nav pullRight>
                    <LinkContainer to='/adminarea'>
                        <NavItem>Admin area</NavItem>
                    </LinkContainer>
                    <LinkContainer to='/'>
                        <NavItem
                            onClick={() => {
                                this.logout();
                            }}
                        >
                            Logout
                        </NavItem>
                    </LinkContainer>
                </Nav>
            );
        } else {
            return (
                <Nav pullRight>
                    <LinkContainer to='/login'>
                        <NavItem>Login</NavItem>
                    </LinkContainer>
                </Nav>
            );
        }
    }

    logout() {
        localStorage.clear();
        this.setState({ connected: false });
    }

    render() {
        return (
            <div className='App container'>
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>FourthMedia code test</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>{this.Nav()}</Navbar.Collapse>
                </Navbar>
                <Routes />
            </div>
        );
    }
}

export default App;
