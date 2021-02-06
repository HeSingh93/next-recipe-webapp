import React, {useEffect, useState} from "react";
import axios from "axios";
import RecipeCategory from "../../components/RecipeCategory/RecipeCategory";
import {Row, Card} from "react-bootstrap";
import styles from '../../styles/Categories.module.css'

const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert'

const Dessert = () => {
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSpecificCategory = async () => {
    const {data} = await axios.get(API_URL);
    setFilterData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchSpecificCategory()
  }, []);

  const displayMeal = () => {
    if (!loading) {
      return (
          <div>
            {filterData.meals?.map(meal =>
                <Row>
                  <Card >
                    <Card.Header className={styles.card} key={meal}>{meal.strMeal}</Card.Header>
                    <Card.Body className={styles.cardBody}>
                      <Card.Img className={styles.cardImg}
                                key={meal}
                                src={meal.strMealThumb}
                                alt={"Dessert food image"} />
                      <Card.Text className={styles.cardText}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis distinctio dolores eius
                        eligendi explicabo fugit, illo laboriosam odio, pariatur quae rerum voluptas voluptates!
                        Blanditiis deserunt expedita libero nesciunt omnis.Aspernatur consectetur expedita facere fugit
                        nesciunt odio quos. Adipisci commodi, exercitationem fugiat incidunt ipsa iure maiores nobis
                        quam
                        suscipit vel. Accusantium ad assumenda delectus eaque hic, id placeat similique totam.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Row>
            )}
          </div>
      )
    }
  }

  const id = filterData.meals?.map(id => ({id: id.idMeal}))

  return (
      <RecipeCategory category={displayMeal()} id={id}/>
  )
}

export default Dessert;