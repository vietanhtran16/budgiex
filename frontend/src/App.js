import React, {Component} from 'react';
import SplashPage from './SplashPage';
import SetUpPage from './SetUpPage'
import BudgetSummary from './BudgetSummary'
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <SetUpPage/>
            </div>
        );
    }
}

export default App;
