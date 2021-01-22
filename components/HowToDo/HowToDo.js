import {Container, ListGroup, InputGroup} from "react-bootstrap";
import React from "react";
import style from "../../styles/HowToDo.module.css"

function HowToDo() {
  return (
      <Container>
        <ListGroup>
          <h4><strong>Gör såhär</strong></h4>
          <ListGroup.Item>
            <InputGroup.Prepend>
              <InputGroup.Checkbox/> Koka riset enligt anvisning på förpackningen.
            </InputGroup.Prepend>
          </ListGroup.Item>
          <ListGroup.Item>Skala och hacka lök och vitlök.</ListGroup.Item>
          <ListGroup.Item>Bryn sojabitarna i olja i en stekpanna eller gryta tills bitarna får färg.
            Tillsätt lök och vitlök och fräs ytterligare några minuter.</ListGroup.Item>
          <ListGroup.Item>Tillsätt ingefära, tomater, vatten och kryddmix. låt koka under lock ca 10 minuter.
            Smaka av med salt.</ListGroup.Item>
          <ListGroup.Item><strong>Till servering:</strong> Servera grytan med kokt ris, naanbröd och
            koriander.</ListGroup.Item>
        </ListGroup>
      </Container>
  )
}

export default HowToDo;