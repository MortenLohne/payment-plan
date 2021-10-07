import React from "react";
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from 'recharts'

class Chart extends React.Component {
    render() {
        const data = [
            {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 600, pv: 2200, amt: 2200},
            {name: 'Page C', uv: 200, pv: 1600, amt: 2600}];
            
        return (
            <LineChart
            width={400}
            height={400}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
            <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
      );
    }
}

export default Chart;