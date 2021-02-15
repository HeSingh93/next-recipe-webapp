import React from "react";
import {Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import style from './Ingredients.module.css'

function Ingredients({ingredients, measure}) {

  const mergedArray = measure.map(function (v, i) {
    return [v + " " + ingredients[i]];
  })

  return (
      <Container className={style.container}>
        <div>
          <h3 className={style.header}>Ingredients</h3>
        </div>
        <div className="d-flex justify-content-center text-center">
          <Row>
            <ListGroup variant="flush">
              {mergedArray.map(amount =>
                  <ListGroupItem>{amount}</ListGroupItem>
              )}
            </ListGroup>
          </Row>
        </div>
      </Container>
  )
}

export default Ingredients;