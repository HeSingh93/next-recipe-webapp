import genericStyles from '../styles/generic.module.css'
import {Card, Container,} from "react-bootstrap";
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function About () {

  return (
      <div>
        <Header/>
        <Container className={"p-2"}>
          <Card className={"p-2 d-flex justify-content-center"}>
            <div>
              <h2 className={`text-center ${genericStyles.genericHeader}`}>About this project</h2>
              <h4 className={`text-center ${genericStyles.genericText}`}>We are two system-developer students from Gotheburg Sweden.<br/>
              We developed this application as a school project on our last term of vocational university.<br/></h4>
              <Footer/>
            </div>
          </Card>
        </Container>
      </div>
  )
}