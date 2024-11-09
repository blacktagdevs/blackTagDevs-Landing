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

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";

export default function Features() {
  return (
    <>
      <div className="cd-section" id="features">
        {/* ********* FEATURES 1 ********* */}
        <div className="features-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h1 className="title">Companies we have worked with</h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-primary">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/primary.png")}
                    />
                    <img
                      alt="..."
                      width={80}
                      height={80}
                      src={require("assets/blacktag/microsoft.png")}
                    />{" "}
                  </div>
                  <h4 className="info-title">Microsoft</h4>
                  <p className="description">
                    Gain access to the demographics, psychographics, and
                    location of unique people.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-success">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/success.png")}
                    />
                    <img
                      alt="..."
                      width={80}
                      height={80}
                      src={require("assets/blacktag/amex.png")}
                    />{" "}
                  </div>
                  <h4 className="info-title">American Express</h4>
                  <p className="description">
                    Unify data from Facebook, Instagram, Twitter, LinkedIn, and
                    Youtube to gain rich insights.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-warning">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/warning.png")}
                    />
                    <img
                      alt="..."
                      width={80}
                      height={80}
                      src={require("assets/blacktag/accenture.png")}
                    />{" "}
                  </div>
                  <h4 className="info-title">Accenture</h4>
                  <p className="description">
                    Track actions taken on your website, understand the impact
                    on your bottom line.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END FEATURES 1 ********* */}

        {/* ********* END FEATURES 3 ********* */}

        {/* ********* FEATURES 5 ********* */}
        <div className="features features-5">
          <Container>
            <Row className="align-items-center">
              <Col lg="6">
                <div className="featured-image">
                  <img
                    alt="..."
                    height="600"
                    src={require("assets/img/pawel-nolbert.jpg")}
                    width="500"
                  />
                </div>
              </Col>
              <Col className="mt-md-5" lg="6">
                <h1 className="title">Company values</h1>
                <Row>
                  <Col lg="6" md="6">
                    <div className="info">
                      <h4 className="info-title">Honesty</h4>
                      <p className="description">
                        We believe in transparent, accurate, and ethical data
                        usage. We are committed to providing clear insights and
                        honest representation of the demographics,
                        psychographics, and location data we offer, ensuring
                        that our clients can trust us with their decisions.
                      </p>
                    </div>
                    <div className="info">
                      <h4 className="info-title">Efficiency</h4>
                      <p className="description">
                        We value delivering high-quality data and insights with
                        speed and precision. Our goal is to streamline the
                        process of gaining access to vital demographic,
                        psychographic, and location information, empowering our
                        clients to act quickly and confidently.
                      </p>
                    </div>
                  </Col>
                  <Col lg="6" md="6">
                    <div className="info">
                      <h4 className="info-title">Customer Focused</h4>
                      <p className="description">
                        We are dedicated to being helpful in every aspect of our
                        work. By understanding the unique needs of our clients
                        and offering tailored insights into demographics,
                        psychographics, and locations, we aim to provide
                        solutions that drive success and foster long-term
                        partnerships.
                      </p>
                    </div>
                    <div className="info">
                      <h4 className="info-title">Quality</h4>
                      <p className="description">
                        We hold ourselves to the highest standards of quality.
                        We ensure that the data we provide is reliable,
                        accurate, and actionable, supporting our clients in
                        making informed, strategic decisions based on
                        comprehensive, precise insights.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END FEATURES 5 ********* */}
        {/* ********* FEATURES 6 ********* */}
        <div className="features-6">
          <Container>
            <Row className="align-items-center">
              <Col lg="6">
                <div className="info info-horizontal info-default">
                  <div className="icon icon-warning">
                    <i className="tim-icons icon-atom" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Development</h3>
                    <p>
                      Our development team designs and builds solutions that
                      empower businesses to thrive in a multi-cloud environment.
                      From fullstack engineering to CRM integration, our
                      developers ensure that systems are both scalable and
                      responsive, meeting the unique needs of every client.

                    </p>
                  </div>
                </div>
                <div className="info info-horizontal info-default">
                  <div className="icon icon-info">
                    <i className="tim-icons icon-app" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Security</h3>
                    <p>
                      Security is at the core of what we do. Our cybersecurity
                      experts work tirelessly to safeguard digital assets,
                      implementing cutting-edge measures to protect against
                      potential threats. By addressing risks proactively, we
                      help businesses operate with confidence in an increasingly
                      complex digital landscape.

                    </p>
                  </div>
                </div>
                <div className="info info-horizontal info-default">
                  <div className="icon icon-success">
                    <i className="tim-icons icon-bell-55" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Mangement</h3>
                    <p style={{ textAlign: "unset" }}>
                      Our product management team bridges the gap between
                      innovation and strategy. With a focus on optimizing
                      workflows, scaling DevOps, and enhancing user experience,
                      our managers ensure that projects align with business
                      goals, enabling organizations to drive growth and
                      efficiency.

                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="6" xs="10">
                <img
                  alt="..."
                  className="shape"
                  src={require("assets/img/path2.png")}
                />
                <figure className="ie-non-standard-hero-shape">
                  <svg
                    className="injected-svg js-svg-injector"
                    style={{ enableBackground: "new 10 12 878.9 907" }}
                    viewBox="10 12 878.9 907"
                    x="0px"
                    y="0px"
                    xmlSpace="preserve"
                  >
                    <g>
                      <defs>
                        <path
                          d="M329.15,403.44c30.22-62,26.51-223.94,94.06-268.46C479,98.23,560.16,257,700.68,151.61c71.25-53.44,85.54,81,160.38,172.6C1008.5,504.74,881.5,639.14,825.35,686.6c-62.54,52.85-246.14,24.42-386.7,79.28S214.07,834,202.07,702C190.39,573.57,288.69,486.43,329.15,403.44Z"
                          id="firstShape"
                        />
                      </defs>
                      <clipPath id="secondShape">
                        <use
                          style={{ overflow: "visible" }}
                          xlinkHref="#firstShape"
                        />
                      </clipPath>
                      <g clipPath="url(#secondShape)">
                        <image
                          height="900"
                          id="imageShape1"
                          style={{ overflow: "visible" }}
                          transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                          width="900"
                          xlinkHref={require("assets/img/max.jpg")}
                        />
                      </g>
                    </g>
                    <g>
                      <defs>
                        <path
                          d="M337.17,855.62c-7.81-35.46,42.38-43.95,63.66-52.44,24.39-9.74,135.86-48,192.58-52.52,64.22-5.13,190.21-26.84,160.46,35.34-19.76,41.3-51.47,64.52-87.63,62.33-46.36-2.81-101.56,4.39-150.8,44C448.53,946.08,450.93,865,412,868,372.28,871,340.79,872.08,337.17,855.62Z"
                          id="thirdShape"
                        />
                      </defs>
                      <clipPath id="fourthShape">
                        <use
                          style={{ overflow: "visible" }}
                          xlinkHref="#thirdShape"
                        />
                      </clipPath>
                      <g
                        clipPath="url(#fourthShape)"
                        transform="matrix(1 0 0 1 0 0)"
                      >
                        <image
                          height="1000"
                          id="imageShape2"
                          style={{ overflow: "visible" }}
                          transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                          width="900"
                          xlinkHref={require("assets/img/max.jpg")}
                        />
                      </g>
                    </g>
                  </svg>
                </figure>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END FEATURES 6 ********* */}
      </div>{" "}
    </>
  );
}
