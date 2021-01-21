import {Container, Row, Col, Image, Nav} from 'react-bootstrap';
import styles from '../styles/Home.module.css';

export default function YEET() {

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerImage}>
        <div className={styles.navContainer}>
      <Row className="justify-content-md-center">
        <Nav justify variant="tabs" >
          <Nav.Item><Nav.Link className={styles.navItemText} href="/">HOME</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link className={styles.navItemText}href="/">ABOUT</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link className={styles.navItemText}href="#CONTACTS">CONTACTS</Nav.Link></Nav.Item>
        </Nav>
      </Row>
      <Row className="justify-content-center p-3">
        <div className={styles.searchBarContainer}>
        <input className={"form-control-sm "} type="text" placeholder="Search..."/>
        </div>
      </Row>
        </div>
      </div>
    </div>

  )
};
