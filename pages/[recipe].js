import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import axios from "axios";
import {Container, Row, Col, Card, Image, Navbar, NavLink, Carousel} from 'react-bootstrap';
import {BsClockFill, BsFillBarChartFill} from "react-icons/bs";
import {GoChecklist} from "react-icons/go";
import style from "../styles/Recipe.module.css";
import styles from "../styles/generic.module.css";
import Ingredients from "../components/Ingredients/Ingredients";
import HowToDo from "../components/HowToDo/HowToDo";
import Logo from "../public/js/Logo";
import SuggestedMeal from "../components/SuggestedMeals/SuggestedMeal";
import Login from "../components/Login/Login";
import Header from "../components/Header/Header";

function Recipe() {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const API_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${router.query.id}`
  const fetchRecipeById = async () => {
    const {data} = await axios.get(API_URL);
    setRecipeData(data)
    setLoading(false);
  }

  const displayTitle = () => {
    if (!loading) {
      return <h1 className={style.header}>{recipeData?.meals[0].strMeal}</h1>
    }
  }

  const displayInstructions = () => {
    if (!loading) {
      return recipeData.meals[0].strInstructions
    }
  }

  const displayImage = () => {
    if (!loading) {
      return <Image className={style.image} fluid alt="image of meal" src={recipeData.meals[0].strMealThumb}/>
    }
  }

  const displayArea = () => {
    if (!loading) {
      const MAP_URL = `https://maps.google.com/maps?q=${recipeData?.meals[0]?.strArea}&t=&z=13&ie=UTF8&iwloc=&output=embed`
      return (
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe width="325" height="226" id="gmap_canvas"
                      src={MAP_URL} frameBorder="0"
                      scrolling="no" marginHeight="0" marginWidth="0"/>
            </div>
          </div>
      )
    }
  }

  useEffect(() => {
    if (router.query.id !== undefined) {
      fetchRecipeById()
    }
  }, [router]);

  const ingredientArray = [];
  recipeData.meals?.map(ingredients => {
    ingredientArray.push(
        ingredients.strIngredient1,
        ingredients.strIngredient2,
        ingredients.strIngredient3,
        ingredients.strIngredient4,
        ingredients.strIngredient5,
        ingredients.strIngredient6,
        ingredients.strIngredient7,
        ingredients.strIngredient8,
        ingredients.strIngredient9,
        ingredients.strIngredient10,
        ingredients.strIngredient11,
        ingredients.strIngredient12,
        ingredients.strIngredient13,
        ingredients.strIngredient14,
        ingredients.strIngredient15,
        ingredients.strIngredient16,
        ingredients.strIngredient17,
        ingredients.strIngredient18,
        ingredients.strIngredient19,
        ingredients.strIngredient20
    )
  });

  const filteredIngredientArray = ingredientArray.filter(function (el) {
    return el != null && el !== "" && el !== " ";
  })

  const measureArray = [];
  recipeData.meals?.map(measure => {
    measureArray.push(
        measure.strMeasure1,
        measure.strMeasure2,
        measure.strMeasure3,
        measure.strMeasure4,
        measure.strMeasure5,
        measure.strMeasure6,
        measure.strMeasure7,
        measure.strMeasure8,
        measure.strMeasure9,
        measure.strMeasure10,
        measure.strMeasure11,
        measure.strMeasure12,
        measure.strMeasure13,
        measure.strMeasure14,
        measure.strMeasure15,
        measure.strMeasure16,
        measure.strMeasure17,
        measure.strMeasure18,
        measure.strMeasure19,
        measure.strMeasure20,
    )
  });

  const filteredMeasureArray = measureArray.filter(function (el) {
    return el !== "" && el !== null && el !== " ";
  })

  return (
      <div>
        <div className={style.indexContainer}>
          <Header/>
        </div>
        <Container>
          <Card className="p-1">
            <Row>
              <Col sm={12} md={6} xl={5}>
                <h1>{displayTitle()}</h1>
                <Container className={style.card}>
                  <Card.Body>
                    <Row class="d-flex justify-content-center">
                      <Col className="text-center">
                        <BsClockFill/>
                        <h6><strong>60 min</strong></h6>
                      </Col>
                      <Col className="text-center">
                        <BsFillBarChartFill/>
                        <h6><strong>Medium</strong></h6>
                      </Col>
                      <Col className="text-center">
                        <GoChecklist/>
                        <h6><strong>Ingredients: {filteredIngredientArray.length}</strong></h6>
                      </Col>
                    </Row>
                  </Card.Body>
                </Container>
                <Card.Text className={style.text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi aspernatur, beatae corporis culpa delectus dolorum explicabo illo incidunt labore non
                  numquam officia praesentium
                  quidem quisquam quos recusandae repellendus vel voluptates.
                  A architecto deserunt, eos nobis quia repellendus. Cumque exercitationem explicabo facilis
                  in ipsa nam quasi
                  quibusdam voluptatibus!
                </Card.Text>
                <Col className={"d-flex justify-content-center"}>
                  <div>{displayArea()}</div>
                </Col>
              </Col>
              <Col className="w-100 d-block pl-4">
                <>{displayImage()}</>
              </Col>
            </Row>
          </Card>
          <Container className="border p-2">
            <Row>
              <Col>
                <Ingredients ingredients={filteredIngredientArray} measure={filteredMeasureArray}/>
              </Col>
              <Col>
                <HowToDo instructions={displayInstructions()}/>
              </Col>
            </Row>
          </Container>
          <Card class={"mx-auto pl-4 border"}>
            <footer id={"SUGGESTED"}>
              <h2 className={` p-3 ${styles.genericHeader} ${styles.centerAlignment} ${styles.suggested}`}>Suggested
                recipes</h2>
              <div>
                <Row className={styles.suggested}>
                  <Col>
                    <Carousel interval={4000}>
                      <Carousel.Item>
                        <SuggestedMeal/>
                      </Carousel.Item>
                      <Carousel.Item>
                        <SuggestedMeal/>
                      </Carousel.Item>
                      <Carousel.Item>
                        <SuggestedMeal/>
                      </Carousel.Item>
                    </Carousel>
                  </Col>
                </Row>
                <Row className={"d-flex justify-content-center"}>
                  <a className={"text-center"} href="#Banner"><h3 className={styles.genericText}> Go to top</h3></a>
                </Row>
              </div>
            </footer>
          </Card>
        </Container>
      </div>
  )
}

export default Recipe;