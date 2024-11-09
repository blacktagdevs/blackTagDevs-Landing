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
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

export default function ContactUs() {
  // const [emailContact1Focus, setEmailContact1Focus] = React.useState(false);
  const [firstNameContact1Focus, setFirstNameContact1Focus] =
    React.useState(false);
  const [lastNameContact1Focus, setLastNameContact1Focus] =
    React.useState(false);
  const [companyFocus, setCompanyFocus] = React.useState(false);

  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [body, setBody] = React.useState("");
  // const [email, setEmail] = React.useState("");

  //TODO
  const sendEmail = () => {
    window.open(
      `mailto:blacktagdevs@gmail.com?subject=Service Inquiry: ${firstname} ${lastname} | ${company} &body= Dear BlackTagDevs, \n${body} \n Sincerely,\n ${firstname} ${lastname}`
    );
  };

  return (
    <>
      <div className="cd-section" id="contactus">
        {/* ********* CONTACT US 1 ********* */}
        <div
          className="contactus-1 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/contact1.jpg") + ")",
          }}
        >
          <Container>
            <Row>
              <Col md="5">
                <h2 className="title">Get in Touch</h2>
                <h4 className="description">
                  You need more information? Feel free to reach out to us, we
                  would love to hear from you!
                </h4>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Location</h4>
                    <p className="description">
                      Atlanta,GA <br />
                      United States
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" md="5">
                <Card className="card-contact card-raised">
                  <Form id="contact-form-2" method="post" role="form">
                    <CardHeader className="text-center">
                      <CardTitle tag="h4">Contact Us</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>First name</label>
                            <InputGroup
                              className={classnames({
                                "input-group-focus": firstNameContact1Focus,
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-single-02" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="First Name..."
                                placeholder="First Name..."
                                type="text"
                                onInput={(e) => setFirstName(e.target.value)}
                                onFocus={(e) => setFirstNameContact1Focus(true)}
                                onBlur={(e) => setFirstNameContact1Focus(false)}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col className="pl-2" md="6">
                          <FormGroup>
                            <label>Last name</label>
                            <InputGroup
                              className={classnames({
                                "input-group-focus": lastNameContact1Focus,
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-caps-small" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="Last Name..."
                                placeholder="Last Name..."
                                type="text"
                                onInput={(e) => setLastName(e.target.value)}
                                onFocus={(e) => setLastNameContact1Focus(true)}
                                onBlur={(e) => setLastNameContact1Focus(false)}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pl-2" md="6">
                          <FormGroup>
                            <label>Company Name</label>
                            <InputGroup
                              className={classnames({
                                "input-group-focus": companyFocus,
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-caps-small" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="Company Name..."
                                placeholder="Company Name..."
                                type="text"
                                onInput={(e) => setCompany(e.target.value)}
                                onFocus={(e) => setCompanyFocus(true)}
                                onBlur={(e) => setCompanyFocus(false)}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      {/* <Row>
                        <Col md="6">
                          <label>First name</label>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": firstNameContact1Focus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="First Name..."
                              placeholder="First Name..."
                              type="text"
                              onFocus={(e) => setFirstNameContact1Focus(true)}
                              onBlur={(e) => setFirstNameContact1Focus(false)}
                            />
                          </InputGroup>
                        </Col>
                        <Col className="pl-2" md="6">
                          <FormGroup>
                            <label>Last name</label>
                            <InputGroup
                              className={classnames({
                                "input-group-focus": lastNameContact1Focus,
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-caps-small" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="Last Name..."
                                placeholder="Last Name..."
                                type="text"
                                onFocus={(e) => setLastNameContact1Focus(true)}
                                onBlur={(e) => setLastNameContact1Focus(false)}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <label>Email address</label>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": emailContact1Focus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email Here..."
                            type="text"
                            onFocus={(e) => setEmailContact1Focus(true)}
                            onBlur={(e) => setEmailContact1Focus(false)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label>Your message</label>
                        <Input
                          id="message-2"
                          name="message"
                          rows="6"
                          type="textarea"
                        />
                      </FormGroup> */}
                      <FormGroup>
                        <label>Your message</label>
                        <Input
                          id="message-2"
                          name="message"
                          rows="6"
                          type="textarea"
                          onInput={(e) => setBody(e.target.value)}
                        />
                      </FormGroup>{" "}
                      <Row>
                        <Col
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <Button
                            className="btn-round pull-center"
                            color="primary"
                            onClick={() => sendEmail()}
                          >
                            Email Us
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END CONTACT US 1 ********* */}
      </div>{" "}
    </>
  );
}
