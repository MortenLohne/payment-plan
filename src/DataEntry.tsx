import React from "react";
import { ChartData } from './App'

class DataEntry extends React.Component<{handleChartDataChange: (chartData: ChartData) => void,}, ChartData> {
    constructor(props: any) {
        super(props);
        
        this.handleLoanChange = this.handleLoanChange.bind(this);
        this.handleLoanSubmit = this.handleLoanSubmit.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);

        this.state = {
            loanAmount: 2000000,
            interest: 3.0,
            expirationYear: 2046,
        }
    }

    handleLoanChange(event: {target: HTMLInputElement}) {
        console.log("Loan changed to " + event.target.value);
        this.setState(({loanAmount: parseInt(event.target.value)}));
    }

    handleYearChange(event: {target: HTMLInputElement}) {
        console.log("Year changed to " + event.target.value);
        this.setState(({expirationYear: parseInt(event.target.value)}));
    }

    handleLoanSubmit(event: any) {
        event.preventDefault();
        console.log("Loan submitted to " + event.target.value + ", stored " + this.state.loanAmount);
        this.props.handleChartDataChange(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleLoanSubmit}>
                Lån:
                <input type="text" value={this.state.loanAmount} onChange={this.handleLoanChange} />
                Nedbetalingstid (år):
                <input type="text" value={this.state.expirationYear} onChange={this.handleYearChange} />
                <br/>
                <input type="submit" value="Sumbit" />
            </form>
        )
    }
}

export default DataEntry