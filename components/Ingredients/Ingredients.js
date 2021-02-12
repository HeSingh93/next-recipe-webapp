import React from "react";
import {Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import style from './Ingredients.module.css'

function Ingredients({ingredients, measure}) {

  const mergedArray = measure.map(function (v, i) {
    return [v + " " + ingredients[i]];
  })

  console.log("Merge", mergedArray)

  return (
      <Container className={style.container}>
        <h3 className={style.header}><strong>Ingredients</strong></h3>
        <Row className={style.row}>
          <ListGroup variant="flush" className={style.listgroup}>
            {mergedArray.map(amount =>
                <ListGroupItem >{amount}</ListGroupItem>
            )}
          </ListGroup>
        </Row>
      </Container>
  )
}

export default Ingredients;