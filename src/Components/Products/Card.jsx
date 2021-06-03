import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Rating from "./Rating";
import styled from "styled-components";

function Card(product) {
  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="card carddddddd">
        <Link to={`/product/${product._id}`}>
        <img
          src={product.imgsrc}
          height="350px"
          className="card-img-top"
          alt={product.title}
        />
        <h6 className="card-title">{product.title}</h6>
        </Link> 
        <Rating 
         rating={product.rating}
         numReviews = {product.numReviews}>
         </Rating>
       
        <div className="card-body">
        <h4 className="card-text text-start">
            ${product.amount}
        </h4>
        </div>
      </div>
    </div>
  );
}
export default Card;
