import React from "react";
import './Bigdeal.css';
function Bigdeal() {
  return (
    <div>
      <section className="big-deal my-4">
        <div className="container">
          <h1 className="deal">Big Deals of the Week</h1>
         
          <div className="timer">
            <div>
              <span>02</span>
              <span>Days</span>
            </div>
            <div>
              <span>24</span>
              <span>Hours</span>
            </div>
            <div>
              <span>55</span>
              <span>Minutes</span>
            </div>
            <div>
              <span>58</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Bigdeal;
