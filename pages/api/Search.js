import Axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../Context/ContextIndex";


async function Search (query) {
  let {query,results,setResults,setQuery,message,setMessage, cancel} = useContext(AppContext);
  const searchURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  if(query.length > 2) {
    await Axios.get(searchURL)
        .then((res) => {
          const resultNotFoundMsg = !res.data.meals.length ? 'There are no results, try again' : '';
          console.log(res.data.meals);
          console.log(resultNotFoundMsg);
          results = res.data.meals;
        })
        .catch((err) => {
          if (Axios.isCancel(err) || err) {
            console.log('Failed to load');
            console.log(err);
          }
        })
    console.log(results);
  }
}
export default Search;
