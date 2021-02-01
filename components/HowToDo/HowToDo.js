import {Container} from "react-bootstrap";
import React, {useState, useEffect} from "react";
import axios from "axios";

const API_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'

function HowToDo() {
  let [data, setData] = useState([{}]);
  let instructions = "";

  useEffect(() => {
    async function fetchRecipes() {
      const response = await axios.get(API_URL);
      console.log(response);
      data = response.data.meals;
      setData(data);
    }

    fetchRecipes()

  }, []);
  instructions = data[0].strInstructions;
  return (
      <Container>
        <h4><strong>Gör såhär</strong></h4>
        <p>{instructions}</p>
      </Container>
  );
}

export default HowToDo;