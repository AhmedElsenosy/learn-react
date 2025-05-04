import { useState } from "react";

function Form(){

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');

    const nameHandler = (value) => {
        setName(value);
    }

    const passwordHandler = (value) => {
        setPassword(value);
    }

    const genderHandler = (value) => {
        setGender(value);
    }

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log('Form Submited!')
            console.log(name);
            console.log(password);
            console.log(gender);
            
        }}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" className="form-control" onChange={(event) => {
                    nameHandler(event.target.value)
                }} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Your password" className="form-control" onChange={(event) => {
                    passwordHandler(event.target.value)
                }} />
            </div>
            <div className="form-group">
                <label>Gender</label>
                <select className="form-control" onChange={(event) => {
                    genderHandler(event.target.value)
                }} >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}


export default Form;