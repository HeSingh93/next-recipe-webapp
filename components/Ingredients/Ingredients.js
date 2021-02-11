import React from "react";
import {Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import style from './Ingredients.module.css'

function Ingredients({ingredients, measure}) {

  const mergedArray = measure.map(function (v, i) {
    return [v, ingredients[i]];
  })

  return (
      <Container className="border">
        <h3 className={style.header}><strong>Ingredients</strong></h3>
        <Row>
          <ListGroup variant="flush" className={style.listgroup}>
            {measure.map(amount =>
                <ListGroupItem className={style.amount}>{amount}</ListGroupItem>
            )}
          </ListGroup>
          <ListGroup variant="flush" className={style.listgroup}>
            {ingredients.map(ingredient =>
                <ListGroupItem className={style.ingredient}>{ingredient}</ListGroupItem>
            )}
          </ListGroup>
        </Row>
      </Container>
  )
}

export default Ingredients;