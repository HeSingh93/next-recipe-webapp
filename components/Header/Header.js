import React from "react";
import styles from '../Header/Header.module.css'
import {Nav, Navbar, Row} from "react-bootstrap";
import Login from "../Login/Login";
import Logo from "../../public/js/Logo";
import SearchFunction from "../Search/Search";
import searchbarStyle from "../Search/Search.module.css";

export default function Header() {

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
                  <Nav.Link className={styles.navItemText} href="/">HOME</Nav.Link>
                  <Nav.Link className={styles.navItemText} href="/">ABOUT</Nav.Link>
                  <Nav.Link className={styles.navItemText} href="#CONTACTS">CONTACTS</Nav.Link>
                </Navbar.Collapse>
              </Navbar>
            </Row>
            <Row className={styles.centerAlignment}>
              <SearchFunction className={searchbarStyle.searchBar}/>
            </Row>
          </div>
        </div>
      </div>
  )
}