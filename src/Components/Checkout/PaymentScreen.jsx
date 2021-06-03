import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../../actions/cartActions';
import CheckoutSteps from './CheckoutSteps';
import './shipping.css';

function PaymentScreen(props) {
  const cart = useSelector((state)=>state.cart);
  const {shippingAddress}= cart;
  
  if(!shippingAddress.address){
    props.history.push('/shipping');
  }
  
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3/>
            <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
          <div className="card my-4 paymentcard">
           <div className="card-body">
    <img className="paypalimg" src="https://www.paypalobjects.com/webstatic/icon/pp258.png" alt="img"/>       
     <input
              type="radio"
              id="paypal"
              class="form-check-input"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label className="paypallabel" htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div>
          </div>
         </div>

         <div className="card my-4 paymentcard">
  <div className="card-body paybody">
          <div>
          <img className="paypalimg" src="https://stripe.com/img/v3/home/twitter.png" alt="stripe"/>  
            <input
              type="radio"
              id="stripe"
              className="form-check-input"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label className="paypallabel" htmlFor="stripe">Stripe</label>
          </div>
        </div>
        </div>
       </div>
        <div>
          <label />
          <button className="btn btn-warning my-4" type="submit">
            Continue
          </button>
        </div>
      </form>
        </div>
    )
}
export default PaymentScreen;