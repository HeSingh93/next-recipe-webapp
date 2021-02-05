
import React, {useContext, useEffect, useRef, useState} from "react";
import axios from "axios";
import styles from '../../styles/mainPage.module.css'
import {IoSearchCircle} from "react-icons/io5";
import {ImSearch} from "react-icons/im";
import {Nav,Row} from "react-bootstrap";


export default function Search() {
  const [query, setQuery] = useState('');
  let [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const focusSearch = useRef(null);
  /*const searchURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;*/


  const handleSearch = async (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    if(query.length > 2) {
      const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      setRecipes(data);
      setLoading(false);
      console.log("DATA", data);
    }
  }

  const searchMap = () => {
    recipes.map((meals, index) => {
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
    })
  }

  return ( <div>
        <label >
          <Row className={styles.searchBarContainer}>
            <input className={styles.searchBar}
                   type="text"
                   placeholder="Search..."
                   onChange={handleSearch}
                   value={query}
            />
            <Nav.Link  href="/YEEET"> <ImSearch size={30} className={styles.searchBarIcon} /> </Nav.Link>
          </Row>
        </label>
        {searchMap}
  </div>
  )
}
