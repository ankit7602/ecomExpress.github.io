import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import ErrorMsg from '../Main/ErrorMsg';

function Cart(props) {
  useEffect(() => {
    document.title = "Cart || Ecom Express";
  }, []);
    
  const productId = props.match.params.id;
  
   const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const dispatch = useDispatch();
    const checkoutHandler = ()=>{
      props.history.push('/log-in?redirect=shipping')
    }
    const removeFromCartHandler = (id)=>{
      dispatch(removeFromCart(id));
      console.log(id);
    }
    useEffect(() => {
      if(productId){
        dispatch(addToCart(productId,qty));
      }
    }, [dispatch,productId, qty]);

  

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 col-11 mx-auto">
            <div className="row mt-5 gx-3 ">
              {/* <!-- left side div --> */}
              <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                <h2 className="py-4 font-weight-bold">Shopping Cart</h2>

                 {
                   cartItems.length === 0 ? (
                   <ErrorMsg title="Cart is Empty" link="/all-products" button="Go Shopping"></ErrorMsg> 
                   ): (
                     
                     <div>
                       {
                         cartItems.map((item)=>(
                          <div key={item.product}>
                    <div className="card p-4">
                    <div className="row">
                      {/* <!-- cart images div --> */}
                      <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                        <img
                          src={item.image}
                          className="img-fluid"
                          alt={item.title}
                        />
                      </div>
                      {/* 
        <!-- cart product details --> */}
                      <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                        <div className="row">
                          {/*             
            <!-- product name  --> */}
                          <div className="col-12 card-title">
                          <Link to={`/product/${item.product}`}> <h1 className="mb-4 product_name">{item.title}</h1></Link> 
                            
   {/* <!-- quantity inc dec --> */}
                          <ul className="pagination justify-content-center set_quantity">
                              
                              <li className="page-item"> <b style={{marginRight:"0.5rem"}}>Quantity</b> 
                              <select
                              style={{borderRadius:"10%", backgroundColor:"coral", width:"2.5rem"}}
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(5).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                           </li>
                            </ul>
                          </div>
  
                        </div>

                        {/* <!-- //remover move and price --> */}
                        <div className="row">
                          <div className="col-6 d-flex justify-content-between remove_wish">
                            <button className="btn btn-outline-danger"
                            type="button"
                            onClick={()=>removeFromCartHandler(item.product)}>
                           <AiOutlineDelete/> REMOVE ITEM
                              </button>
                           
                          </div>
                          <div className="col-6 d-flex justify-content-end price_money">
                            <h4>
                              $<span id="itemval">{item.amount*item.qty} </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  </div>    
                         ))
                       }
                       </div>
                       
                   )            
                  }  

                
              </div>

              {/* <!-- right side div --> */}
              <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                <div className="right_side p-3 shadow bg-white">
                  <h2 className="product_name mb-5">The Total Amount Of</h2>
                  <div className="price_indiv d-flex justify-content-between">
                    <p>Total Items</p>
                    <p>
                    {
                    cartItems.length > 0 && (
                      <span className="badge">{cartItems.length}</span>
                    )
                  }
                    </p>
                  </div>
                  <div className="price_indiv d-flex justify-content-between">
                    <p>Total Product amount</p>
                    <p>
                      <span id="product_total_amt"> $
                {cartItems.reduce((a, c) => a + c.amount * c.qty, 0)}</span>
                    </p>
                  </div>
                  <div className="price_indiv d-flex justify-content-between">
                    <p>Shipping Charge</p>
                    <p>
                      $<span id="shipping_charge">50.0</span>
                    </p>
                  </div>
                  <hr />
                  <div className="total-amt d-flex justify-content-between font-weight-bold">
                    <p>The total amount of (including VAT)</p>
                    <p>
                      $<span id="total_cart_amt">  {cartItems.reduce((a, c) => a + c.amount * c.qty, 0)+50 }</span>
                    </p>
                  </div>
                  <button
                    type="button"
                   onClick={checkoutHandler}
                   className="btn btn-primary text-uppercase"
                   disabled={cartItems.length ===0}>
                    Proceed To Checkout
                  </button>
                </div>

                {/* <!-- discount code part --> */}
                <div className="discount_code mt-3 shadow">
                  <div className="card">
                    <div className="card-body">
                      <a
                        className="d-flex justify-content-between"
                        data-toggle="collapse"
                        href="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Add a discount code (optional)
                        <span>
                          <i className="fas fa-chevron-down pt-1"></i>
                        </span>
                      </a>
                      <div className="collapse" id="collapseExample">
                        <div className="mt-3">
                          <input
                            type="text"
                            name=""
                            id="discount_code1"
                            className="form-control font-weight-bold"
                            placeholder="Enter the discount code"
                          />
                          <small id="error_trw" className="text-dark mt-3">
                            code is thapa
                          </small>
                        </div>
                        <button
                          className="btn btn-primary btn-sm mt-3"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- discount code ends --> */}
                <div className="mt-3 shadow p-3 bg-white">
                  <div className="pt-4">
                    <h5 className="mb-4">Expected delivery date</h5>
                    <p>July 27th 2020 - July 29th 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
