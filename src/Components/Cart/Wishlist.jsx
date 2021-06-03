import React, { useEffect } from "react";
import WProduct from "./WProduct";

function Wishlist() {
    useEffect(() => {
        document.title="My WishList || Ecom Express";
    }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 col-11 mx-auto">
            <div className="row mt-5 gx-3">
            <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
            <h2 className="py-4 font-weight-bold">My WishList (2 items)</h2>
               <WProduct/>
               <WProduct/>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Wishlist;
