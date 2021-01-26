import {Container, ListGroup, InputGroup} from "react-bootstrap";
import React, {useState} from "react";
import style from "../../styles/HowToDo.module.css"
import axios from "axios";

function HowToDo({instructions}) {
  let [recipes, setRecipes] = useState([]);
  const [recipeData, setRecipeData] = useState({});
  const axios = require('axios');
  const recipe = {id: [], area: [], category: [], ingredient: [], instructions: [], mealName: [], measure: []};

  async function makeRequest() {
    const config = {
      method: 'get',
      url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'
    }
    let res = await axios(config);
    let data = res.data;
   // recipe.push(res.data);
    console.log("RECIPE DATA: ", data.meals[0].idMeal);
    console.log("AREA", data.meals[0].strArea);
    console.log("STATUSCODE: ", res.status)
    console.log("DATA", data)
    console.log("I HAVE CANCER", recipe);
    console.log ("ID IS: ", recipe.id)
  }

  makeRequest();


  const getRecipes = () => {
    axios
        .get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
        .then(response =>
            response.data.meals.map(recipe => ({
            id: `${recipes.idMeal}`

        }))
        )
  }
  console.log("RECIPES", recipes);
  console.log("KILL ME ",recipe)
  getRecipes();


  return (
      <Container>
        <ListGroup>
          <h4><strong>Gör såhär</strong></h4>
          <ListGroup.Item>
            <InputGroup.Prepend>
              <InputGroup.Checkbox/> Koka riset enligt anvisning på förpackningen.
            </InputGroup.Prepend>
          </ListGroup.Item>
          <ListGroup.Item>Skala och hacka lök och vitlök.</ListGroup.Item>
          <ListGroup.Item>Bryn sojabitarna i olja i en stekpanna eller gryta tills bitarna får färg.
            Tillsätt lök och vitlök och fräs ytterligare några minuter.</ListGroup.Item>
          <ListGroup.Item>Tillsätt ingefära, tomater, vatten och kryddmix. låt koka under lock ca 10 minuter.
            Smaka av med salt.</ListGroup.Item>
          <ListGroup.Item><strong>Till servering:</strong> Servera grytan med kokt ris, naanbröd och
            koriander.</ListGroup.Item>
        </ListGroup>
      </Container>
  )
}

export default HowToDo;