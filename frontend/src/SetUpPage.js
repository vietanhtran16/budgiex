import React, {Component} from 'react';
import { Icons, Dropdown } from "@myob/myob-widgets";
import './App.css';

class Page extends Component {

    onSelected(selected) { this.setState({ selected }); }
    render() {
        return (
            <div>
                <Dropdown
                    items={items}
                    onSelect={this.onSelected}
                    toggle={<Dropdown.Toggle>Everyday Expenses <Icons.Caret /></Dropdown.Toggle>}
                />
            </div>
        );
    }
}

export default SetUpPage;
