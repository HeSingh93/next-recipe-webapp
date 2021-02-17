import React, {useContext} from "react";
import {Row, Col, ListGroup, Navbar, Nav,} from 'react-bootstrap';
import styles from '../styles/generic.module.css';
import headerStyle from '../components/Header/header.module.css'
import MainRecipeFeed from "../components/MainRecipeFeed/MainRecipeFeed";
import Category from "../components/Category/Category";
import SearchItem from "./SearchItem";
import AppContext from "../Context/ContextIndex";
import { useSession} from 'next-auth/client'
import index from "./index";
import Login from "../components/Login/Login";
import Logo from "../public/js/Logo";
import SearchFunction from "../components/Search/Search";
import searchbarStyle from "../components/Search/Search.module.css";
import genericStyle from "../styles/generic.module.css";

export default function Home() {
  let {query} = useContext(AppContext);
  const [ session, loading ] = useSession()

  if (loading) return null

  if (!loading && !session) return index()

  const mealList = () => {
    if (query.length > 1) {
      return (
          <ListGroup>
            <ListGroup.Item>
              <h1 className={styles.indexTextTitle}>Searched recipes</h1>
              <SearchItem/>
            </ListGroup.Item>
          </ListGroup>
      )
    } else {
      return (
          <ListGroup>
            <ListGroup.Item>
              <h1 className={styles.indexTextTitle}>Recommended recipes </h1>
              <MainRecipeFeed/></ListGroup.Item>
            <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
            <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
            <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
            <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
            <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
            <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
            <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
          </ListGroup>
      )
    }
  }

  return (
      <div className={styles.indexContainer}>
        <div id="Banner" className={headerStyle.bannerContainer}>
          <div className={headerStyle.bannerImage}>
            <Row className={headerStyle.rightAlignment}>
              <Login/>
            </Row>
            <div>
              <Row className={headerStyle.centerAlignment}><Logo/></Row>
              <Row className={headerStyle.centerAlignment}>
                <Navbar collapseOnSelect expand={"sm | md | lg | xl"}>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav.Link className={headerStyle.navItemText} href={session ? "/home" : "/"}>HOME</Nav.Link>
                    <Nav.Link className={headerStyle.navItemText} href="/about">ABOUT</Nav.Link>
                    <Nav.Link className={headerStyle.navItemText} href="/contact">CONTACT</Nav.Link>
                  </Navbar.Collapse>
                </Navbar>
              </Row>
              <Row className={styles.centerAlignment}>
                <SearchFunction className={searchbarStyle.searchBar}/>
              </Row>
            </div>
          </div>
        </div>
        <div>
          <Row noGutters={true}>
            <Col md={12} lg={3}>
              <Category/>
            </Col>
            <Col md={"auto"} lg={6}>
              {mealList()}
            </Col>
            <Col lg={3}>
            </Col>
          </Row>
          <Row className={"d-flex justify-content-center"}>
            <a className={"text-center"} href="#Banner"><h3 className={styles.genericText}> Go to top</h3></a>
          </Row>
        </div>
      </div>
  )
}