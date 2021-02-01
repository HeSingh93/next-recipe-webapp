import {Container, Row, Col,Card, Image, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import styles from '../styles/mainPage.module.css';
import Logo from "../public/js/Logo";
import HampusProfile from "../public/js/HampusProfile";
import HermanProfile from "../public/js/HermanProfile";
import AppContext from "../Context/ContextIndex";
import {useContext} from "react";

export default function YEET() {

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
        <input className={styles.searchBar} type="search" placeholder=" Search..."/>
      </Row>
        </div>
    </div>
    </div>
        <Card class={"mx-auto w-100"}>
      <footer id={"CONTACTS"}>
        <div>
          <Row className={styles.centerAlignment}>
            <h2 className={styles.FooterHeader}>CONTACTS</h2>
          </Row>
          <Container>
          <Row className={styles.centerAlignment}>
              <Col className={styles.card}>
                <Card className={styles.hermanCard}>
                <Nav fill>
                  <Nav.Item><Nav.Link className={styles.navFooterText} href="https://github.com/HeSingh93">Herman Singh</Nav.Link></Nav.Item>
                </Nav>
                <Row className={styles.card}><HermanProfile/></Row>
                <Card className={styles.card}>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur debitis dignissimos ipsam nemo odit optio quod tenetur vero!
                Assumenda consectetur dolores ipsum laborum nisi quae repudiandae sed sit temporibus
              </Card.Text>
                </Card>
                </Card>
              </Col>

              <Col>
                <Card className={styles.hampusCard}>
                <Nav fill>
                  <Nav.Item><Nav.Link className={styles.navFooterText} href="https://github.com/hamnord">Hampus Nordenstein</Nav.Link></Nav.Item>
                </Nav>
                <Row className={styles.card}><HampusProfile/></Row>
                <Card className={styles.card}>
                <Card.Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ab cum dolorum eveniet excepturi incidunt nam nemo perspiciatis ratione sapiente sequi!
                  Expedita illum minus natus nulla ut. Deleniti doloremque libero unde!
                </Card.Text>
              </Card>
                </Card>
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
      </div>
  )
};
