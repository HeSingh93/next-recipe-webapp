import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Card, Image, Navbar, NavLink, Carousel, Nav} from 'react-bootstrap';
import style from "../styles/Recipe.module.css";
import {BsClockFill, BsFillBarChartFill} from "react-icons/bs";
import {GoChecklist} from "react-icons/go";
import Ingredients from "../components/Ingredients/Ingredients";
import HowToDo from "../components/HowToDo/HowToDo";
import {useRouter} from "next/router";
import axios from "axios";
import Logo from "../public/js/Logo";
import styles from "../styles/mainPage.module.css";
import SuggestedMeal from "../components/SuggestedMeals/SuggestedMeal";

function Recipe() {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  console.log("Id: ", router.query.id)
  const API_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${router.query.id}`

  const fetchRecipeById = async () => {
    console.log("Making call to: ", `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${router.query.id}`)
    const {data} = await axios.get(API_URL);
    setRecipeData(data)
    setLoading(false);
    console.log("Returned with data", data)
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

  useEffect(() => {
    if (router.query.id !== undefined) {
      fetchRecipeById()
    }
  }, [router]);

  /*
  const array = recipeData.meals?.map(ingredients => ({ value: ingredients.strIngredient1
  }));
  */
  // const arr = [];
  /*
  recipeData.meals?.forEach(ingredient => {
    console.log("Hej hopp", ingredient)
  });
  console.log("Tja!", recipeData.meals[0]);

  if (recipeData.meals !== null) {
    const mealObject = recipeData.meals[0]
    for (const key in mealObject) {
      if (key.startsWith('strIngredient')) {
        console.log(mealObject[key]);
      }
    }
  }
  */
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
          <div id="Banner" className={style.bannerContainer}>
            <div className={style.bannerImage}>
              <div className={style.navContainer}>
                <Row ><Logo/></Row>
                <Row >
                  <Navbar collapseOnSelect expand={"md | lg | xl"}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse>
                      <NavLink className={style.navItemText} href="/">HOME</NavLink>
                      <NavLink className={style.navItemText} href="/">ABOUT</NavLink>
                      <NavLink className={style.navItemText} href="/#CONTACTS">CONTACT</NavLink>
                    </Navbar.Collapse>
                  </Navbar>
                </Row>
              </div>
            </div>
          </div>
        </div>
        <Container>
          <Card className="p-1">
            <Row>
              <Col sm={12} md={6} xl={5}>
                <h1>{displayTitle()}</h1>
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
                          <h6><strong>Ingredients: {filteredIngredientArray.length}</strong></h6>
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
              <Col className="w-100 d-block pl-4">
                <>{displayImage()}</>
              </Col>
            </Row>
          </Card>
          <Container className="border p-2">
            <Row>
              <Col md={"auto"}>
                <Ingredients ingredients={filteredIngredientArray} measure={filteredMeasureArray}/>
              </Col>
              <Col>
                <HowToDo instructions={displayInstructions()}/>
              </Col>
            </Row>
          </Container>
          <Card class={"mx-auto p-3 border "}>
            <footer id={"SUGGESTED"}>
              <div>
                <Row className={styles.centerAlignment}>
                  <h2 className={` p-3 ${styles.FooterHeader}`}>Suggested recipes</h2>
                </Row>
                <Container className={"d-flex justify-content-center"}>
                  <Row>
                    <Col sm={1} lg={12} className={styles.card}>
                      <Carousel interval={6000}>
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
                </Container>
                <Row>
                  <Nav fill>
                    <Nav.Item><Nav.Link className={styles.navFooterText} href="#Banner">Go to top</Nav.Link></Nav.Item>
                  </Nav>
                </Row>
              </div>
            </footer>
          </Card>
        </Container>
      </div>
  )
}

export default Recipe;