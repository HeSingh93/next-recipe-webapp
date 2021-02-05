import React, {useEffect, useState} from "react";
import axios from "axios";
import RecipeCategory from "../../components/RecipeCategory/RecipeCategory";
import {Col, Image, Row} from "react-bootstrap";

const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian'

const Vegetarian = () => {
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
                  <Col>
                    <h3 key={meal}>{meal.strMeal}</h3>
                    <Col>
                      <Image key={meal}
                             src={meal.strMealThumb}
                             alt={"Vegetarian food image"}
                             height={"100px"}
                             width={"100px"}/>
                    </Col>
                    <Col>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis distinctio dolores eius
                        eligendi explicabo fugit, illo laboriosam odio, pariatur quae rerum voluptas voluptates!
                        Blanditiis deserunt expedita libero nesciunt omnis.Aspernatur consectetur expedita facere fugit
                        nesciunt odio quos. Adipisci commodi, exercitationem fugiat incidunt ipsa iure maiores nobis
                        quam
                        suscipit vel. Accusantium ad assumenda delectus eaque hic, id placeat similique totam.
                      </p>
                    </Col>
                  </Col>
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

export default Vegetarian;