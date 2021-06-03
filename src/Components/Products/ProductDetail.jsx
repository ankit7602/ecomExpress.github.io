import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { detailsProduct } from '../../actions/productActions';
import ErrorMsg from '../Main/ErrorMsg';
import Pdata from "./Pdata";
import "./ProductDetail.css";
import Rating from "./Rating";

function ProductDetail(props) {
  const productDetails = useSelector(state => state.productDetails);
  const productId = props.match.params.id;
  const {loading , error , product} = productDetails; 
  const dispatch = useDispatch();
  let [qty , setQty] = useState(1);
  const addToCartHandler = ()=>{
    props.history.push(`/cart/${productId}?qty=${qty}`)
  }  
  useEffect(() => {
     dispatch(detailsProduct(productId));
    }, [dispatch , productId]);
   
    return (
     <div>
      {loading ? (
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : error ? (
        <ErrorMsg title={"Product not found"} link="/all-products" button="Check products"/>
      ) : (
        <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img
              src={product.imgsrc}
              width="100%"
              height="100%"
              alt={product.title}
            />
          </div>
  
          <div className="col-md-7">
            <ul style={{ marginTop: "3rem", textAlign: "start" }}>
              <li>
                <p style={{ fontSize: "1.5rem" }}>
                  {product.brand} {product.category}
                </p>
              </li>
              <li>
                <h1 style={{ fontSize: "2rem" }}>{product.title}</h1>
              </li>
              <li>
                <Rating rating={product.rating} numReviews={product.numReviews} />
              </li>
            </ul>
  
            <h2 className="price details">
              <b>
                USD:{" "}
                <h2 style={{ marginLeft: "2rem", color: "green" }}>
                  ${product.amount}
                </h2>
              </b>
            </h2>
  
            <p className="details">
              <b>Brand:</b> {product.brand}
            </p>
  
            <div>
              <p className="details">
                {" "}
                {product.countInStock > 0 ? (
                  <span className="success">
                    <b>In Stock</b>
                  </span>
                ) : (
                  <span className="danger">
                    <b>Unavailable</b>
                  </span>
                )}
              </p>
              <p className="details">
                {" "}
                <b>Description: </b>
                {product.description}
              </p>
               {
                 product.countInStock > 0 && (
                   <>

                <li>
                        <div className="row">
                          <div className="col-2 details"><b> Quantity</b></div>
                          <div className="col-2">
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(3).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                      <button onClick={addToCartHandler} 
                     style={{marginBottom:"5rem"}} className="btn btn-warning" type="button">
                Add to Cart
              </button>
                      </li>
                   </>
                 
                 )
               }     
              
            </div>
          </div>
        </div>
      </div>
      )}

</div>
       
  );
}
export default ProductDetail;
