import styles from '../../styles/generic.module.css'
import loginStyle from './Login.module.css'
import React from "react";
import {Card, Container} from "react-bootstrap";

export default function Unauthenticated() {
  return (
      <Container className={`p-3 ${styles.centerAlignment}`}>
        <div className={`flex-column justify-content-center`}>
          <p className={loginStyle.header}>Access Denied</p>
          <Card>
            <a className={`p-2 ${loginStyle.navItemText}`} href="/">RETURN TO FRONTPAGE</a>
          </Card>
        </div>
      </Container>
  )
}