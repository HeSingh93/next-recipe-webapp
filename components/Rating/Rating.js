import React, {useState, useEffect} from "react";
import {FaStar} from "react-icons/fa";
import style from './Rating.module.css';

const Rating = (recipeTitle) => {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    const jsonTitle = JSON.stringify(recipeTitle);
    if (rating !== null) {
      localStorage.setItem(jsonTitle, rating);
    }
  }, [recipeTitle, rating])

  return (
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return <label>
            <input className={style.input}
                   type="radio"
                   name="rating"
                   value={ratingValue}
                   onClick={() => setRating(ratingValue)}
            />

            <FaStar className={style.star}
                    color={ratingValue <= (rating) ? "#F15025" : "#E4E5E9"}
                    size={25}
            />
          </label>
        })}
      </div>
  )
}
export default Rating;