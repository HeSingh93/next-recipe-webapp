import React, {useContext} from "react";
import axios from "axios";
import styles from '../Search/Search.module.css'
import {Row} from "react-bootstrap";
import AppContext from "../../Context/ContextIndex";

export default function Search() {
  let {setRecipes, query, setQuery} = useContext(AppContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    if (query.length > 2) {
      const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      setRecipes(data);
    } else {
      setRecipes([]);
    }
  }

  return (
      <div>
        <label>
          <Row className={styles.searchBarContainer}>
            <input className={styles.searchBar}
                   type="text"
                   placeholder="Search..."
                   onChange={handleSearch}
                   value={query}
            />
          </Row>
        </label>
      </div>
  )
}
