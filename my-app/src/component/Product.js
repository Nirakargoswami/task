import "./product.css"
import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux'
import {ADD_ITEM,REMOVE_ITEM} from "../redux/actions/types"
const Product = ({ id, src, price, category ,remove}) => {
  const products = useSelector((state) => state.productdata)
console.log(products)

  const dispatch = useDispatch()
  
  const Addtocart = (id) => {
    console.log(id)
const productaxist =  products.cartidtem.find( x => x.id == id  )

if(!productaxist){
  const findproduct = products.productdata.find(x => x.id == id  )

  console.log(findproduct)
  
      dispatch({
        type:ADD_ITEM ,
        payload: findproduct,
      })
}

   
  }

  const Removecart = (id) => {
      const findproduct = products.cartidtem.filter(x => x.id !== id  )

console.log(findproduct)

    dispatch({
      type:REMOVE_ITEM ,
      payload: findproduct,
    })
   }
    

  

  return (
    <div className="Card">
      <div  >
        <img className="IMAGE" src={`${src}`} />
      </div>
      <div>
        <h3>
          {category}
        </h3>
      </div>
      <div>
        <p1>price{price}</p1>
      </div>
      <div>
       { !remove  && <button className="Button" onClick={() => Addtocart(id)}>
          ADDTOCART
        </button>}
      </div>
      <div>
       { remove  && <button className="Button" onClick={() => Removecart(id)}>
          Remove from cart 
        </button>}
      </div>
    </div>
  )
}

export default Product