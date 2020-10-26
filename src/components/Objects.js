import React from 'react';
import { withRouter } from "react-router-dom";
import { Table } from 'react-bootstrap';
import './Objects.css';
import { registerOnMessageCallback, send, startWebsocketConnection, closeWs } from './websocket';
import ObjectsGraph from './ObjectsGraph';

const axios = require('axios');

class Objects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            objects: []
        };
        registerOnMessageCallback(this.onPriceUpdate.bind(this));
    }

    componentDidMount() {
        startWebsocketConnection();
        setInterval(function(){ send("Update"); }, 10000);
        this.getData();
    }

    componentWillUnmount() {
        closeWs();
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

    onPriceUpdate (objects) {

        this.setState({ objects: JSON.parse(objects) });
    }

    renderObjects() {

        var animals = this.state.objects.map(animal =>
            <tr key={animal.Name}>
                <td>{animal.Name}</td>
                <td>{animal.Price}$</td>
                <td>
                    <a href={`objects/buy/${animal.Name}`}>Buy </a>
                </td>
            </tr>
        );
        return animals;
    }

    render() {
        return (
            <div className="objects">
                <h3>Objects available</h3>
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
                <ObjectsGraph objects={this.state.objects} />
            </div>
        );
    }
}

export default withRouter(Objects);
