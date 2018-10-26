import React, {Component} from 'react';
import BudgetSummary from './BudgetSummary';
import {Columns} from '@myob/myob-widgets';
import RecentExpenses from './Expenses';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">Welcome to your Dashboard</h1>
                <div className="row">
                    <div className="col-md-9">
                        <h2> Budget Summary for {}</h2>
                        <BudgetSummary/>
                    </div>
                    <div className="col-md-3">
                        <h2>Recent Expenses</h2>

                        <RecentExpenses/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Dashboard;
