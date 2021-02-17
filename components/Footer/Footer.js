import React from "react";
import {Card, Col, Container, Nav, Row} from "react-bootstrap";
import styles from '../Footer/Footer.module.css'
import genericStyle from '../../styles/generic.module.css'
import HermanProfile from "../../public/js/HermanProfile";
import HampusProfile from "../../public/js/HampusProfile";

export default function Footer() {
  return (
      <Card class={"mx-auto p-3 border "}>
        <footer id={"CONTACTS"}>
          <div>
            <Row className={genericStyle.centerAlignment}>
              <h4 className={` p-3 ${styles.FooterHeader}`}>Meet the developers</h4>
            </Row>
            <Container>
              <Row>
                <Col className={styles.card} sm={6}>
                  <Card class="mx-auto border p-3 " className={styles.profileCard}>
                    <Nav fill={true}>
                      <div className={"mr-auto"}>
                        <Nav.Link className={styles.navFooterText}
                                  href="https://github.com/HeSingh93">Herman Singh
                        </Nav.Link>
                      </div>
                    </Nav>
                    <Row className={`mr-auto ${styles.card}`}><HermanProfile/></Row>
                    <Card className={"mx-auto p-2"}>
                      <h5 className={`mr-auto ${styles.FooterText}`}> About </h5>
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
                      <div className={genericStyle.centerAlignment}>
                        <Nav.Link className={styles.navFooterText} href="https://github.com/hamnord">Hampus
                          Nordenstein
                        </Nav.Link>
                      </div>
                    </Nav>
                    <Row className={`mr-auto ${styles.card}`}><HampusProfile/></Row>
                    <Card className={"mx-auto p-2"}>
                      <h5 className={`mr-auto ${styles.FooterText}`}> About </h5>
                      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aspernatur debitis dignissimos ipsam nemo odit optio quod tenetur vero!
                        Assumenda consectetur dolores ipsum laborum nisi quae repudiandae sed sit temporibus
                      </Card.Text>
                    </Card>
                  </Card>
                </Col>
              </Row>
            </Container>
            <Row className={genericStyle.centerAlignment}>
              <Nav>
                <Nav.Link className={styles.navFooterText} href="#Banner">Go to top</Nav.Link>
              </Nav>
            </Row>
          </div>
        </footer>
      </Card>
  )
}