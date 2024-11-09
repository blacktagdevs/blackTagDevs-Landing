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
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Carousel,
  CarouselItem,
} from "reactstrap";

// core components
const items = [
  {
    content: (
      <Container>
        <Row>
          <Col md="4">
            <h1 className="title">Charlie Watson</h1>
          </Col>
          <Col md="4">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/charlie.jpg")}
            />
          </Col>
          <Col md="4">
            <div className="wrapper">
              <div className="category">
                <strong>Position:</strong> Artist <br />
                <strong>Experience:</strong> 5 years
              </div>
              <div className="description">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person who expresses him- or herself through a medium". He
                is a descriptive term applied to a person who engages in an
                activity deemed to be an art. An artist also may be defined
                unofficially as "a person who expresses him- or herself through
                a medium".
              </div>
              <div className="footer">
                <Button
                  className="btn-icon btn-round"
                  color="twitter"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="facebook"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="dribbble"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-dribbble" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "0",
  },
  {
    content: (
      <Container>
        <Row>
          <Col md="4">
            <h1 className="title">Quavo Austen</h1>
          </Col>
          <Col md="4">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/tom-klein.jpg")}
            />
          </Col>
          <Col md="4">
            <div className="wrapper">
              <div className="category">
                <strong>Position:</strong> Actor <br />
                <strong>Experience:</strong> 1 year
              </div>
              <div className="description">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person who expresses him- or herself through a medium". He
                is a descriptive term applied to a person who engages in an
                activity deemed to be an art. An artist also may be defined
                unofficially as "a person who expresses him- or herself through
                a medium".
              </div>
              <div className="footer">
                <Button
                  className="btn-icon btn-round"
                  color="twitter"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="facebook"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="dribbble"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-dribbble" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "1",
  },
  {
    content: (
      <Container>
        <Row>
          <Col md="4">
            <h1 className="title">Lucy</h1>
          </Col>
          <Col md="4">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/lucy.jpg")}
            />
          </Col>
          <Col md="4">
            <div className="wrapper">
              <div className="category">
                <strong>Position:</strong> CEO <br />
                <strong>Experience:</strong> 7 years
              </div>
              <div className="description">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person who expresses him- or herself through a medium". He
                is a descriptive term applied to a person who engages in an
                activity deemed to be an art. An artist also may be defined
                unofficially as "a person who expresses him- or herself through
                a medium".
              </div>
              <div className="footer">
                <Button
                  className="btn-icon btn-round"
                  color="twitter"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round ml-1"
                  color="facebook"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  className="btn-icon btn-round ml-1"
                  color="dribbble"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-dribbble" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "2",
  },
];

export default function Teams() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  return (
    <>
      <div className="cd-section" id="teams">
        <div className="team-5">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Team</h2>
                <h4 className="description">
                  A experienced team of engineers that specialize in software,
                  cyber and product development.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Card className="card-profile profile-bg">
                  <CardHeader
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/ben-konfrst.jpg") + ")",
                    }}
                  >
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised"
                          src={require("assets/img/ryan.jpg")}
                        />
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CardTitle tag="h3">Bosun</CardTitle>
                    <h6 className="category text-primary">
                      Senior Fullstack Engineer
                    </h6>
                    <p className="card-description">
                      A seasoned engineer specializing in multi-cloud storage
                      solutions, enhancing scalability and data accessibility
                      across diverse cloud environments.
                    </p>
                  </CardBody>
                  <CardFooter>
                    <div className="d-inline float-right d-md-block">
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="linkedin"
                        href="https://www.linkedin.com/company/blacktagdevs/"
                        target="_blank"

                      >
                        <i className="fab fa-linkedin" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile profile-bg">
                  <CardHeader
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/ruvim-noga.jpg") + ")",
                    }}
                  >
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised"
                          src={require("assets/blacktag/cam.jpeg")}
                        />
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CardTitle tag="h3">Cameron Johnson</CardTitle>
                    <h6 className="category text-primary">
                      Cyber Security Engineer
                    </h6>
                    <p className="card-description">
                      Strengthens digital defenses through strategic security
                      measures, safeguarding critical systems from evolving
                      cyber threats.

                    </p>
                  </CardBody>
                  <CardFooter>
                    <div className="d-inline float-right d-md-block">
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="linkedin"
                        href="https://www.linkedin.com/in/cameron-johnson-904878128/"
                        target="_blank"

                      >
                        <i className="fab fa-linkedin" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile profile-bg">
                  <CardHeader
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/sendra-martorell.jpg") +
                        ")",
                    }}
                  >
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised"
                          src={require("assets/blacktag/daniel.jpeg")}
                        />
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CardTitle tag="h3">Daniel Uyo</CardTitle>
                    <h6 className="category text-primary">Product Manager</h6>
                    <p className="card-description">
                      Drives innovation in DevOps, enabling enterprises to
                      streamline workflows and achieve faster, reliable
                      development cycles.

                    </p>
                  </CardBody>
                  <CardFooter>
                    <div className="d-inline float-right d-md-block">
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="linkedin"
                        href="https://www.linkedin.com/in/daniel-uyo/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile profile-bg">
                  <CardHeader
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/ruvim-noga.jpg") + ")",
                    }}
                  >
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised"
                          src={require("assets/blacktag/jamar.jpeg")}
                        />
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CardTitle tag="h3">Jamar Mitchell</CardTitle>
                    <h6 className="category text-primary">
                      Fullstack Software Engineer
                    </h6>
                    <p className="card-description">
                      Combines front-end creativity with back-end expertise to
                      deliver full-service solutions that optimize CRM
                      technologies for SMBs.

                    </p>
                  </CardBody>
                  <CardFooter>
                    <div className="d-inline float-right d-md-block">
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="linkedin"
                        href="https://www.linkedin.com/in/jamar-mitchell-456b18b5/"
                        target="_blank"

                      >
                        <i className="fab fa-linkedin" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END TEAM 5 ********* */}
      </div>{" "}
    </>
  );
}
