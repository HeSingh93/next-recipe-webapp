import React, {useContext} from "react";
import {Col, Container, Image, Row, Card} from "react-bootstrap";
import AppContext from "../Context/ContextIndex";
import style from "../components/MainRecipeFeed/MainRecipeFeed.module.css";
import styles from "../styles/generic.module.css";

export default function SearchItem() {
  let {recipes} = useContext(AppContext);
  return (

      <div className={"sm mx-auto p-3"}>
        {recipes.meals?.map((meals) => {
          return (
              <Container fluid={"sm"}>
                <Card className={"mx-auto p-3"}>
                  <div>
                    <Row xs={1} md={2}>
                      <Col md={"auto"} sm={"auto"}>
                        <Image className={style.image} alt="Image of meal" src={meals.strMealThumb}/>
                      </Col>
                      <Col sm={6}>
                        <a className={styles.genericText} href={`/recipe?id=${meals.idMeal}`}><h2>{meals.strMeal}</h2>
                        </a>
                        <h5>Category: {meals.strCategory}</h5>
                        <h6>Area: <strong>{meals.strArea}</strong></h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores enim facilis quisquam ut.
                          Aperiam
                          doloribus exercitationem illum itaque laudantium neque officia optio qui, temporibus!
                          Cupiditate eos
                          laboriosam non possimus quasi.Alias aliquam architecto aspernatur atque dolorem dolores
                          dolorum eligendi
                          enim est et eum facere fugiat illum, impedit ipsam iure, maxime porro provident quas tenetur
                          totam vel
                          veritatis vero voluptatem voluptates!
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Container>
          )
        })}
      </div>)
}