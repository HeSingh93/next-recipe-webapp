import React, {useState} from "react";
import style from '../styles/generic.module.css'
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      !alert("Please fill out all the fields!")
    }
    setValidated(true)
  };

  console.log("https://vignette.wikia.nocookie.net/joke-battles/images/4/40/18360-doge-doge-simple.jpg/revision/latest?cb=20151209161638");

  return (
      <div className={style.indexContainer}>
        <Header/>
        <div>
          <h2 className={style.indexTextTitle}>Contact</h2>
          <Container className={`style.centerAlignment ${"pt-3"}`}>
            <div className={"pb-3"}>
              <Card>
                <Container className={style.centeredContainer}>
                  <h5>Feel free to contact us if you have any questions or if you have any idea on how the website can
                    be
                    improved. We will answer your message as soon as possible.
                  </h5>
                </Container>
                <Container>
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                      <Col>
                        <Form.Group>
                          <Form.Label className={style.text}>Name</Form.Label>
                          <Form.Control required
                                        placeholder="Name"
                          />
                          <Form.Control.Feedback/>
                          <Form.Control.Feedback type="invalid">Please enter a valid name</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="Form.ControlEmail">
                          <Form.Label className={style.text}>E-mail address</Form.Label>
                          <Form.Control required
                                        type="email"
                                        placeholder="name@example.com"
                          />
                          <Form.Control.Feedback/>
                          <Form.Control.Feedback type="invalid">Please enter an valid email</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group controlId="Form.ControlSubject">
                      <Form.Label className={style.text}>Subject</Form.Label>
                      <Form.Control required
                                    type="text"
                                    size={"lg"}
                      />
                      <Form.Control.Feedback/>
                      <Form.Control.Feedback type="invalid">Please enter a subject</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="Form.ControlTextarea">
                      <Form.Label className={style.text}>Description</Form.Label>
                      <Form.Control required
                                    as={"textarea"}
                                    rows={3}
                      />
                      <Form.Control.Feedback/>
                      <Form.Control.Feedback type="invalid">Please describe your issue</Form.Control.Feedback>
                    </Form.Group>
                    <div className={"pb-2"}>
                      <Button size={"lg"} className={style.btn}
                              type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </Container>
              </Card>
            </div>
          </Container>
        </div>
      </div>
  )
}

