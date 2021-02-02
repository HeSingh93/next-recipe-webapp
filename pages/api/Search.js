import Axios from "axios";
import React, {useContext, useEffect, useRef, useState} from "react";
import AppContext from "../../Context/ContextIndex";
import {Form, Jumbotron, ListGroup, Row} from "react-bootstrap";
import axios from "axios";
import searchStyle from "../../styles/Search.module.css";


export default function Search() {
  const [query, setQuery] = useState('');
  let [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const focusSearch = useRef(null);
  /*const searchURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;*/


  const handleSearch = async (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    setRecipes(data);
    setLoading(false);
    console.log("DATA",data);
  }

  if(query.length > 2) {
    recipes = recipes.filter((i) => {
      return i.strMeal.match(query);
    })
  }

  return ( <div>
        <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            value={query}
        />
        {recipes.map((meals, index) => {
          console.log("Meal Name", strMeal);
          console.log("MEALS", meals);
          return (
              <div key={index}>
                <ul>
                  <li>
                    Meal Name:  {meals.strMeal}
                  </li>
                </ul>
              </div>
          );
        })}
  </div>
  )
}
