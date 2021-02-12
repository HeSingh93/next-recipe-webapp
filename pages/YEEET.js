import {Container, Row, Col, Card, Image, Nav, Navbar, NavDropdown, ListGroup, Carousel} from 'react-bootstrap';
import styles from '../styles/mainPage.module.css';
import Logo from "../public/js/Logo";

import AppContext from "../Context/ContextIndex";
import React, {useContext} from "react";
import MainRecipeFeed from "../components/MainRecipeFeed/MainRecipeFeed";
import dynamic from "next/dynamic";
import RenderMap from "../components/Map/RenderMap";
import Header from "../components/Header/Header";
import {useSession} from "next-auth/client";

export default function YEET() {
  let {suggestedMeal, setSuggestedMeal} = useContext(AppContext);
  const [session, loading] = useSession();


return (
    <div>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerImage}>
          <Row className={styles.rightAlignment} >
           <Header className={styles.navItemText}/>
          </Row>
          <div className={styles.navContainer}>
            <Row id={"Banner"} className={styles.centerAlignment}><Logo/></Row>
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
      <div>
        <Row>
          <Col>
            <main className={styles.main}>
              <h1 className={styles.title}>Authentication in Next.js app using Next-Auth</h1>
              <div className={styles.user}>
                {loading && <div className={styles.title}>Loading...</div>}
                {session && <> <p style={{ marginBottom: '10px' }}> Welcome, {session.user.name ?? session.user.email}</p> <br />
                  <img src={session.user.image} alt="" className={styles.avatar} />
                </>}
                {!session &&
                <>
                  <p className={styles.title}>Please Sign in</p>
                  <img src="https://cdn.dribbble.com/users/759083/screenshots/6915953/2.gif" alt="" className={styles.avatar} />
                  <p className={styles.credit}>GIF by <a href="https://dribbble.com/shots/6915953-Another-man-down/attachments/6915953-Another-man-down?mode=media">Another man</a> </p>
                </>
                }
              </div>
            </main>

          </Col>
          <Col md={"auto"}>
            <ListGroup>
              <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
              <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
              <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
              <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
            </ListGroup>

            <RenderMap/>

            <Card class={"mx-auto p-3 border "}>
              <footer id={"SUGGESTED"}>
                <div>
                  <Row className={styles.centerAlignment}>
                    <h2 className={` p-3 ${styles.FooterHeader}`}>Suggested recipes</h2>
                  </Row>
                  <Container>
                    <Row>
                      <Col className={styles.card}>
                      </Col>
                    </Row>
                  </Container>
                  <Row className={styles.centerAlignment}>
                    <Nav fill>
                      <Nav.Item><Nav.Link className={styles.navFooterText} href="#Banner">Go to
                        top</Nav.Link></Nav.Item>
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
      >
      <footer className={styles.footer}/>
    </div>
)
}
;
