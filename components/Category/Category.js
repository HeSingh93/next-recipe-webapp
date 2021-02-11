import React, {useEffect, useState} from "react";
import {Accordion, AccordionCollapse, AccordionToggle, Card, Container} from "react-bootstrap";
import axios from "axios";
import style from './Category.module.css'

const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';


const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    const {data} = await axios.get(API_URL);
    setCategoryData(data)
    setLoading(false);
    console.log("DATA", data)
  }

  const displayCategories = () => {
    if (!loading) {
      return (
          <Container>{categoryData.categories?.map(category => <Card.Body
              key={category}><a className={style.text}
                                href={`/category?cat=${category.strCategory}`}>{category.strCategory}</a></Card.Body>)}</Container>
      )
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
      <div className={style.boxLeft}>
        <Accordion>
          <Card>
            <AccordionToggle as={Card.Header} eventKey={"0"}>
              <h5 className={style.header}>Categories ({categoryData.categories?.length})</h5>
            </AccordionToggle>
            <AccordionCollapse eventKey={"0"}>
              <Card.Body><strong>{displayCategories()}</strong></Card.Body>
            </AccordionCollapse>
          </Card>
        </Accordion>
      </div>
  )
}

export default Category;