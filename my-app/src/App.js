import './App.css';
import React, { useEffect, useState ,useRef} from "react";
import { Resizable } from "re-resizable";
import DragResizeContainer from 'react-drag-resize';
import { Rnd } from "react-rnd";

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { PRODUCT_DATA } from "./redux/actions/types"
import Cartpage from "./pages/cartpage"
import Productpage from "./pages/productpage"
function App() {
  const [data, setdata] = useState([])
  const [state, setState] = useState();
  const [font,setFont] = useState(20)
const pont = useRef(null)
  console.log(state)




  // useEffect(() => {

  //   fetch("https://qa-admin.vexprotech.com/subscriptions/stripe/prices", {
  //     method: "POST",
  //     body: JSON.stringify({

  //       product_id: "prod_FvgDKe2Tu1mhLR"
  //     }),
  //     headers: {
  //       Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImVtYWlsIjoia2luamFsQGhvdG1haWwuY29tIiwicm9sZSI6ImFkbWluIiwibmFtZSI6IktpbmphbGwgUHJhamFwYXRpIiwiaWF0IjoxNjY4NjY1MTE3LCJleHAiOjE2Njg4Mzc5MTd9.CIIUmTCq8USzCohFmOsWF8-0jN_BFo3Wtgsidt8mOGE",
  //       ContentType: "application/json"
  //     }
  //   }).then((res) => res.json()).then((data) => {
  //     console.log(data.body.data)
  //     const newdata = data.body.data
  //     setdata(newdata)
  //   })
  // }, [])


  // const dispatch = useDispatch()
  // const products = useSelector((state) => state.productdata)
  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res => res.json())
  //     .then(

  //       data => {
  //         console.log(data)
  //         dispatch({
  //           type: PRODUCT_DATA,
  //           payload: data,
  //         })
  //         return Promise.resolve();
  //       }

  //     )

  // }, [])
  // console.log(products)
  useEffect(() => {
    let count = 20

    console.log(count)
    console.log(pont.current.style.fontSize)
    if(state < 50 ){
      setFont(font - 1)
        pont.current.style.fontSize = `${font}px`
        count = count - 1
     }else{
      setFont(font + 1)

      pont.current.style.fontSize = `${font }px`
      count = count + 1
     }
   },[state])
  const canResizable = (isResize) => {
    return { top: isResize, right: isResize, bottom: isResize, left: isResize, topRight: isResize, bottomRight: isResize, bottomLeft: isResize, topLeft: isResize };
};
const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderb : "solid 1px #ddd",
  background: "#f0f0f0"
};
  
  return (
    
    <div className='Maindiv' > 
   <Rnd
   bounds='.Maindiv'
   onResize={(e, direction, ref, delta, position) => {
    setState(
      ref.offsetWidth,
     
    
   );

  
  
   
  }}    style={style}
    default={{
      x: 0,
      y: 0,
      width:"50px",
      height: 200
    }}
  >
 
          <p ref={pont}  > Rnd</p>

  </Rnd>

      {/* <Resizable
      style={{  border: "1px solid black" }}
      size={{ width: state.width, height: state.height }}
      onResizeStop={(e, direction, ref, d) => {
        setState({
          width: state.width + d.width, height: state.height + d.height,
        });
      }}>
           <div className="parent">
        <div className="draggable"></div>
      </div>
      Sample with size
     </Resizable> */}

   
      {/* <div className='PRODUCTMAINPAFGE'>
        <h1>All Products</h1>
        <Productpage products={products && products.productdata} />
      </div>
      <div className='CARTPAGE'>
        <h1>Your cart </h1>
        <Cartpage />
      </div> */}
    </div>
  )
}
export default App

const Table = () => {
  <table id="customers">
    <tr>
      <th>Name</th>
      <th>Parice</th>
      <th>Price id </th>
      <th>Action  </th>
    </tr>


    {/* {data && data.map((x) => {
      return (
        <tr>
          <>
            <td>{x.nickname}</td>
            <td>{`${(x.unit_amount / 100) + "/" + x.recurring.interval}`}</td>
            <td>{x.id}</td>
            {<td>

              <button disabled={x.active ? true : false} >
                Archive
              </button>
            </td>

            }
          </>
        </tr>
      )
    })

    } */}






    {/* <tr>
          {data && data.map((x) => {
            return (
              <>
                <td>{x.nickname}</td>
                <td>{`${(x.unit_amount/100 )/+ x.recurring.interval}`}</td>
                <td>{x.id}</td>
               {  <td>

                  <button disabled={x.active ? true : false} >
                    Archive
                  </button>
                </td>

                }
              </>
            )
          })

          }

        </tr> */}
  </table>
}