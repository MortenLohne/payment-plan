import React from "react";
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";

type Props = { loanAmount: number; expirationYear: number; interest: number };

class Chart extends React.Component<Props, { isLoaded: boolean; data: any[] }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
    };
  }

  fetchData() {
    fetch(
      "https://visningsrom.stacc.com/dd_server_laaneberegning/rest/laaneberegning/v1/nedbetalingsplan",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          laanebelop: this.props.loanAmount,
          nominellRente: this.props.interest,
          terminGebyr: 30,
          utlopsDato: this.props.expirationYear + "-01-01",
          saldoDato: "2021-01-01",
          datoForsteInnbetaling: "2021-02-01",
          ukjentVerdi: "TERMINBELOP",
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          data: result.nedbetalingsplan.innbetalinger,
        });
        console.log(
          "Got " +
            this.state.data.length +
            " innbetalinger, first is " +
            JSON.stringify(this.state.data[0])
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props === prevProps) {
      return;
    }
    this.fetchData();
  }

  render() {
    const data = this.state.data.slice(1);

    return (
      <LineChart
        width={800}
        height={600}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="dato" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line
          type="monotone"
          dataKey="innbetaling"
          stroke="#ff7300"
          yAxisId={0}
        />
      </LineChart>
    );
  }
}

export default Chart;
