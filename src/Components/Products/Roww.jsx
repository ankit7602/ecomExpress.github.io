import React from "react";
import "./Row.css";
import { FaShippingFast,FaRupeeSign } from "react-icons/fa";
import {WiTime3} from 'react-icons/wi';
function Roww() {
  return (
    
      <div className="row rowww">
        <div className="col-lg-4">
          <div className="text-area">
            <h3 className="spec">
            <FaShippingFast />
              <span className="lang1"> FREE SHIPPING &amp; RETURN</span>
            </h3>
            <p>
              <span className="lang1"> Free shipping on all orders over $99.</span>
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <i className="icon-money"></i>
          <div className="text-area">
            <h3 className="spec">
              <FaRupeeSign/>
              <span className="lang1"> MONEY BACK GUARANTEE</span>
            </h3>
            <p>
              <span className="lang1">100% money back guarantee.</span>
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <i className="icon-support"></i>
          <div className="text-area">
            <h3 className="spec">
              <WiTime3/>
              <span className="lang1"> ONLINE SUPPORT 24X7</span>
            </h3>
            <p>
              <span className="lang1">Available 24X7</span>
            </p>
          </div>
        </div>
      </div>
    
  );
}
export default Roww;
