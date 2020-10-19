import React from 'react';
import { withRouter } from "react-router-dom";
import { Button, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import './BuyObject.css';

const axios = require('axios');

class BuyObject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            object: [],
            email: localStorage.getItem('User'),
            amount: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        let name = this.props.match.params.name;
        axios.get(`/objects/${name}`)
            .then((response) => {
                this.setState({ object: response.data });
            })
            .catch((error) => {
                console.error(error);
            })
    }

    handleChange(event) {
       this.setState({ amount: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let name = this.props.match.params.name;
        axios.post(`/objects/buy/${name}`, {
            amount: this.state.amount,
            email: this.state.email
            })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                window.alert("Error while buying object.");
            })
        this.props.history.push("/myPage");
    }

    render() {
        return (
            <div className="buyObject">
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.state.object.Name}</h2>
                    <FormGroup>
                        <FormLabel>Price</FormLabel>
                        <FormControl
                            type="number"
                            placeholder={this.state.object.Price}
                            disabled
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Amount to buy</FormLabel>
                        <FormControl
                            type="text"
                            placeholder="0"
                            value={this.state.amount}
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <Button
                        variant="success"
                        type="submit"
                        block
                    >
                        Buy
                    </Button>
                </form>
            </div>
        );
    }
}

export default withRouter(BuyObject);