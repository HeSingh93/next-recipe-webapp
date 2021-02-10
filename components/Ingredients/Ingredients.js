import React from "react";
import {Col, Container, ListGroup, ListGroupItem, Row, Table} from "react-bootstrap";
import style from './Ingredients.module.css'

function Ingredients({ingredients, measure}) {

  console.log("ingredients Ingredients", ingredients)
  console.log("measure Ingredients", measure)

  const mergedArray = measure.map(function (v, i) {
    return [v, ingredients[i]];
  })
  console.log("Merged", mergedArray)

  return (
      <Container >
        <h4 className="text-center"><strong>Ingredients</strong></h4>
        <Row>
          <ListGroup variant="flush">
            {measure.map(amount =>
                <ListGroupItem className={style.amount}>{amount}</ListGroupItem>
            )}
          </ListGroup>
          <ListGroup variant="flush">
            {ingredients.map(ingredient =>
                <ListGroupItem className={style.ingredient}>{ingredient}</ListGroupItem>
            )}
          </ListGroup>
        </Row>
      </Container>
  )
}

export default Ingredients;