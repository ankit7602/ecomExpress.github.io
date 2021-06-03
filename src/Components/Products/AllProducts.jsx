import React, { useEffect} from "react";
import Card from "./Card";
import axios from "axios";
import LoadingBox from "../Main/LoadingBox";
import ErrorMsg from "../Main/ErrorMsg";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";


function AllProducts() {
  const dispath = useDispatch();
  const productList = useSelector(state=> state.productList);
  
  const {loading , error , products} = productList;

  useEffect(() => {
    dispath(listProducts());
  }, []);


  useEffect(() => {
    document.title = "All Products || Ecom Express";
  }, []);


  
  return (
    <div>
      <h1 className="text-center my-4">All Products</h1>

      {loading ? (
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : error ? (
        <ErrorMsg title= {"Products not found"} link= {"/all-products"} button="Check Products"/>
      ) : (
        <div className="row gy-4">
          {products.map((product) => {
            return (
              <Card
                key={product._id}
                imgsrc={product.imgsrc}
                title={product.title}
                _id={product._id}
                rating={product.rating}
                numReviews={product.numReviews}
                amount={product.amount}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
export default AllProducts;
