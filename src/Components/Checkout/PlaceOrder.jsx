import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../../actions/orderActions";
import { ORDER_CREATE_RESET } from "../../constants/orderConstants";
import CheckoutSteps from "./CheckoutSteps";
import "./placeOrder.css";

function PlaceOrder(props) {
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.amount, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
    const dispatch = useDispatch();

  const placeOrderHandler = () => {
    dispatch(createOrder({...cart,orderItems: cart.cartItems}));
  };
  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />

      <div className="row">
        <div className="col-md-10 col-11 mx-auto">
          <div className="row mt-5 ">
            {/* leftsidediv */}
            <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
              <ul>
                <li>
                  <div className="card card-body placerow">
                    <h4>Shipping</h4>
                    <p>
                      <strong>Name:</strong> {cart.shippingAddress.fullName}{" "}
                      <br />
                      <strong>Phone: </strong>
                      {cart.shippingAddress.phone}, <br />
                      <strong>Address: </strong> {cart.shippingAddress.address},{" "}
                      <br />{cart.shippingAddress.city},{" "}
                      {cart.shippingAddress.postalCode},<br/>
                      {cart.shippingAddress.country}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="card card-body placerow">
                    <h4>Payment</h4>
                    <p>
                      <strong>Method:</strong> {cart.paymentMethod}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="card card-body placerow">
                    <h2>Order Items</h2>
                    <ul>
                      {cart.cartItems.map((item) => (
                        <li key={item.product}>
                          <div className="row my-2">
                            <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="small"
                              ></img>
                            </div>

                            <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                              <div className="row">
                                <div className="col-12 card-title">
                                  <Link to={`/product/${item.product}`}>
                                    {item.title}
                                  </Link>
                                  
                                </div>
                                <div className="row">
                            <h6><b>{item.qty} x ₹ {item.amount} = 
                            ₹ {item.qty * item.amount}
                              </b></h6>
                               </div>
                              </div>
                            </div>

                            
                          

                            
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* <!-- right side div --> */}
            <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
              <div className="right_side p-3 shadow bg-white">
                <h2 className="product_name mb-5">Oder Summary</h2>
                <div className="price_indiv d-flex justify-content-between">
                  <p>Item Price</p>
                  <p>₹ {cart.itemsPrice.toFixed(2)}</p>
                </div>
                <div className="price_indiv d-flex justify-content-between">
                  <p>Shipping amount</p>
                  <p>₹ {cart.shippingPrice.toFixed(2)}</p>
                </div>
                <div className="price_indiv d-flex justify-content-between">
                  <p>Tax</p>
                  <p>₹ {cart.taxPrice.toFixed(2)}</p>
                </div>
                <hr />
                <div className="total-amt d-flex justify-content-between font-weight-bold">
                  <p>Total amount</p>
                  <p>
                    <strong style={{ color: "black" }}>
                    ₹ {cart.totalPrice.toFixed(2)}
                    </strong>
                  </p>
                </div>
                <button
                  type="button"
                  disabled={cart.cartItems.length === 0}
                  className="btn btn-warning text-uppercase"
                  onClick={placeOrderHandler}
                >
                  Place Order
                </button>
                
                {loading &&
                <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              }
              {
                error && <div className="alert alert-danger" role="alert">
                {error}
              </div>
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PlaceOrder;
