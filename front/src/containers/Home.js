import React, { Component } from 'react';
import Ticket from '../components/Ticket';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <div className='lander'>
                    <h1>Send your ticket :</h1>
                    <Ticket />
                </div>
            </div>
        );
    }
}
