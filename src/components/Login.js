import React, { useState } from 'react';
import { FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './Login.css';

const axios = require('axios');

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('/login', {
            email: email,
            password: password
            })
            .then(function (response) {
                window.localStorage.setItem('User', email);
                history.push('/myPage');
            })
            .catch(function (error) {
                window.alert("Error while logging out.");
            })
    }

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email">
                    <FormLabel>Email address</FormLabel>
                    <FormControl
                        type="email"
                        placeholder="Ange email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>

                <FormGroup controlId="password">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </FormGroup>

                <Button
                    variant="primary"
                    type="submit"
                    disabled={!validateForm()}
                    block
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}