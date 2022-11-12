import "./Cartpage.css"
import { useSelector } from 'react-redux'
import Product from "../component/Product"


const cartpage = () => {
    const products = useSelector((state) => state.productdata)
    console.log(products)
    return (

        <div className="cartpage">


            {products.cartidtem &&
             products.cartidtem.map((x) => {
                return (
                    <Product remove={true} category={x.category} id={x.id} price={x.price} src={x.image} />
                )
            })


            }

        </div>
    )
}

export default cartpage