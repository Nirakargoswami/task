import './App.css';
import React, { useEffect } from "react";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { PRODUCT_DATA } from "./redux/actions/types"
import Cartpage from "./pages/cartpage"
import Productpage from "./pages/productpage"
function App() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.productdata)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(

        data => {
          console.log(data)
          dispatch({
            type: PRODUCT_DATA,
            payload: data,
          })
          return Promise.resolve();
        }

      )

  }, [])
  console.log(products)
  return (
    <div className='mainpage' >
      <div className='PRODUCTMAINPAFGE'>
        <h1>All Products</h1>
        <Productpage products={products && products.productdata} />
      </div>
      <div className='CARTPAGE'>
        <h1>Your cart </h1>
        <Cartpage />
      </div>
    </div>
  )
}
export default App
