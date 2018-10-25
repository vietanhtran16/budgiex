import React, {Component} from 'react';
import SplashPage from './SplashPage';
import SetUpPage from './SetUpPage'
import BudgetSummary from './BudgetSummary'
import './App.css';
import Dashboard from "./Dashboard";

class App extends Component {
    render() {
        return (
            <div>
                <SplashPage/>
            </div>
        );
    }
}

export default App;
