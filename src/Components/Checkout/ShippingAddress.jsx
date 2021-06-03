import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../../actions/cartActions';
import CheckoutSteps from './CheckoutSteps'
import './shipping.css';
function ShippingAddress(props) {
    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;
    const cart = useSelector(state=>state.cart);
    const {shippingAddress} = cart;
    if(!userInfo){
        props.history.push('/log-in');
    }
  
    const [fullName, setFullName] =useState(shippingAddress.fullName);
    const [phone, setPhone] =useState(shippingAddress.phone);
    const [address, setAddress] =useState(shippingAddress.address);
    const [city, setCity] =useState(shippingAddress.city);
    const [country, setCountry] =useState(shippingAddress.country);
    const [postalCode, setPostalCode] =useState(shippingAddress.postalCode);
    const dispatch = useDispatch();
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(
            saveShippingAddress({fullName, phone, address,city,postalCode,country})
         );
         props.history.push('./payment');
    }
    return (
        <div>
            <CheckoutSteps step1 step2/>
            <div className="row">
            <div className="col-md-6 col-12 mx-auto ">
            <form  className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>

      <div>
        <div>
            <label className="shippinglabel" htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            className="form-control shipping-form"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>

        <div>
            <label className="shippinglabel" htmlFor="phone">Contact Number</label>
          <input
            type="number"
            id="phone"
            className="form-control shipping-form"
            placeholder="Enter Contact Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          ></input>
        </div>

        <div>
          <label className="shippinglabel" htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            className="shippinglabel"
            className="form-control"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label
          className="shippinglabel" htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            className="form-control"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label className="shippinglabel" htmlFor="postalCode">Postal Code</label>
          <input
            className="form-control"
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label className="shippinglabel" htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            className="form-control"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <button className="btn btn-warning my-4" type="submit">
            Continue
          </button>
        </div>
        </div>
        
      </form>
      </div>
      </div>
        </div>
    )
}
export default ShippingAddress;