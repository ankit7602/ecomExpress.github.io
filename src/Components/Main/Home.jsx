import React, { useEffect } from "react";
import Contactus from "../ContactUs/Contactus";
import Msg from "../ContactUs/Msg";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";
import Roww from "../Products/Roww";
import Bigdeal from "../Sections/Bigdeal";
import Sliders from "../Sliders/Slider";
import SliderProducts from "../Sliders/SliderProducts";

function Home() {
  useEffect(() => {
    document.title="Home || Ecom Express";
}, []);
  return (
    <div>
      <Sliders />
      
      <Roww />
      <Products />
      <Bigdeal/>
      <Contactus/>
      <Footer />
    </div>
  );
}
export default Home;
