import React, {useEffect, useState} from "react";
import {Container, Col, Row, Image} from "react-bootstrap";
import axios from "axios";
import style from './MainRecipeFeed.module.css';
import styles from "../../styles/generic.module.css";
import Rating from "../Rating/Rating";

const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php'

const MainRecipeFeed = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");

  // Gör ett API anrop för att hämta hem ett slumpvalt recept för att sedan lägga in i en array.
  const fetchRandomRecipe = async () => {
    const {data} = await axios.get(API_URL)
    setRecipeData(data)
    setImage(data.meals[0]?.strMealThumb)
    setLoading(false);
  }

  const displayInfo = () => {
    if (!loading) {
      return (
          <div>
            <a className={styles.navFooterText} href={`/recipe?id=${recipeData?.meals[0]?.idMeal}`}>
              <h2>{recipeData?.meals[0]?.strMeal}</h2></a>
            <h5>Category: {recipeData?.meals[0]?.strCategory}</h5>
            <h6>Area: <strong>{recipeData?.meals[0]?.strArea}</strong></h6>
          </div>
      )
    }
  }
  const saveRatingTitle = () => {
    if (!loading) {
      return (recipeData?.meals[0]?.strMeal);
    }
  }

  useEffect(() => {
    fetchRandomRecipe()
  }, [])

  return (
      <Container fluid={"sm"}>
        <div>
          <Row xs={1} md={2}>
            <Col md={"auto"}>
              <Image className={style.image} alt="Image of meal" src={image}/>
            </Col>
            <Col sm={6}>
              <>{displayInfo()}</>
              <Rating recipeTitle={saveRatingTitle()}/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores enim facilis quisquam ut. Aperiam
                doloribus exercitationem illum itaque laudantium neque officia optio qui, temporibus! Cupiditate eos
                laboriosam non possimus quasi.Alias aliquam architecto aspernatur atque dolorem dolores dolorum eligendi
                enim est et eum facere fugiat illum, impedit ipsam iure, maxime porro provident quas tenetur totam vel
                veritatis vero voluptatem voluptates!
              </p>
            </Col>
          </Row>
        </div>
      </Container>
  )
};

export default MainRecipeFeed;