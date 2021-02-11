import {Container} from "react-bootstrap";
import React from "react";
import style from './HowToDo.module.css'

function HowToDo({instructions}) {

  return (
      <Container className={style.container}>
        <h3 className={style.header}><strong>Instructions</strong></h3>
        <p>{instructions}</p>
      </Container>
  );
}

export default HowToDo;