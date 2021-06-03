import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
import ErrorMsg from "../Main/ErrorMsg";
import { detailsOrder, payOrder } from "../../actions/orderActions";
import CheckoutSteps from "./CheckoutSteps";
import "./placeOrder.css";
import { ORDER_PAY_RESET } from "../../constants/orderConstants";

function OrderScreen(props) {
  const [sdkReady, setSdkReady] = useState("false");
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const orderId = props.match.params.id;
  const dispatch = useDispatch();
  const orderPay = useSelector((state)=>state.orderPay);
  const {loading:loadingPay, error: errorPay , success: successPay} = orderPay;
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successPay || (order && order._id!== orderId)) {
      dispatch({type: ORDER_PAY_RESET});
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, orderId, sdkReady]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };
  return loading ? (
    <div className="spinner-border text-success" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  ) : error ? (
    <ErrorMsg title={error} button="Check Products"></ErrorMsg>
  ) : (
    <div>
      <div className="row">
        <div className="col-md-10 col-11 mx-auto">
          <div className="row mt-5 ">
            <h1>Order Details {order._id}</h1>
            {/* leftsidediv */}
            <div className="col-md-12 col-lg-8 col-11 mx-auto main_order mb-lg-0 mb-5 shadow">
              <ul>
                <li>
                  <div className="card card-body placerow">
                    <h4>Shipping</h4>
                    <p>
                      <strong>Name:</strong> {order.shippingAddress.fullName}{" "}
                      <br />
                      <strong>Phone: </strong>
                      {order.shippingAddress.phone}, <br />
                      <strong>Address: </strong> {order.shippingAddress.address}
                      , <br />
                      {order.shippingAddress.city},{" "}
                      {order.shippingAddress.postalCode},<br />
                      {order.shippingAddress.country}
                    </p>
                    {order.isDelivered ? (
<div className="alert alert-success" role="alert">
                          Delivered at {order.isDelivered}
                         </div>
                    ) : (
                      <div className="alert alert-danger" role="alert">
                          Not Delivered
                         </div>
                    )}
                  </div>
                </li>
                <li>
                  <div className="card card-body placerow">
                    <h4>Payment</h4>
                    <p>
                      <strong>Method:</strong> {order.paymentMethod}
                    </p>
                    {order.isPaid ? (
                      <div className="alert alert-success" role="alert">
                          Paid at {order.isPaid}
                         </div>
                    ) : (
                    <div className="alert alert-danger" role="alert">
                    Not Paid
                   </div>

                    )}
                  </div>
                </li>
                <li>
                  <div className="card card-body placerow">
                    <h2>Order Items</h2>
                    <ul>
                      {order.orderItems.map((item) => (
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
                                  <h6>
                                    <b>
                                      {item.qty} x ₹ {item.amount} = ₹{" "}
                                      {item.qty * item.amount}
                                    </b>
                                  </h6>
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
                  <p>₹ {order.itemsPrice.toFixed(2)}</p>
                </div>
                <div className="price_indiv d-flex justify-content-between">
                  <p>Shipping amount</p>
                  <p>₹ {order.shippingPrice.toFixed(2)}</p>
                </div>
                <div className="price_indiv d-flex justify-content-between">
                  <p>Tax</p>
                  <p>₹ {order.taxPrice.toFixed(2)}</p>
                </div>
                <hr />
                <div className="total-amt d-flex justify-content-between font-weight-bold">
                  <p>Total amount</p>
                  <p>
                    <strong style={{ color: "black" }}>
                      ₹ {order.totalPrice.toFixed(2)}
                    </strong>
                  </p>
                </div>
                <div>
                  {!order.isPaid && (
                    <li>
                      {!sdkReady ? (
                        <div
                          className="spinner-border text-success"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        <>{
                          errorPay && (<div className="alert alert-danger" role="alert">
                          {errorPay}
                         </div>)}
                       
                         {loadingPay && <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
                      }
                        <PayPalButton
                          amount={order.totalPrice}
                          onSuccess={successPaymentHandler}
                        ></PayPalButton>
                        </>
                      )}
                    </li>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderScreen;
