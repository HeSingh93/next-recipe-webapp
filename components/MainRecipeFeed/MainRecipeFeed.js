import React, {useEffect, useState} from "react";
import {Container, Col, Row, Image} from "react-bootstrap";
import axios from "axios";

const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php'

const MainRecipeFeed = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");

  const fetchRandomRecipe = async () => {
    const {data} = await axios.get(API_URL)
    setRecipeData(data)
    setImage(data.meals[0]?.strMealThumb)
    setLoading(false);
  }
  const displayData = () => {
    if (!loading) {
      return <h2>{recipeData?.meals[0]?.strMeal}</h2>
    }
  }

  const displayImage = () => {
    if (!loading) {
      return <img src={image} alt="Meal" width={50} height={50}/>
    }
  }

  useEffect(() => {
    fetchRandomRecipe()
  }, [])

  return (
      <Container fluid={"sm"}>
        <div>
          <Row>
            <Image alt="" src={image} width={150} height={150}/>
            <Col sm={6}>
              <h2>{displayData()}</h2>
              <p>Laga en vegetarisk variant på den indiska klassikern chicken tikka masala! Här använder vi sojabitar
                istället för kyckling och gör en kryddig sås baserad på havregrädde smaksatt med lök, vitlök, ingefära,
                krossade tomater och tikka masala-krydda.</p>
            </Col>
          </Row>
        </div>
      </Container>
  )
};

export default MainRecipeFeed;