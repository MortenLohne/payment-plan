import './App.css';
import Chart from './Chart'
import DataEntry from './DataEntry';
import React from 'react'
import ccue from './ccue_logo.png'

export type ChartData = {loanAmount: number, expirationYear: number, interest: number}

class App extends React.Component<{}, ChartData> {
  constructor(props: {}) {
    super(props);

    this.handleChartDataChange = this.handleChartDataChange.bind(this);

    this.state = {
      loanAmount: 3000000,
      expirationYear: 2046,
      interest: 3.0,
    }
  }

  handleChartDataChange(chartData: ChartData) {
    this.setState(chartData)
  }

  render() {
    return (
      <div className="App">
        <img src={ccue} alt="logo"/>
        <DataEntry handleChartDataChange={this.handleChartDataChange}/>
        <Chart loanAmount={this.state.loanAmount} expirationYear={this.state.expirationYear} interest={this.state.interest}/>
      </div>
    );
}
}



export default App;
