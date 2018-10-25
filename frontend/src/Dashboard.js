import React, {Component} from 'react';
import BudgetSummary from './BudgetSummary';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <p> Budget Summary for {month}</p>
                <BudgetSummary/>
            </div>
        );
    }
}

export default Dashboard;
