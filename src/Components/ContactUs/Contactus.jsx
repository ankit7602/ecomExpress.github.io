import React, { useEffect } from "react";
import { Row, Col, CardBody } from "reactstrap";
import { MdLocationOn } from "react-icons/md";
import { FaPhone, FaTelegram } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import Msg from "./Msg";

function Contactus() {
  useEffect(() => {
    document.title = "Contact Us || Ecom Express";
  }, []);
  return (
    <div>
        <h1>Contact Us</h1>

      <Row className="row">
        <Col lg="4">
          <CardBody className="contact text-center h-100 white-text">
            <h2 className="my-4 pb-2">Contact information</h2>
            <ul className="text-center list-unstyled">
              <li>
                <MdLocationOn />
                <p>
                  B-292 Saraswati Vihar <br />
                  Pitam Pura
                </p>
              </li>

              <li>
                <FaPhone />
                <p>+917015032217</p>
              </li>
              <li>
                <MdMail />
                <p>sharmaankit7602@gmail.com</p>
              </li>
            </ul>

            <ul className="list-inline text-center list-unstyled">
              <li className="list-inline-item">
                <a
                  href="https://api.whatsapp.com/send?phone=917015032217"
                  className="p-2 fa-lg w-ic"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/profile.php?id=100005966119338"
                  className="p-2 fa-lg w-ic"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="p-2 fa-lg w-ic">
                  <GrInstagram />
                </a>
              </li>
            </ul>
          </CardBody>
        </Col>
      
        <Col lg="8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3499.685735995106!2d77.12111321481714!3d28.6990459823916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x390d03e6def51729%3A0xd186cace42644665!2sInstitute%20of%20Vaastu%20%26%20joyful%20living%2C%20B-292%2C%20Outer%20Ring%20Rd%2C%20Block%20B%2C%20Saraswati%20Vihar%2C%20Pitam%20Pura%2C%20New%20Delhi%2C%20Delhi%20110034!3m2!1d28.699046!2d77.1233019!5e0!3m2!1sen!2sin!4v1608469885731!5m2!1sen!2sin"
            width="100%"
            height="380"
            frameBorder="0"
            style={{border:"0"}}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </Col>
     
      </Row>
        <Msg/>
    </div>
  );
}
export default Contactus;
