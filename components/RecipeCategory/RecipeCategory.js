import React, {useEffect, useState} from "react";
import {Row, Navbar, Nav, Container, Card, Col} from "react-bootstrap";
import styles from '../../styles/mainPage.module.css'
import Logo from "../../public/js/Logo";
import Category from "../Category/Category";

const RecipeCategory = ({category}) => {
  return (
      <div className={styles.indexContainer}>
        <div className={styles.indexContainer}>
          <div id="Banner" className={styles.bannerContainer}>
            <div className={styles.bannerImage}>
              <div className={styles.navContainer}>
                <Row className={styles.centerAlignment}>
                  <Logo/>
                </Row>
                <Row className={styles.centerAlignment}>
                  <Navbar collapseOnSelect expand={"md | lg | xl"}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
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
        </div>
        <Row className={'center'}>
          <Col xs={2}>
            <Category/>
          </Col>
          <Col md={"auto"}>
            <Container className={styles.botContainer}>
              {category}
            </Container>
          </Col>
          <Col xs={2}>
          </Col>
        </Row>
      </div>
  )
}
export default RecipeCategory;

