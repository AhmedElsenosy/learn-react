import productsData from "../Product-data";
import Product from "./Product";
import './ProductsList.css'

function ProductsList(){
    console.log(productsData)

    const products = productsData.map((product) => {
        return product.price > 100? (
            <Product key = {product.id} product = {product}/>
        ) : null;
    })

    return(
        <div className="ProductsList">
            <div className="row">
                {products}
            </div>
        </div>
    )
}


export default ProductsList;