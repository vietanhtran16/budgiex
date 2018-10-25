import React, {Component} from 'react';
import {Input, Button} from '@myob/myob-widgets';
import './App.css';

class SplashPage extends Component {
    render() {
        return (
            <div className="container">
                <p>Welcome to</p>
                <img src={require('./images/budgiex-logo.png')} alt={"logo"}/>
                <p>Budgeting made simple.</p>
                <Input name="income" label="Amount to budget monthly (income)" placeholder="$0.00"/>
                <Button type="primary">Next</Button>
            </div>
        );
    }
}

export default SplashPage;
