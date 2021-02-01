import React, {useEffect, useState} from "react";
import {Container, Col, Row, Image} from "react-bootstrap";
import axios from "axios";

import MainRecipePlaceHolder from "../../public/js/MainRecipePlaceholder";

const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php'

const MainRecipeFeed = ({image, title, description, ingredients}) => {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchRandomRecipe = async () => {
    const {data} = await axios.get(API_URL)
    setRecipeData(data)
    setLoading(false);
  }
  const displayData = () => {
    if (!loading) {
      return <h2>{recipeData?.meals[0]?.strMeal}</h2>
    }
  }

  console.log("THUMB", recipeData?.meals[0]?.strMealThumb);

  const displayImage = () => {
    if (!loading) {
      return <Image src={recipeData?.meals[0]?.strMealThumb} alt="meal" />
    }
  }

  useEffect(() => {
    fetchRandomRecipe()
  }, [])

  return (
      <Container fluid={"sm"}>
        <div>
          <Row>
            <Image>{}</Image>
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