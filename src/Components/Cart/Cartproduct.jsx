import React from "react";
import './Cart.css';
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai';
function Cartproduct(props) {
  
  return (
    <div>
      <div className="card p-4">
        <div className="row mycartrow">
          {/* <!-- cart images div --> */}
          <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
            <img src="https://images.unsplash.com/photo-1596937098209-541d20a39ebd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" className="img-fluid" alt="cart img" />
          </div>
          {/* 
      <!-- cart product details --> */}
          <div className="col-md-7 col-11 mx-auto px-4 mt-2">
            <div className="row">
              {/*             
          <!-- product name  --> */}
              <div className="col-6 card-title">
                <h1 className="mb-4 product_name">Blue Zara Shirt</h1>
                <p className="mb-2">SHIRT - BLUE</p>
                <p className="mb-2">COLOR: BLUE</p>
                <p className="mb-3">SIZE: M</p>
               
              </div>

              {/* <!-- quantity inc dec --> */}
              <div className="col-6">
                <ul className="pagination justify-content-end set_quantity">
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick="decreaseNumber('textbox','itemval')"
                    >
                      <AiOutlineMinusCircle/>
                    </button>
                  </li>
                  <li className="page-item">
                    <input
                      type="text"
                      name=""
                      className="page-link"
                      value="1"
                      id="textbox"
                    />
                  </li>
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick="increaseNumber('textbox','itemval')"
                    >
                      <AiOutlinePlusCircle/>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- //remover move and price --> */}
            <div className="row">
              <div className="col-8 d-flex justify-content-between remove_wish">
                <p>
                  <i className="fas fa-trash-alt"></i> REMOVE ITEM
                </p>
                <p>
                  <i className="fas fa-heart"></i>MOVE TO WISH LIST
                </p>
              </div>
              <div className="col-4 d-flex justify-content-end price_money">
                <h4>
                  $<span id="itemval">0.00 </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
export default Cartproduct;
