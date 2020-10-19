import React from 'react';
import { withRouter } from "react-router-dom";
import { Table } from 'react-bootstrap';
import './Inventory.css';

const axios = require('axios');

class Inventory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            objects: [],
            email: localStorage.getItem('User'),
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        let email = this.state.email
        axios.get(`/userInfo/inventory/${email}`)
            .then((response) => {
                console.log(response.data);
                this.setState({ objects: response.data });
            })
            .catch((error) => {
                console.error(error);
            })
    }

    renderObjects() {

        var animals = this.state.objects.map(animal =>
            <tr key={animal.ObjectName}>
                <td>{animal.ObjectName}</td>
                <td>{animal.ObjectAmount}</td>
                <td>
                    <a href={`objects/buy/${animal.ObjectName}`}>Buy </a>
                    <a href={`objects/sell/${animal.ObjectName}`}>Sell</a>
                </td>
            </tr>
        );
        return animals;
    }

    render() {
        return (
            <div className="objects">
                <h3>Inventory</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Owned</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderObjects() }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default withRouter(Inventory);
