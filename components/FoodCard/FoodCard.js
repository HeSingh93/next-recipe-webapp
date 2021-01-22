import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import FoodPlaceHolder from "../../public/js/FoodPlaceholder";
import style from "../../styles/FoodCard.module.css";
import {BsClockFill, BsFillBarChartFill} from "react-icons/bs";
import {GoChecklist} from "react-icons/go";

function FoodCard({foodTitle, description, time, difficulty, ingredients}) {
    return (
        <Container>
            <Card>
                <Row>
                    <Col sm={12} md={6} xl={5}>
                        <h1 className={style.header}>{foodTitle} Vegetarisk tikka masala</h1>
                        <Container md className={style.card}>
                            <Card class="mx-auto w-100"
                                  className={style.card}>
                                <Card.Body class="p-1">
                                    <Row class="d-flex justify-content-center">
                                        <Col >
                                            <BsClockFill />
                                            <h6><strong>{time}</strong></h6>
                                        </Col>
                                        <Col >
                                            <BsFillBarChartFill />
                                            <h6><strong>{difficulty}</strong></h6>
                                        </Col>
                                        <Col >
                                            <GoChecklist />
                                            <h6><strong>{ingredients}</strong></h6>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Container>
                        <Card.Text className={style.text}>
                            {description}
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