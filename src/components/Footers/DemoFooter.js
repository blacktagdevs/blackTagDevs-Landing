/*!

=========================================================
* BLK Design System PRO React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function DemoFooter() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col md="9">
              <h1 className="title">
                BlackTagDevs
                <img
                  src={require("assets/blacktag/simpleLogo.png")}
                  alt=""
                  style={{ filter: "invert(1)", scale: "0.5" }}
                />
              </h1>
            </Col>
            <Col md="3">
              <h3 className="title">
                Follow us:{" "}
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://twitter.com/creativetim"
                  id="tooltip39661217"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip39661217">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="https://www.facebook.com/creativetim"
                  id="tooltip206037619"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </Button>
              </h3>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
