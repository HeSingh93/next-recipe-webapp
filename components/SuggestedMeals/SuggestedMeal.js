import React, {useContext, useEffect, useState} from "react";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import style from "../MainRecipeFeed/MainRecipeFeed.module.css";
import styles from "../../styles/generic.module.css";
import axios from "axios";
import AppContext from "../../Context/ContextIndex";

export default function SuggestedMeal() {
  let {suggestedMeal, setSuggestedMeal} = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [idMeal, setIdMeal] = useState("");
  const [strCategory, setStrCategory] = useState("");
  const [strArea, setStrArea] = useState("");
  const [strMeal, setStrMeal] = useState("");
  const [image, setImage] = useState("");

  const fetchSuggestedMeal = async () => {
    const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    setSuggestedMeal(data)
    setImage(data.meals[0]?.strMealThumb);
    setStrMeal(data.meals[0]?.strMeal);
    setStrCategory(data.meals[0]?.strCategory);
    setStrArea(data.meals[0]?.strArea)
    setIdMeal(data.meals[0]?.idMeal)
    setLoading(false)
    console.log("SUGGEST ARRAY", suggestedMeal.meals)
    console.log("DATA", data)
  }

  const displayInfo = () => {
    if (!loading) {
      return (
          <div>
            <a className={styles.genericText} href={`/recipe?id=${idMeal}`}><h2>{strMeal}</h2></a>
            <h5>Category: {strCategory}</h5>
            <h6>Area: <strong>{strArea}</strong></h6>
          </div>
      )
    }
  }
  useEffect(() => {
    fetchSuggestedMeal();
  }, [])

  return (
      <Container className={style.container}>
        <Card>
          <div>
            <Row xs={12} sm={"auto"} md={2}>
              <Col md={"auto"}>
                <Image className={style.image} alt="Image of meal" src={image}/>
              </Col>
              <Col xs={"auto"} sm={4}>
                <>{displayInfo()}</>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores enim facilis quisquam ut. Aperiam
                  doloribus exercitationem illum itaque laudantium neque officia optio qui, temporibus! Cupiditate eos
                  laboriosam non possimus quasi.Alias aliquam architecto aspernatur atque dolorem dolores dolorum
                  eligendi
                  enim est et eum facere fugiat illum, impedit ipsam iure, maxime porro provident quas tenetur totam vel
                  veritatis vero voluptatem voluptates!
                </p>
              </Col>
            </Row>
          </div>
        </Card>
      </Container>
  )
}