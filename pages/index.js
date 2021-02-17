import React, {useContext} from "react";
import {Row, Col, Navbar, Nav, Card, Container,} from 'react-bootstrap';
import styles from '../styles/LoginPage.module.css'
import Logo from "../public/js/Logo";
import {signin, useSession} from "next-auth/client";
import Home from "./home";

export default function index() {
  const [ session, loading ] = useSession()

  if (loading) return null

  if (!loading && session) return Home();

  return (
      <div className={styles.indexContainer}>
      <div id="Banner" className={styles.bannerContainer}>
        <div className={`p-4 ${styles.bannerImage}`}>
          <div>
            <Row className={`p-4 ${styles.centerAlignment}`}><Logo/></Row>
            <Row className={styles.centerAlignment}>
            </Row>
          </div>
        </div>
      </div>
        <Container className={`p-5 ${styles.centerAlignment}`}>
            <Row noGutters={true}>
              <Card className={styles.centerAlignment}>
                <Col className={"p-4"}>
                  <h1 className={`${styles.genericHeader}`}>Welcome to NextRecipe</h1>
                  <h2 className={styles.genericText}>The most exclusive choice of recipes</h2>
                  <h4 className={styles.genericText}>To be able to access these recipes you need to be logged in</h4>
                   <div className={"p-2"}>
                     <Card>
                       <Navbar className={`flex-column`}>
                         <Nav.Link className={styles.navItemText} href={`/api/auth/signin`} onClick={(e) => {
                           e.preventDefault()
                           signin()
                         }}>LOGIN</Nav.Link>
                         <Nav.Link className={styles.navItemText} href="/about">ABOUT</Nav.Link>
                         <Nav.Link className={styles.navItemText} href="/contact">CONTACT</Nav.Link>
                       </Navbar>
                     </Card>
                   </div>
                </Col>
                <Col md={"auto"} lg={6}>
                </Col>
                <Col lg={3}>
                </Col>
              </Card>
            </Row>
        </Container>
        <footer>
          <p className={styles.genericText}><strong>Created by</strong>: Herman Singh & Hampus Nordenstein</p>
        </footer>
      </div>
  )
}
