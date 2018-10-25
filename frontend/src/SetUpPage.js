import React, {Component} from 'react';
import {Table, Icons, Button} from '@myob/myob-widgets';
import './App.css';

class SetUpPage extends Component {
    navigateToSetUpPage(){

    }

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
            <div>
                <div id="back-button"><Icons.LeftChevron size="2em"/>Back</div>
            <Table.Body>
                <Table.Header>
                    <Table.HeaderItem>MASTER CATEGORIES</Table.HeaderItem>
                    <Table.HeaderItem>BUDGETED</Table.HeaderItem>
                </Table.Header>
                {newVar}
                {<Table.Row><Table.RowItem><Icons.Add size="1em"/> Add Category</Table.RowItem></Table.Row>}
            </Table.Body>
            <Button id="save-button" type="primary">Save</Button>
            </div>
        );
    }
}

export default SetUpPage;
