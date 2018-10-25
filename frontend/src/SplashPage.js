import React, {Component} from 'react';
import {Input, Button} from '@myob/myob-widgets';
import './App.css';

class SplashPage extends Component {
    render() {
        return (
            <div className="hero-container text-center mx-auto">
                <div className="row">
                    <div className="col">
                        <p className="theme theme-title-leading">Welcome to</p>
                        <h1 className="theme theme-title">BudgieX</h1>
                        <h2 className="theme-subtitle mb-3">Budgeting made simple.</h2>
                    </div>
                </div>
                <hr className="mb-4"/>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form>
                            <div className="form-group row">
                                <div className=" col-md-8 text-left">
                                    <label htmlFor="budgetInput">Amount to budget (income)</label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-8 px-md-1 mx-auto">
                                    <input id="budgetInput" type="text" className="form-control" placeholder="$0.00"
                                           aria-label="Budget" aria-describedby="budget-amount-input" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12 col-lg-5 px-md-1 mx-auto">
                                    <button type="submit" className="btn btn-primary btn-block mt-5">Next</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SplashPage;
