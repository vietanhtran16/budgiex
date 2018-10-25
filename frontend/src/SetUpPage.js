import React, {Component} from 'react';
import {Table, Button, Card, Columns} from '@material-ui/core';
import './App.css';

class SetUpPage extends Component {
    navigateToSetUpPage() {

    }

    render() {
        let categoriesJson = {
            "Everyday Expenses": [
                {Fuel: 0},
                {Groceries: 0}
            ],
            "Living Expenses":[
                {Mortgage: 0}
            ],
            "Regular Expenses": [],
            "Irregular Expenses": [],
            "Savings": [],
            "Personal": [],
        };

        let masterCategoryList = Object.keys(categoriesJson).map((masterCategory) => {
            return (
                <div id="collapsable-row">
                    <Table.CollapsibleRow
                        header={
                            <Table.Row>
                                <Table.RowItem>{masterCategory}</Table.RowItem><Table.RowItem>$0</Table.RowItem><Table.RowItem></Table.RowItem>
                            </Table.Row>}
                    >

                        {categoriesJson[masterCategory].map((subCategory) => {
                            return <Card><span className="dot"/>
                                {Object.keys(subCategory)}</Card>
                        })}

                    </Table.CollapsibleRow>
                </div>)
        });
        return (
            <div>
                <div id="back-button">Back</div>

                <p id="amount">$3000</p>
                <Table.Body>
                    <Table.Header>
                        <Table.HeaderItem>MASTER CATEGORIES</Table.HeaderItem>
                        <Table.HeaderItem>BUDGETED</Table.HeaderItem>
                    </Table.Header>
                    {masterCategoryList}
                    {<Table.Row><Table.RowItem>Add Category</Table.RowItem></Table.Row>}
                </Table.Body>
                <Button id="save-button" type="primary">Save</Button>
            </div>
        );
    }
}

export default SetUpPage;
