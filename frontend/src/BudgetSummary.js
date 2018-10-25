import React, {Component} from 'react';
import {Table, Icons, Button, Card, Columns} from '@myob/myob-widgets';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Button type="secondary">Edit Budget</Button>
                <Columns></Columns>
            </div>
        );
    }
}

export default App;
