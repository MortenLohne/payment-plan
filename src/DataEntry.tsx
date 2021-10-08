import React, { ChangeEvent } from "react";

class DataEntry extends React.Component<{}, { loan: number, interest: number }> {
    constructor(props: any) {
        super(props);
        
        this.state = {
            loan: 2000000,
            interest: 3.0,
        }
    }

    handleLoanChange(event: {target: HTMLInputElement }) {
        this.setState(state => ({loan: parseInt(event.target.value), interest: state.interest}))
    }

    render() {
        return (
            <form>
                <label>
                    Lån:
                    <input type="text" value={this.state.loan} onChange={this.handleLoanChange} />
                </label>
                <input type="submit" value="Sumbit" />
            </form>
        )
    }
}

export default DataEntry