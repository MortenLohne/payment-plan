import './App.css';
import Chart from './Chart'
import DataEntry from './DataEntry';
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DataEntry/>
        <Chart/>
      </div>
    );
}
}



export default App;
