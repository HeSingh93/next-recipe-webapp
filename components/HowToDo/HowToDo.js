import React from "react";
import {Container} from "react-bootstrap";
import style from './HowToDo.module.css'

function HowToDo({instructions}) {

  return (
      <Container className={style.container}>
        <h3 className={style.header}>Instructions</h3>
        <p className="text-center">{instructions}</p>
      </Container>
  );
}

export default HowToDo;