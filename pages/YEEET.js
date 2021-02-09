import {Container, Row, Col, Card, Image, Nav, Navbar, NavDropdown, ListGroup, Carousel} from 'react-bootstrap';
import styles from '../styles/mainPage.module.css';
import Logo from "../public/js/Logo";

import AppContext from "../Context/ContextIndex";
import React, {useContext} from "react";
import MainRecipeFeed from "../components/MainRecipeFeed/MainRecipeFeed";
import SuggestedMeal from "../components/SuggestedMeals/SuggestedMeal";

export default function YEET() {
  let {suggestedMeal, setSuggestedMeal} = useContext(AppContext);

  return (
      <div>
    <div className={styles.bannerContainer}>
      <div className={styles.bannerImage}>
        <div className={styles.navContainer}>
          <Row id={"Banner"} className={styles.centerAlignment}><Logo/></Row>
      <Row className={styles.centerAlignment}>
        <Navbar collapseOnSelect expand={"md | lg | xl"}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav.Link className={styles.navItemText} href="/">HOME</Nav.Link>
          <Nav.Link className={styles.navItemText} href="/">ABOUT</Nav.Link>
          <Nav.Link className={styles.navItemText} href="#CONTACTS">CONTACTS</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </Row>
          <Row className={styles.centerAlignment}>
          </Row>
        </div>
    </div>
    </div>
        <div>
          <Row>
            <Col>

            </Col>
            <Col md={"auto"}>
              <ListGroup>
                <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
                <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
                <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
                <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
              </ListGroup>

              <Card class={"mx-auto p-3 border "}>
                <footer id={"SUGGESTED"}>
                  <div>
                    <Row className={styles.centerAlignment}>
                      <h2 className={` p-3 ${styles.FooterHeader}`}>Suggested recipes</h2>
                    </Row>
                    <Container>
                      <Row >
                        <Col className={styles.card}>
                       <Carousel interval={6000}>
                         <Carousel.Item>
                           <SuggestedMeal/>
                         </Carousel.Item>
                         <Carousel.Item>
                           <SuggestedMeal/>
                         </Carousel.Item>
                         <Carousel.Item>
                           <SuggestedMeal/>
                         </Carousel.Item>
                       </Carousel>
                        </Col>
                      </Row>
                    </Container>
                    <Row className={styles.centerAlignment}>
                      <Nav fill>
                        <Nav.Item><Nav.Link className={styles.navFooterText} href="#Banner">Go to top</Nav.Link></Nav.Item>
                      </Nav>
                    </Row>
                  </div>
                </footer>
              </Card>

            </Col>
            <Col>
            </Col>

          </Row>
        </div>
        <footer className={styles.footer}/>
      </div>
  )
};
