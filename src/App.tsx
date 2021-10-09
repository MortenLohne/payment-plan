import './App.css';
import Chart from './Chart'
import DataEntry from './DataEntry';
import React from 'react'
import ccue from './ccue_logo.png'

type ChartData = {loanAmount: number, expirationYear: number, interest: number}

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
        <DataEntry/>
        <Chart loanAmount={3000000} expirationYear={2046} interest={3.0}/>
      </div>
    );
}
}



export default App;
