import React from "react";
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from 'recharts'

class Chart extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            isLoaded: false,
            data: [],
        }
    }

    componentDidMount() {
        fetch("https://visningsrom.stacc.com/dd_server_laaneberegning/rest/laaneberegning/v1/nedbetalingsplan", 
        { method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "laanebelop": 2000000,
                "nominellRente": 3,
                "terminGebyr":30,
                "utlopsDato":"2045-01-01",
                "saldoDato":"2020-01-01",
                "datoForsteInnbetaling":"2020-02-01",
                "ukjentVerdi":"TERMINBELOP"
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        /*
        .then((result) => {
            this.setState({
                isLoaded: true,
                data: result.nedbetalingsplan
            })
        })
        */
    }

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