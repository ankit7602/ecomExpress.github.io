import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
function Footer(){
    ////footer = #2d333f
    return(
        <div>
              <footer>
                    <div className="container">
                        <div className="box">
                            <h3>About us</h3>
                            <p>It was popularised in the 1960 with the release of Latest sheets containing Lorem Ipsum
                                passage.</p>
                        </div>
                        <div className="box">
                            <h3>Quik Links</h3>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Cart</a>
                                </li>
                                <li>
                                    <a href="#">Products</a>
                                </li>
                                <li>
                                    <a href="#">Cart</a>
                                </li>
                                <li>
                                    <a href="#">WishList</a>
                                </li>
                                <li>
                                    <Link to="/contact-us">Contact us</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="box">
                            <h3>Follow Us</h3>
                            <div>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/codersgyan">
                                           
                                            <span>Facebook</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/CoderGyan">
                                           
                                            <span>Linkedin</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            
                                            <span>Google +</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/codersgyan/">
                                           
                                            <span>Instagram</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                </footer>
        </div>
    );
}
export default Footer;