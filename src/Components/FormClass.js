import React from "react";

class FormClass extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            gender: '',
        };
    }

    nameHandler = (value) => {
        this.setState({
            name: value
        });
    }

    passwordHandler = (value) => {
        this.setState({
            password: value
        });
    }

    genderHandler = (value) => {
        this.setState({
            gender: value
        })
    }

    render() {
        return(
            <form onSubmit={(event) => {
                event.preventDefault();
                console.log('Form Submited!')
                console.log(this.state);
                
                
            }}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Your name" className="form-control" onChange={(event) => {
                        this.nameHandler(event.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Your password" className="form-control" onChange={(event) => {
                        this.passwordHandler(event.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <select className="form-control" onChange={(event) => {
                        this.genderHandler(event.target.value)
                    }} >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }

    
}


export default FormClass;