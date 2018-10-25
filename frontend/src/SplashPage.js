import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {Input, Button} from '@myob/myob-widgets';
import './App.css';
import SetUpPage from './SetUpPage';

class SplashPage extends Component {
    render() {
        const setUpPage =  <Route path="/SetUpPage" component={SetUpPage}/>;
        return (
            <div className="hero-container text-center mx-auto">
                <div className="row">
                    <div className="col">
                        <p className="theme theme-title-leading">Welcome to</p>
                        <h1 className="theme theme-title">BudgieX</h1>
                        <h2 className="theme-subtitle mb-3">Budgeting made simple.</h2>
                        <hr className="mb-4"/>
                        <Input name="income" label="Amount to budget monthly (income)" placeholder="$0.00"/>
                        <Button className="btn btn-primary btn-block mt-5" type="primary" onClick={setUpPage}>Next</Button>
                    </div>

                </div>
            </div>
        );
    }
}

export default SplashPage;
