import React from 'react';
import { withRouter } from "react-router-dom";

const axios = require('axios');

class MyPage extends React.Component {

    logOut() {
        axios.post('/logout', {
            })
            .then(function (response) {
                localStorage.removeItem('User');
            })
            .catch(function (error) {
                window.alert("Error at login.");
            })
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <div onClick={this.logOut.bind(this)}>Logout </div>
                <h1>You're logged in!</h1>
            </div>
        );
    }
}

export default withRouter(MyPage);
