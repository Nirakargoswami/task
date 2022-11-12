
import Product from "../component/Product"
import "./Productpage.css"
const productpage = ({products}) => {


console.log(products)

    
    return (
        <div>
           <div>
          
           </div>

           <div className="procuctpage">
           
              {products  && products.map((x) => {
return (
    <Product  category={x.category} id={x.id} price={x.price} src={x.image} />
)

              })
            
            
              }
           </div>

        </div>
    )
}

export default productpage