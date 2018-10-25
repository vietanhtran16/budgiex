import React, {Component} from 'react';
import {Table, Icons, Button, Card, Columns} from '@myob/myob-widgets';
import PieChart from 'react-simple-pie-chart';
import './App.css';

class BudgetSummary extends Component {
    render() {
        let categoriesJson = {
            "Everyday Expenses": [
                {Fuel: 0},
                {Groceries: 0}
            ],
            "Living Expenses": [
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
                    <Table.Row>
                        <Table.RowItem>{masterCategory}</Table.RowItem><Table.RowItem>$0</Table.RowItem><Table.RowItem>$0</Table.RowItem><Table.RowItem>$0</Table.RowItem>
                    </Table.Row>

                </div>)
        });

        let pie=
        <PieChart
        slices={[
          {
            color: '#000099',
            value: 10,
          },
          {
            color: '#9999ff',
            value: 20,
          },
        ]}
      />

        return (

            <Card>
                <Button type="secondary">Edit Budget</Button>
                <Table.Body>
                    <Table.Header>
                        <Table.HeaderItem>MASTER CATEGORIES</Table.HeaderItem>
                        <Table.HeaderItem>BUDGETED</Table.HeaderItem>
                        <Table.HeaderItem>SPENT</Table.HeaderItem>
                        <Table.HeaderItem>REMAINDER</Table.HeaderItem>
                    </Table.Header>
                    {masterCategoryList}</Table.Body>
            </Card>

        );
    }
}

export default BudgetSummary;
