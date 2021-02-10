import React from "react";
import {Container, ListGroup, ListGroupItem} from "react-bootstrap";
import style from './Ingredients.module.css'

function Ingredients({ingredients, measure}) {

  console.log("ingredients Ingredients", ingredients)
  console.log("measure Ingredients", measure)

  const mergedArray = measure.map(function (v, i) {
    return [v, ingredients[i]];
  })
  console.log("Merged", mergedArray)

  return (
      <Container>
        <h4 className="text-center"><strong>Ingredienser</strong></h4>
        <div className={style.container}>
          <ListGroup>
            <ListGroupItem><h4><strong>Amount</strong></h4></ListGroupItem>
            {measure.map(amount =>
                <ListGroupItem>
                  {amount}
                </ListGroupItem>
            )}
          </ListGroup>
          <ListGroup>
            <ListGroupItem><h4><strong>Ingredient</strong></h4></ListGroupItem>
            {ingredients.map(ingredient =>
                <ListGroupItem>
                  {ingredient}
                </ListGroupItem>
            )}
          </ListGroup>
        </div>
      </Container>
  )
}

export default Ingredients;