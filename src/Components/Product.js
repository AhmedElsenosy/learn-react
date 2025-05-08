import './Product.css'

function Product(props){
    return(
        <div className="card">
            <img src={props.product.image} />
            <h1> {props.product.title} </h1>
            <p> {props.product.description} </p>
            <p> price: {props.product.price} </p>
        </div>
    );
}

export default Product;