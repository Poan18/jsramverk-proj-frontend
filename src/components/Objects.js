import React from 'react';
import { withRouter } from "react-router-dom";
import { Table } from 'react-bootstrap';
import './Objects.css';

const axios = require('axios');

class Objects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            objects: []
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get(`/objects`)
            .then((response) => {
                this.setState({ objects: response.data });
            })
            .catch((error) => {
                console.error(error);
            })
    }

    renderObjects() {

        var animals = this.state.objects.map(animal =>
            <tr key={animal.Name}>
                <td>{animal.Name}</td>
                <td>{animal.Price}</td>
                <td>
                    <a href={`objects/buy/${animal.Name}`}>Buy </a>
                    <a href={`objects/sell/${animal.Name}`}>Sell</a>
                </td>
            </tr>
        );
        return animals;
    }

    render() {
        return (
            <div className="objects">
                <h3>Animals available</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
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

export default withRouter(Objects);
