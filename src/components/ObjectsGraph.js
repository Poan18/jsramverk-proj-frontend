import { withRouter } from "react-router-dom";
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

class ObjectsGraph extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }


    render() {
        return (
            <ResponsiveContainer width="95%" height={400}>
                <BarChart
                    width={500}
                    height={300}
                    data={this.props.objects}
                    margin={{
                      top: 5, right: 30, left: 20, bottom: 5,
                    }}
                    barSize={20}
                  >
                    <XAxis dataKey="Name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="Price" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}

export default withRouter(ObjectsGraph);
