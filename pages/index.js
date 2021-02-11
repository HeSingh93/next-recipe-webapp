import {Container, Row, Col, Nav, Navbar, ListGroup, Card} from 'react-bootstrap';
import styles from '../styles/mainPage.module.css';
import Logo from "../public/js/Logo";
import MainRecipeFeed from "../components/MainRecipeFeed/MainRecipeFeed";
import React, {useContext} from "react";
import SearchFunction from "../components/Search/Search";
import HermanProfile from "../public/js/HermanProfile";
import HampusProfile from "../public/js/HampusProfile";
import Category from "../components/Category/Category";
import SearchItem from "./SearchItem";
import AppContext from "../Context/ContextIndex";

export default function Home() {
  let {query} = useContext(AppContext);

  const mealList = () => {
    if (query.length > 1) {
      return (
          <ListGroup>
            <ListGroup.Item>
              <h1 className={styles.indexTextTitle}>Searched recipes </h1>
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
        <div id="Banner" className={styles.bannerContainer}>
          <div className={styles.bannerImage}>
            <div className={styles.navContainer}>
              <Row className={styles.centerAlignment}><Logo/></Row>
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
                <SearchFunction className={styles.searchBar}/>
              </Row>
            </div>
          </div>
        </div>
        <div>
          <Row noGutters={true}>
            <Col md={3}>
              <Category/>
            </Col>
            <Col md={"auto"}>
              {mealList()}
              <Card class={"mx-auto p-3 border "}>
                <footer id={"CONTACTS"}>
                  <div>
                    <Row className={styles.centerAlignment}>
                      <h2 className={` p-3 ${styles.FooterHeader}`}>CONTACT</h2>
                    </Row>
                    <Container>
                      <Row>
                        <Col className={styles.card} sm={6}>
                          <Card class="mx-auto border p-3 " className={styles.profileCard}>
                            <Nav fill>
                              <div className={"mr-auto"}>
                                <Nav.Item>
                                  <Nav.Link className={styles.navFooterText}
                                            href="https://github.com/HeSingh93">Herman Singh
                                  </Nav.Link>
                                </Nav.Item>
                              </div>
                            </Nav>
                            <Row className={`mr-auto ${styles.card}`}><HermanProfile/></Row>
                            <Card className={"mx-auto p-2"}>
                              <h5 className={`mr-auto ${styles.FooterText}`}> About: </h5>
                              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aspernatur debitis dignissimos ipsam nemo odit optio quod tenetur vero!
                                Assumenda consectetur dolores ipsum laborum nisi quae repudiandae sed sit temporibus
                              </Card.Text>
                            </Card>
                          </Card>
                        </Col>
                        <Col sm={6} className={styles.card}>
                          <Card class="mx-auto border p-3" className={styles.profileCard}>
                            <Nav fill={true}>
                              <div className={styles.centerAlignment}>
                                <Nav.Item>
                                  <Nav.Link className={styles.navFooterText} href="https://github.com/hamnord">Hampus
                                    Nordenstein
                                  </Nav.Link>
                                </Nav.Item>
                              </div>
                            </Nav>
                            <Row className={`mr-auto ${styles.card}`}><HampusProfile/></Row>
                            <Card className={"mx-auto p-2"}>
                              <h5 className={`mr-auto ${styles.FooterText}`}> About: </h5>
                              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aspernatur debitis dignissimos ipsam nemo odit optio quod tenetur vero!
                                Assumenda consectetur dolores ipsum laborum nisi quae repudiandae sed sit temporibus
                              </Card.Text>
                            </Card>
                          </Card>
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
        <footer className={styles.footer}/>
      </div>


  )
}
