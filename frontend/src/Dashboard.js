import React, {Component} from 'react';
import BudgetSummary from './BudgetSummary';
import {Columns} from '@myob/myob-widgets';
import RecentExpenses from './Expenses';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <p>Welcome to your Dashboard</p>
                <Columns>
                    <div>
                        <p> Budget Summary for {}</p>
                        <BudgetSummary/>
                    </div>
                    <div>
                        <p>Recent Expenses</p>

                        <RecentExpenses/>
                    </div>
                </Columns>

            </div>
        );
    }
}

export default Dashboard;
