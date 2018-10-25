import React, {Component} from 'react';
import Camera from 'react-camera';
import {Input, Button, Card} from '@myob/myob-widgets';
import './App.css';

class App extends Component {
    render() {
        return (
                <div>
                    <p>Welcome to</p>
                    <img src="/images/budgiex-logo.png" alt="logo"/>
                    <p>Budgeting made simple.</p>
                    <Input name="income" label="Amount to budget monthly (income)" placeholder="$0.00"/>
                    <Button type="primary">Next</Button>
                </div>
        );
    }
}

export default App;
