import React from 'react';
import { withRouter } from "react-router-dom";
import Balance from './Balance';
import Objects from './Objects';
import Inventory from './Inventory';
import './MyPage.css';

const axios = require('axios');

class MyPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: localStorage.getItem('User'),
            balance: 420,
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        let email = this.state.email;
        axios.get(`/userInfo/${email}`)
            .then((response) => {
                this.setState({ balance: response.data["Balance"]});
            })
            .catch((error) => {
                console.error(error);
            })
    }

    logOut() {
        localStorage.removeItem('User');
        axios.post('/logout', {
            })
            .then(function (response) {
            })
            .catch(function (error) {
                window.alert("Error at logout.");
            })
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="myPage">
                <button className="btn btn-primary" onClick={this.logOut.bind(this)}>Logout</button>
                <h1>You're logged in!</h1>
                <Balance />
                <Inventory />
                <Objects />
            </div>
        );
    }
}

export default withRouter(MyPage);
