import React, {useEffect, useState} from "react";
import {Container, Col, Row, Image} from "react-bootstrap";
import axios from "axios";
import style from './MainRecipeFeed.module.css';
import styles from "../../styles/mainPage.module.css";

const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php'

function StarIcon(props) {
  const {fill = 'none'} = props;
  return (
      <svg class={style.star} fill={fill} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
      </svg>
  );
}

function RatingIcon(props) {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;

  const fill = React.useMemo(() => {
    if (hoverRating >= index) {
      return '#F15025';
    } else if (!hoverRating && rating >= index) {
      return '#F15025';
    }
    return 'none';
  }, [rating, hoverRating, index]);
  return (
      <div
          class={style.cursorPointer}
          onMouseEnter={() => onMouseEnter(index)}
          onMouseLeave={() => onMouseLeave()}
          onClick={() => onSaveRating(index)}>
        <StarIcon fill={fill}/>
      </div>
  )
}

const MainRecipeFeed = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index) => {
    setHoverRating(index);
  }
  const onMouseleave = () => {
    setHoverRating(0);
  }
  const onSaveRating = (index) => {
    setRating(index);
    localStorage.setItem("ASDF", index);
  }
  // Gör ett API anrop för att hämta hem ett slumpvalt recept för att sedan lägga in i en array.
  const fetchRandomRecipe = async () => {
    const {data} = await axios.get(API_URL)
    setRecipeData(data)
    setImage(data.meals[0]?.strMealThumb)
    setLoading(false);
  }

  const displayTitle = () => {
    if (!loading) {
      return <a className={styles.navFooterText} href={recipeData?.meals[0]?.strSource}><h2>{recipeData?.meals[0]?.strMeal}</h2></a>
    }
  }

  const displayCategory = () => {
    if (!loading) {
      return <h5>Category: {recipeData?.meals[0]?.strCategory}</h5>
    }
  }

  const areaOfOrigin = () => {
    if (!loading) {
      return <h6>Area: <strong>{recipeData?.meals[0]?.strArea}</strong></h6>
    }
  }

  const linkToRecipe = () => {
    if (!loading) {
      return <p><a href={recipeData?.meals[0]?.strSource}>{recipeData?.meals[0]?.strSource}</a></p>
    }
  }

  useEffect(() => {
    fetchRandomRecipe()
  }, [])

  return (
      <Container fluid={"sm"}>
        <div>
          <Row xs={1} md={2}>
            <Col md={"auto"}>
              <Image className={style.image} alt="Image of meal" src={image}/>
            </Col>
            <Col sm={6}>
              <h2>{displayTitle()}</h2>
              <h5>{displayCategory()}</h5>
              <h6>{areaOfOrigin()}</h6>
              <div className="d-flex">
                {[1, 2, 3, 4, 5].map((index) => {
                  return (
                      <RatingIcon
                          index={index}
                          rating={rating}
                          hoverRating={hoverRating}
                          onMouseEnter={onMouseEnter}
                          onMouseLeave={onMouseleave}
                          onSaveRating={onSaveRating}
                      />
                  )
                })}
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores enim facilis quisquam ut. Aperiam
                doloribus exercitationem illum itaque laudantium neque officia optio qui, temporibus! Cupiditate eos
                laboriosam non possimus quasi.Alias aliquam architecto aspernatur atque dolorem dolores dolorum eligendi
                enim est et eum facere fugiat illum, impedit ipsam iure, maxime porro provident quas tenetur totam vel
                veritatis vero voluptatem voluptates!
              </p>
            </Col>
          </Row>
        </div>
      </Container>
  )
};

export default MainRecipeFeed;