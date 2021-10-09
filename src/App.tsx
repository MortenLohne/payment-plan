import './App.css';
import Chart from './Chart'
import DataEntry from './DataEntry';
import React from 'react'
import ccue from './ccue_logo.png'

class App extends React.Component {
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
