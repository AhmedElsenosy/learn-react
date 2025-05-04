import React from "react"

class WelcomeE extends React.Component{
    state={
        firstName: 'Ahmed',
        lastName: 'Elsenosy',
    };

    change_name = () => {
        this.setState({
            firstName: 'Youssef',
            lastName: 'Ashref',
        })
    }

    render() {
        return (
            <>
                <h1>Hello component! {this.props.name} </h1>
                <button onClick={this.change_name}>
                    change my name
                </button>
                <h6>Created by {this.state.firstName} {this.state.lastName} </h6>
            </>
        )
    }
}

export default WelcomeE