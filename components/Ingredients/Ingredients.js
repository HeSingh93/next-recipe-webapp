import React from "react";
import {Container, ListGroup} from "react-bootstrap";

function Ingredients({item}) {
  return (
      <Container>
        <ListGroup>
          <h4><strong>Ingredienser</strong></h4>
          <ListGroup.Item><strong>4 port</strong> ris</ListGroup.Item>
        </ListGroup>
      </Container>
  )
}

export default Ingredients;