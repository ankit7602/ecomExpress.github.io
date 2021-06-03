import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { signout } from '../../actions/userActions';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import "./Navbar.css";
import demo from '../../images/demo.png';
import { Image } from 'react-bootstrap';
import SideBar from './SideBar';
function Navbar(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        {/* <div className="container-fluid"> */}
        <SideBar />
        <Link className="navbar-brand ecomheader" to="/">
          <b style={{ textShadow: "2px 2px yellow" }}>ECOM APP</b>
        </Link>
        {userInfo ? (
          <ul class="navbar-nav">
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><Image src="https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg" roundedCircle alt="profile" style={{ width: "2.5rem", color: "blue", height: "2.5rem" }} /></a>
              <div class="dropdown-menu dropdown-menu-left shadow animated--grow-in" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                 My Profile
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  My Orders
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Cart
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>

            {/* <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/cart">
              <FiShoppingCart style={{ fontSize: "2rem" }} />
              {
                cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )
              }
            </Link>
          </li> */}
          </ul>
        ) : <Link className="signup-btn btn button btn-primary" to="/log-in">Log In</Link>}
      </nav>
    </div>
  );
}
export default Navbar;
