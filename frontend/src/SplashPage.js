import React, {Component} from 'react';
import {Input, Button} from '@myob/myob-widgets';
import './App.css';
import { saveIncome } from './services';

class SplashPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            income: 0
        }
    }

    async handleClick() {
        const result = await saveIncome(this.state.income);
        console.log('result');
    }

    handleOnChange(event){
        this.setState({income: parseInt(event.target.value, 10)});
    }
    render() {
        return (
            <div className="hero-container text-center mx-auto">
                <div className="row">
                    <div className="col">
                        <p className="theme theme-title-leading">Welcome to</p>
                        <h1 className="theme theme-title">BudgieX</h1>
                        <h2 className="theme-subtitle mb-3">Budgeting made simple.</h2>
                        <hr className="mb-4"/>
                        <Input name="income" onChange={(event) => this.handleOnChange(event)} label="Amount to budget monthly (income)" placeholder="$0.00"/>
                        <Button onClick={() => this.handleClick()} className="btn btn-primary btn-block mt-5" type="primary">Next</Button>
                    </div>

                </div>
            </div>
        );
    }
}

export default SplashPage;
