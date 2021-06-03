import React from "react";
import { Card, Col, Row } from "reactstrap";
import "./Msg.css";
function Msg() {
  return (
    <div className="msgcard" >
      <Card className="msgcard" >
        <Row style={{ marginLeft: "30px", marginRight: "30px" }}>
          <Col lg="2">
            <h3>Any Query</h3>
          </Col>

          <Col lg="2">
            <div className="form-group">
              <input
                className="msginput"
                type="text"
                className="form-control msgform"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
              />
            </div>
          </Col>

          <Col lg="2" >
            <div className="form-group">
              <input
                className="msginput"
                type="email"
                className="form-control msgform"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
          </Col>
          <Col lg="4" >
            <div className="form-group">
              <input
                className="msginput"
                type="text"
                className="form-control msgform"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Message"
              />
            </div>
          </Col>
          <Col lg="2">
            <button className="btn btn-success">Send</button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
export default Msg;
