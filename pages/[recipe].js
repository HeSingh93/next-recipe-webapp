import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Card, Image} from 'react-bootstrap';
import style from "../styles/FoodCard.module.css";
import {BsClockFill, BsFillBarChartFill} from "react-icons/bs";
import {GoChecklist} from "react-icons/go";
import Ingredients from "../components/Ingredients/Ingredients";
import HowToDo from "../components/HowToDo/HowToDo";
import {useRouter} from "next/router";
import axios from "axios";

function Recipe() {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");
  const router = useRouter();
  const stringId = router.query.id
  console.log(stringId)
  const API_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${router.query.id}`

  const fetchRecipeById = async () => {
    const {data} = await axios.get(API_URL);
    setRecipeData(data)
    setImage(data.meals[0]?.strMealThumb);
    setLoading(false);
  }

  const displayTitle = () => {
    if (!loading) {
      return <h1><strong>{recipeData?.meals[0].strMeal}</strong></h1>
    }
  }

  const displayInstructions = () => {
    if (!loading) {
      return recipeData.meals[0].strInstructions
    }
  }

  useEffect(() => {
    fetchRecipeById()
  }, []);

  console.log("RECIPE DATA", recipeData)


  return (
      <Container>
        <Card className="p-1">
          <Row>
            <Col sm={12} md={6} xl={5}>
              <h1 className={style.header}>{displayTitle()}</h1>
              <Container md className={style.card}>
                <Card class="mx-auto w-100"
                      className={style.card}>
                  <Card.Body class="p-1">
                    <Row class="d-flex justify-content-center">
                      <Col>
                        <BsClockFill/>
                        <h6><strong>60 min</strong></h6>
                      </Col>
                      <Col>
                        <BsFillBarChartFill/>
                        <h6><strong>Medium</strong></h6>
                      </Col>
                      <Col>
                        <GoChecklist/>
                        <h6><strong> </strong></h6>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Container>
              <Card.Text className={style.text}>
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
              <Image className={style.image} alt="Image of meal" src={image}/>
            </Col>
          </Row>
        </Card>
        <div className="border p-2">
          <Row>
            <Col>
              <Ingredients/>
            </Col>
            <Col>
              <HowToDo instructions={displayInstructions()}/>
            </Col>
          </Row>
        </div>
      </Container>
  )
}

export default Recipe;