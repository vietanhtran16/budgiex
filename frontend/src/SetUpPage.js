import React, {Component} from 'react';
import {Table, Icons, Button, Card, Columns, TextArea} from '@myob/myob-widgets';
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
                                <Table.RowItem>{masterCategory}</Table.RowItem><Table.RowItem>$0</Table.RowItem><Table.RowItem><Icons.Caret/></Table.RowItem>
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
                <div id="back-button"><Icons.LeftChevron size="2em"/>Back</div>
                <Columns type="two"><span className="dollar">$</span>
                    <p>Available budget(Monthly)</p></Columns>

                <p id="amount">$3000</p>
                <Table.Body>
                    <Table.Header>
                        <Table.HeaderItem>MASTER CATEGORIES</Table.HeaderItem>
                        <Table.HeaderItem>BUDGETED</Table.HeaderItem>
                    </Table.Header>
                    {masterCategoryList}
                    {<Table.Row><Table.RowItem><Icons.Add size="1em"/> Add Category</Table.RowItem></Table.Row>}
                </Table.Body>
                <Button id="save-button" type="primary">Save</Button>
            </div>
        );
    }
}

export default SetUpPage;
