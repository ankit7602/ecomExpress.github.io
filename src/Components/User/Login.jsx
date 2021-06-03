import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../../actions/userActions";
import ErrorMsg from "../Main/ErrorMsg";

import "./Login.css";
function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = props.location.search 
  ? props.location.search.split('=')[1]
  : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo ,loading, error} = userSignin;
  const [loginError,setLoginError]= useState(false);
  const dispatch = useDispatch();



  const loginHandler=(e)=>{
    e.preventDefault();
    setLoginError(true)
    if(email && password){
     setLoginError(false); 
    dispatch(signin(email, password));
    }else{
      alert("Email and password cannot be empty")
    }
 };
  useEffect(() => {
    if(userInfo){
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div>
      <div className="card carrdddd  mb-3">
        <div className="row g-0 no-gutters">
          <div className="col-md-4">
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1561052728-8ebd57d62b66?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80"
              alt="fdn"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
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
              
              <h1 className="card-title">Login</h1>
               <div className="my_divform"> 
              <form onSubmit={loginHandler}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    id="password"
                    onChange={(e)=> setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label labellll" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <button type="submit"
                 className="btn btn-block btn-primary btn-lg"> <FaUserAlt/> 
                 <small style={{marginLeft:"1rem"}}>Login</small> 
                </button>

                <div className="row mx-auto">
                <div className="col-4">
                  <a href=""></a>
                </div>
                <div className="col-4">
                  <a href=""></a>
                </div>
                <div className="col-4">
                  <a href=""></a>
                </div>
              </div>
              </form>

             <p className="forget" style={{marginTop:"1rem"}}>Forget Password ? <a href=""> Forget Password</a></p>   

              <p style={{marginTop:"2rem"}}>Do not have an account? <Link to={`/sign-up?redirect=${redirect}`}>Register here...</Link></p>  
              </div>            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
