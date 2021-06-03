import React, { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../actions/userActions';
import FormError from '../Common/FormError';
import './Login.css';
function SignUp(props) {
  const [registererror, setregisterError] = useState(false)
  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [phone , setPhone] = useState();
  const [password , setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const redirect = props.location.search
  ? props.location.search.split('=')[1]
  : '/';

  const userRegister = useSelector((state)=> state.userRegister);
  const {userInfo , loading , error} = userRegister;

  const dispatch = useDispatch();

  const formValid = ()=>{
    if(!name && !email && !phone && !password){
      setregisterError(true);
      console.log(registererror);
    }else{
      setregisterError(false);
    }
  }

  const submitHandler =(e)=>{
    e.preventDefault();
    setregisterError(true)
   
    
    if(name && email && phone && password){
      setregisterError(false);
    if(password !== confirmPassword){
      alert('Password and Confirm Password not match');
    }
    else{
      dispatch(register(name,email,phone,password));
    }
  }else{
    alert("Name Email Phone Number & Password can not be empty")
  }
  };

    useEffect(() => {
      if(userInfo){
        props.history.push(redirect);
      }
    }, [props.history, redirect, userInfo]);

    return(
        <div>
          <div className="card carrdddd  mb-3">
        <div className="row g-0">
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
              <h1 className="card-title">Sign Up</h1>
               <div style={{marginTop:"2rem", marginLeft:"4rem", marginRight:"4rem"}}> 
              <form onSubmit={submitHandler}>
              <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                    onChange= {(e)=> setName(e.target.value)}
                    required
                  />
                  </div>
                  
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    onChange= {(e)=> setEmail(e.target.value)}
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone"
                    id="exampleInputPassword1"
                    onChange= {(e)=> setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="exampleInputPassword1"
                    onChange= {(e)=> setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    id="exampleInputPassword1"
                    onChange= {(e)=> setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-block btn-primary btn-lg"> <FaUserAlt/> 
                 <small style={{marginLeft:"1rem"}}>Sign Up</small> 
                </button>
               
              </form>
              <p style={{marginTop:"2rem"}}>Already have an account? <Link to={`/log-in?redirect=${redirect}`}>Log In...</Link></p>  
              </div>            
            </div>
          </div>
        </div>
      </div>
        </div>

    );
}
export default SignUp;