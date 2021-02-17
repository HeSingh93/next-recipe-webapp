import styles from "../components/Header/Header.module.css";
import {Card, Nav, Navbar, Row} from "react-bootstrap";
import Login from "../components/Login/Login";
import Logo from "../public/js/Logo";
import React from "react";
import {useSession} from "next-auth/client";

export default function About () {
  const [ session, loading ] = useSession()

  return (
      <div id="Banner" className={styles.bannerContainer}>
        <div className={styles.bannerImage}>
          <Row className={styles.rightAlignment}>
            <Login/>
          </Row>
          <div>
            <Row className={styles.centerAlignment}><Logo/></Row>
            <Row className={styles.centerAlignment}>
              <Navbar collapseOnSelect expand={"sm | md | lg | xl"}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav.Link className={styles.navItemText} href={session ? "/home" : "/"}>HOME</Nav.Link>

                  <Nav.Link className={styles.navItemText} href="/about">ABOUT</Nav.Link>
                  <Nav.Link className={styles.navItemText} href="/contact">CONTACT</Nav.Link>
                </Navbar.Collapse>
              </Navbar>
            </Row>
          </div>
        </div>
        <Card>
          <p>ABOUT</p>
        </Card>
      </div>
  )
}