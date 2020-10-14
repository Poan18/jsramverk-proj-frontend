import React, { useState } from 'react';
import { FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './Register.css';

const axios = require('axios');

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('/register', {
            email: email,
            password: password
            })
            .then(function (response) {
                window.alert("Use has been created.");
                history.push('/login');
            })
            .catch(function (error) {
                window.alert("Error at registration.");
            })
    }

    return (
        <div className="register">
            <h2>Register a user</h2>
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email">
                    <FormLabel>Email address</FormLabel>
                    <FormControl
                        type="email"
                        placeholder="Email"
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
                    variant="success"
                    type="submit"
                    disabled={!validateForm()}
                    block
                >
                    Register
                </Button>
                <a class="btn btn-primary" href="/login" role="button">Login as a user</a>
            </form>
        </div>
    )
}
