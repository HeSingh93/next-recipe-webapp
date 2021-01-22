import {Container, Row, Col, Image, Nav} from 'react-bootstrap';
import styles from '../styles/mainPage.module.css';

export default function YEET() {

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerImage}>
        <div className={styles.navContainer}>
      <Row className="justify-content-md-center">
        <Nav justify >
          <Nav.Item><Nav.Link className={styles.navItemText} href="/">HOME</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link className={styles.navItemText} href="/">ABOUT</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link className={styles.navItemText} href="#CONTACTS">CONTACTS</Nav.Link></Nav.Item>
        </Nav>
      </Row>
      <Row className="justify-content-md-center p-3">
        <input className={styles.searchBar} type="search" placeholder=" Search..."/>
      </Row>
        </div>
    </div>
    </div>
  )
};
