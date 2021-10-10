import "./App.css";
import Chart from "./Chart";
import DataEntry from "./DataEntry";
import React from "react";
import ccue from "./ccue_logo.png";

type AppState = { chartData?: ChartData };

export type ChartData = {
  loanAmount: number;
  loanDuration: number;
  interest: number;
};

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.handleChartDataChange = this.handleChartDataChange.bind(this);

    this.state = {};
  }

  handleChartDataChange(chartData: ChartData) {
    this.setState({ chartData: chartData });
  }

  render() {
    return (
      <div className="App">
        <img src={ccue} alt="logo" />
        <br />
        Interessert i langtidslån? Se hvor store dine månedlige nedbetalinger
        kan bli!
        <DataEntry handleChartDataChange={this.handleChartDataChange} />
        {this.state.chartData && (
          <Chart
            loanAmount={this.state.chartData.loanAmount}
            expirationYear={2021 + this.state.chartData.loanDuration}
            interest={this.state.chartData.interest}
          />
        )}
      </div>
    );
  }
}

export default App;
