import React, {Component} from 'react';
import BudgetSummary from './BudgetSummary';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Columns>
                    <div>
                        <p> Budget Summary for {month}</p>
                        <BudgetSummary/>
                    </div>
                    <div>
                        <p>Recent Expenses</p>

                    </div>
                </Columns>

            </div>
        );
    }
}

export default Dashboard;
