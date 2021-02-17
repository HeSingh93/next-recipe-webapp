import React, {useContext} from "react";
import {Row, Col, ListGroup, Navbar, Nav, Card,} from 'react-bootstrap';
import genericStyles from '../styles/generic.module.css';
import styles from '../styles/LoginPage.module.css'
import Logo from "../public/js/Logo";
import {signin, useSession} from "next-auth/client";
import Unauthenticated from "../components/Login/Unauthenticated";
import Home from "./home";

export default function index() {
  const [ session, loading ] = useSession()

  if (loading) return null

  if (!loading && session) return Home();

  return (
      <div className={genericStyles.indexContainer}>
      <div id="Banner" className={styles.bannerContainer}>
        <div className={`p-4 ${styles.bannerImage}`}>
          <div>
            <Row className={`p-4 ${styles.centerAlignment}`}><Logo/></Row>
            <Row className={styles.centerAlignment}>
            </Row>
          </div>
        </div>
      </div>
        <div className={styles.centerAlignment}>
          <Row noGutters={true}>
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
            <Col md={"auto"} lg={6}>

            </Col>
            <Col lg={3}>
            </Col>
          </Row>
        </div>
      </div>
  )
}
