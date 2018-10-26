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
                                <Table.RowItem>{masterCategory}</Table.RowItem><Table.RowItem>$0 <span className="pull-right"><Icons.Caret/></span></Table.RowItem>
                            </Table.Row>}
                    >

                        {categoriesJson[masterCategory].map((subCategory) => {
                            return <Card><span className="dot mr-3"/>
                                {Object.keys(subCategory)}</Card>

                        })}

                    </Table.CollapsibleRow>
                </div>)
        });
        return (
            <div>
                <div id="back-button"><Icons.LeftChevron size="2em"/>Back</div>
                <div className="row">
                    <div className="col-3 mt-4"><span className="dollar">$</span></div>
                    <div className="col">
                        <p id="amount-text" className="mb-0">Available budget <span style={{"fontSize": 12}}>(Monthly)</span></p>
                        <p id="amount">$3000</p>
                    </div>
                </div>
                <Table.Body>
                    <Table.Header>
                        <Table.HeaderItem>MASTER CATEGORIES</Table.HeaderItem>
                        <Table.HeaderItem>BUDGETED</Table.HeaderItem>
                    </Table.Header>
                    <div className="theme-table-row">
                        {masterCategoryList}
                    </div>
                    {<Table.Row><Table.RowItem><Icons.Add size="1em"/> Add Category</Table.RowItem></Table.Row>}
                </Table.Body>
                <Button id="save-button" className="btn btn-primary btn-block mt-5" type="primary">Save</Button>
            </div>
        );
    }
}

export default SetUpPage;
