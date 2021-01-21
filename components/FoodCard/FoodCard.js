import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import FoodPlaceHolder from "../../public/js/FoodPlaceholder";

function FoodCard() {
    return (
        <Container>
            <Card>
                <Row>
                    <Col>
                        <h1><strong>Vegetarisk tikka masala med havregrädde</strong></h1>
                        <Card.Text class="center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Animi aspernatur, beatae corporis culpa delectus dolorum explicabo illo incidunt labore non
                            numquam officia praesentium
                            quidem quisquam quos recusandae repellendus vel voluptates.
                            A architecto deserunt, eos nobis quia repellendus. Cumque exercitationem explicabo facilis
                            in ipsa nam quasi
                            quibusdam voluptatibus! Adipisci assumenda consectetur, error ex labore laborum perferendis
                            similique.
                            Eveniet iure optio tempore?
                        </Card.Text>
                    </Col>
                    <Col>
                        <FoodPlaceHolder/>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default FoodCard;