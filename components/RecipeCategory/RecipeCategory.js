import React, {useEffect, useState} from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import axios from "axios";

const RecipeCategory = ({category, id}) => {
 /*
  console.log ("ID FROM BEEF", id)
  console.log ("ONE BEEF", id[0].id)
  const [mealData, setMealData] = useState([]);
  const fetchMealById = async () => {
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    setMealData(data)
    console.log("RESPONSE",data)
  }

  useEffect(() => {
    fetchMealById()
  }, [])
*/
  return (
      <Container>
        <Col>
          {category}
        </Col>
      </Container>
  )
}

export default RecipeCategory;

