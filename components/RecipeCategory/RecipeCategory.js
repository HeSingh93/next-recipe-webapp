import React from "react";
import {Row, Navbar, Nav, Container, Col} from "react-bootstrap";
import styles from '../../styles/generic.module.css'
import Logo from "../../public/js/Logo";
import Category from "../Category/Category";
import Header from "../Header/Header";

const RecipeCategory = ({category}) => {
  return (
      <div className={styles.indexContainer}>
   <Header/>
        <Row noGutters={true}>
          <Col>
            <Category/>
          </Col>
          <Col md={"auto"}>
            <Container className={styles.botContainer}>
              {category}
            </Container>
          </Col>
          <Col xs={2}>
          </Col>
        </Row>
      </div>
  )
}
export default RecipeCategory;

