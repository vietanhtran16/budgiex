import React, {Component} from 'react';
import {Table, Icons} from '@myob/myob-widgets';
import './App.css';

class SetUpPage extends Component {
    render() {
        let masterCategories = ['Everyday Expenses', 'Living Expenses', 'Regular Expenses', 'Irregular Expenses', 'Savings', 'Personal', 'Debt'];
        let newVar =
            masterCategories.map((categories) => {
            return <Table.CollapsibleRow
                header={
                    <Table.Row>
                        <Table.RowItem>{categories}</Table.RowItem><Table.RowItem>$0</Table.RowItem><Table.RowItem><Icons.Caret /></Table.RowItem>
                    </Table.Row>}
            >
                {<div></div>}
            </Table.CollapsibleRow>;
        });
        return (
            <Table.Body>
                {newVar}
            </Table.Body>
        );
    }
}

export default SetUpPage;
