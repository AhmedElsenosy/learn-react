function Name(){
    return(
        <>
            <label>Enter your name:</label>
            <input type="text" onChange={(event) => {
                console.log(event.target.value)
            }}/>
        </>
    );
}

export default Name;