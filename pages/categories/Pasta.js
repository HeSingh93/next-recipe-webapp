import React, {useEffect, useState} from "react";
import axios from "axios";
import RecipeCategory from "../../components/RecipeCategory/RecipeCategory";
import {Col, Image, Row} from "react-bootstrap";

const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta'

const Pasta = () => {
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSpecificCategory = async () => {
    const {data} = await axios.get(API_URL);
    setFilterData(data);
    setLoading(false);
    console.log("Chicken RECIPES", data)
  }

  useEffect(() => {
    fetchSpecificCategory()
  }, []);


  const displayMeal = () => {
    if (!loading) {
      return (
          <div>
            <Row>
              <Col>
                {filterData.meals?.map(title =>
                    <h4 key={title}>{title.strMeal}</h4>)}
              </Col>
              <Col>
                {filterData.meals?.map(thumbnail =>
                    <Image key={thumbnail} src={thumbnail.strMealThumb} width={"40px"} height={"40px"}/>)}
              </Col>
            </Row>
          </div>
      )
    }
  }

  const displayTitle = () => {
    if (!loading) {
      return (
          <div>
            {filterData.meals?.map(title =>
                <h4 key={title}>{title.strMeal}</h4>)}
          </div>
      )
    }
  }

  const id = filterData.meals?.map(id => ({id: id.idMeal}))
  console.log("RESULT",id)

  const displayThumbnail = () => {
    if (!loading) {
      return (
          <div>
            {filterData.meals?.map(thumbnail =>
                <Image key={thumbnail} src={thumbnail.strMealThumb} width={"40px"} height={"40px"}/>)}
          </div>
      )
    }
  }

  return (
      <RecipeCategory title={displayTitle()} thumbnail={displayThumbnail()} id={id}/>
  )
}

export default Pasta;