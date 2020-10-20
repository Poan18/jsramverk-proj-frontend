import React from 'react';
import { withRouter } from "react-router-dom";

const axios = require('axios');

class ShowBalance extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: localStorage.getItem('User')
        };
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

    render() {
        return (
                <strong>Balance: {this.state.balance}$</strong>
        );
    }
}

export default withRouter(ShowBalance);
