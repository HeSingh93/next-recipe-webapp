import {Container, Row, Col, Image, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import styles from '../styles/mainPage.module.css';
import Logo from "../public/js/Logo";

export default function YEET() {

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerImage}>
        <div className={styles.navContainer}>
          <Row className={styles.centerAlignment}><Logo/></Row>
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
  )
};
