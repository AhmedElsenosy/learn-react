import { useState } from "react";

function Welcome(props){
    // console.log(props)
    let [counter, setCounter] = useState(0);
    return(
        <>
            <h1>Hello, {props.name}</h1>
            <p>Age: {props.age} </p>
            <h6>{counter}</h6>
            <button onClick={() => {
                setCounter(counter++)
            }
            }>
                +1
            </button>
            <hr/>
        </>
    );
}

export default Welcome;