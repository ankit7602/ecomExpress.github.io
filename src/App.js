import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Sliders from "./Components/Sliders/Slider";
import Row from "./Components/Products/Roww";
import Products from "./Components/Products/Products";
import Bigdeal from "./Components/Sections/Bigdeal";
import Contactus from "./Components/ContactUs/Contactus";
import Roww from "./Components/Products/Roww";
import Msg from "./Components/ContactUs/Msg";
import Footer from "./Components/Footer/Footer";
import Footercr from "./Components/Footer/Footercr";
import Cart from "./Components/Cart/Cart";
import Cartproduct from "./Components/Cart/Cartproduct";
import Home from "./Components/Main/Home";
import AllProducts from "./Components/Products/AllProducts";
import Wishlist from "./Components/Cart/Wishlist";
import Login from "./Components/User/Login";
import ProductDetail from './Components/Products/ProductDetail';
import SignUp from './Components/User/SignUp';
import ShippingAddress from "./Components/Checkout/ShippingAddress";
import PaymentScreen from "./Components/Checkout/PaymentScreen";
import PlaceOrder from "./Components/Checkout/PlaceOrder";
import OrderScreen from "./Components/Checkout/OrderScreen";
import OrderHistory from "./Components/User/OrderHistory";
import UserProfile from "./Components/User/UserProfile";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/cart/:id?" component={Cart} exact/>
          <Route path="/my-profile" component={UserProfile} exact/>
          <Route path="/all-products" component={AllProducts} exact/>
          <Route path = "/product/:id" component={ProductDetail} exact/>
          <Route path = "/my-wishList" component={Wishlist} exact/>
          <Route path = "/contact-us" component={Contactus} exact/>
          <Route path = "/log-in" component={Login} exact/>
          <Route path = "/sign-up" component={SignUp} exact/>
          <Route path= "/shipping" component={ShippingAddress} exact></Route>
          <Route path= "/payment" component={PaymentScreen} exact></Route>
          <Route path= "/placeorder" component={PlaceOrder} exact></Route>
          <Route path= "/order/:id" component={OrderScreen} exact></Route>
          <Route path="/order-history" component={OrderHistory} exact/>
          <Redirect to="/"/>
        </Switch>
      </Router>
      <Footercr />

    </div>
  );
}
export default App;
