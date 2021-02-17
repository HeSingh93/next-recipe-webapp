import React from "react";
import styles from '../Header/Header.module.css'
import {Nav, Navbar, Row} from "react-bootstrap";
import Login from "../Login/Login";
import Logo from "../../public/js/Logo";
import SearchFunction from "../Search/Search";
import searchbarStyle from "../Search/Search.module.css";
import {useSession} from "next-auth/client";

export default function Header() {
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
            <Row className={styles.centerAlignment}>
              <SearchFunction className={searchbarStyle.searchBar}/>
            </Row>
          </div>
        </div>
      </div>
  )
}