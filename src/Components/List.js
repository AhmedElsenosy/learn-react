function List(){
    const arr = ['html', 'css', 'js'];
    const li = arr.map((el) => {
        return <li> {el} </li>
    })

    return(
        <>
            <h1>list of elements</h1>
            <ul>
                {li}
            </ul>
        </>
    );

}


export default List;