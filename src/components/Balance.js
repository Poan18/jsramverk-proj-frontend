import React from 'react';
import { FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import './Balance.css';

const axios = require('axios');

class Balance extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: localStorage.getItem('User'),
            addBalance: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get(`/userInfo/${this.state.email}`)
            .then((response) => {
                this.setState({ balance: response.data["Balance"]});
            })
            .catch((error) => {
                console.error(error);
            })
    }

    handleChange(event) {
       this.setState({ addBalance: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        if (Number.isInteger(parseInt(this.state.addBalance))) {
            axios.post(`/addBalance/${this.state.email}`, {
                addBalance: this.state.addBalance
                })
                .then(function (response) {
                    console.log("Added balance.");
                })
                .catch(function (error) {
                    window.alert("Error while adding balance.");
                    console.log(error);
                })
            this.setState({ balance: parseInt(this.state.balance) + parseInt(this.state.addBalance) });
        } else {
            window.alert("Balance must be a integer number.");
        }
    }

    render() {
        return (
            <div className="balance">
                <strong>Balance: {this.state.balance}$</strong>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup controlId="balance">
                        <FormLabel>Amount to add</FormLabel>
                        <FormControl
                            type="number"
                            placeholder="0"
                            min="0"
                            max="15000"
                            value={this.state.addBalance}
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <Button
                        variant="success"
                        type="submit"
                        block
                    >
                        Add balance
                    </Button>
                </form>
            </div>
        );
    }
}

export default withRouter(Balance);
