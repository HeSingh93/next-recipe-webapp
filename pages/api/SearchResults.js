import React, {useContext, useState} from 'react';
import AppContext from "../../Context/ContextIndex";
import styles from '../../styles/Search.module.css'

export default function SearchResults() {
  const {results} = useContext(AppContext);

      return (
    <div>
    {results.map((result) => {
      return (
        <a key={result.idMeal} href={result.strMealThumb} className={styles.resultItems}>
          <h6 className={styles.imageUsername}>{result.strMeal}</h6>
          <div className={styles.imageUsername}>
            <img className={styles.image} src={result.strMealThumb} alt={result.strMeal}/>

          </div>
        </a>
        );
    })}
    </div>
      );
};