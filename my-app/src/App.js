import './App.css';

import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Resizable } from "re-resizable";
import DragResizeContainer from 'react-drag-resize';
import { Rnd } from "react-rnd";
import ScaleText from 'react-scale-text';
import { Stage, Layer, Image, Transformer, Text ,downloadURI} from 'react-konva';
import useImage from 'use-image';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { PRODUCT_DATA } from "./redux/actions/types"
import Cartpage from "./pages/cartpage"
import Productpage from "./pages/productpage"

import P from "../src/assets/mem2.jpeg"
const LionImage = () => {
  const [image] = useImage(P);
  return <Image Image={image} width={400} height={400} />;
};
class URLImage extends React.Component {
  state = {
    image: null,
  };
  componentDidMount() {
    this.loadImage();
  }
  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
      this.loadImage();
    }
  }
  componentWillUnmount() {
    this.image.removeEventListener('load', this.handleLoad);
  }
  loadImage() {
    // save to "this" to remove "load" handler on unmount
    this.image = new window.Image();
    this.image.src = this.props.src;
    this.image.addEventListener('load', this.handleLoad);
  }
  handleLoad = () => {
    // after setState react-konva will update canvas and redraw the layer
    // because "image" property is changed
    this.setState({
      image: this.image,
    });
    // if you keep same image object during source updates
    // you will have to update layer manually:
    // this.imageNode.getLayer().batchDraw();
  };
  render() {
    return (
      <Image
        x={this.props.x}
        y={this.props.y}
        image={this.state.image}
        ref={(node) => {
          this.imageNode = node;
        }}
      />
    );
  }
}
function App() {
  const [data, setdata] = useState([])
  const [state, setState] = useState();
  const [font, setFont] = useState(20)
  const [fontwidh, setfontwidth] = useState()
  const [newWidth, setnewWidth] = useState()
  const pont = useRef(null)
  console.log(state)
  const text = useRef();
  const newtext = useRef();
  const stageRef = useRef(null)
  // Accessing the history instance created by React


  const downloadimage = () => {
    console.log("kmskdf")
  }
  
  function downloadURI(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
 
  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    console.log(uri);
  
    downloadURI(uri, 'stage.png');
  };
useEffect(() => {
  newtext.current.nodes([text.current]);
})
  console.log(newtext.current)
  return (

    <>
      <div className='MAin'>
        <div className='MAINBOX'>
          <div className='IAMGE'>
            <Stage width={400} height={400}   ref={stageRef}>
              <Layer  >



                <LionImage />
                <Text ref={text} draggable={true} text={"textasdfasdfa"}  />


                <Transformer
                
               
                ref={newtext} resizeEnabled={true}  />


              </Layer>
            </Stage>

          </div>
          <div className='IAMGEstyle'>
          <button onClick={handleExport}>Click here to log stage data URL</button>

          </div>
        </div>


      </div>

    </>
    //     <div className='Maindiv' >
    //       <canvas id="mcanvas">
    //       <Rnd
    //         bounds='.Maindiv'
    //         onResize={(e, direction, ref, delta, position) => {
    //           console.log(delta,"Star")
    //           setfontwidth(delta.width) 

    //           setTimeout(() => {
    //             setnewWidth(delta.width) 

    //           },250)
    //           setState(
    //             ref.offsetWidth
    //           );

    //         }}


    //         style={style}
    //         default={{
    //           x: 0,
    //           y: 0,

    //         }}
    //       >
    //         <p className="font">
    //         some text

    //         </p>


    //       </Rnd>
    //       </canvas>


    //       {/* <Resizable
    //       style={{  border: "1px solid black" }}
    //       size={{ width: state.width, height: state.height }}
    //       onResizeStop={(e, direction, ref, d) => {
    //         setState({
    //           width: state.width + d.width, height: state.height + d.height,
    //         });
    //       }}>
    //            <div className="parent">
    //         <div className="draggable"></div>
    //       </div>
    //       Sample with size
    //      </Resizable> */}


    //       {/* <div className='PRODUCTMAINPAFGE'>
    //         <h1>All Products</h1>
    //         <Productpage products={products && products.productdata} />
    //       </div>
    //       <div className='CARTPAGE'>
    //         <h1>Your cart </h1>
    //         <Cartpage />
    //       </div> */}
    //             <button onClick={ downloadimage}>
    // Download
    // </button>

    //     </div>

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
  // useEffect(() => {
  //   let count = 20

  //   console.log(count)
  //   console.log()
  //  const newstirng =  pont.current.style.fontSize.replace('px','')
  //  console.log(newstirng,"font")
  //   if (fontwidh < newWidth) {
  //     setFont(newstirng - 0.4)
  //     pont.current.style.fontSize = `${font}px`
  //   } else {
  //     setFont(newstirng + 0.4)

  //     pont.current.style.fontSize = `${font}px`
  //   }
  // }, [state])