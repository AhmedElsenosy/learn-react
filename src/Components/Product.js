
function Product(props){
    return(
        <div className="product-card">
            <h1>Product name : {props.name}</h1>
            <p>Product description : {props.description}</p>
            <span>Product price : {props.price}</span>
        </div>
    );
}

export default Product;