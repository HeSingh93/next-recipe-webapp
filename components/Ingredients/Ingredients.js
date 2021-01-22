import React from "react";
import {Container, ListGroup} from "react-bootstrap";

function Ingredients() {
  return (
      <Container>
        <ListGroup>
          <h4><strong>Ingredienser</strong></h4>
          <ListGroup.Item><strong>4 port</strong> ris</ListGroup.Item>
          <ListGroup.Item><strong>1</strong> gullök</ListGroup.Item>
          <ListGroup.Item><strong>1</strong> vitlöksklyfta</ListGroup.Item>
          <ListGroup.Item><strong>1 förp</strong> opanerade sojabitar (á 320 g)</ListGroup.Item>
          <ListGroup.Item><strong>1 msk</strong> olja</ListGroup.Item>
          <ListGroup.Item><strong>1 msk</strong> riven ingefära</ListGroup.Item>
          <ListGroup.Item><strong>500g</strong> krossade tomater</ListGroup.Item>
          <ListGroup.Item><strong>1 dl</strong> vatten</ListGroup.Item>
          <ListGroup.Item><strong>1 förp</strong> tikka masala kryddmix (á 40 g)</ListGroup.Item>
          <ListGroup.Item><strong>1 dl</strong> havregrädde</ListGroup.Item>
        </ListGroup>
      </Container>
  )
}

export default Ingredients;