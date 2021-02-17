import React, {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import {Card, Col, Nav, Row} from "react-bootstrap";
import styles from '../styles/Categories.module.css'
import RecipeCategory from "../components/RecipeCategory/RecipeCategory";
import {useSession} from "next-auth/client";
import index from "./index";
import genericStyle from "../styles/generic.module.css";

const Category = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [ session, loading ] = useSession()

  const router = useRouter();
  let query = router.query
  let category = "";
  for (query in router.query) {
    if (router.query.hasOwnProperty(query)) {
      category = router.query[query]
    }
  }
  const API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`

  const fetchSpecificCategory = async () => {
    const {data} = await axios.get(API_URL);
    setFilteredData(data);
    setLoading(false);
  }

  const displayMeal = () => {
    if (!isLoading) {
      return (
          <div>
            {filteredData.meals?.map(meal =>
                <Row>
                  <Card>
                    <Card.Header className={styles.card}
                                 key={meal}><a className={styles.card}
                                               href={`/recipe?id=${meal.idMeal}`}> {meal.strMeal}</a></Card.Header>
                    <Card.Body className={styles.cardBody}>
                      <Row noGutters={true}>
                        <Col md={4}>
                          <Card.Img className={styles.cardImg}
                                    key={meal}
                                    src={meal.strMealThumb}
                                    alt={"Category food image"}/>
                        </Col>
                        <Col>
                          <Card.Text className={styles.cardText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis distinctio dolores
                            eius
                            eligendi explicabo fugit, illo laboriosam odio, pariatur quae rerum voluptas voluptates!
                            Blanditiis deserunt expedita libero nesciunt omnis.Aspernatur consectetur expedita facere
                            fugit
                            nesciunt odio quos. Adipisci commodi, exercitationem fugiat incidunt ipsa iure maiores nobis
                            quam suscipit vel.
                          </Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Row>
            )}
            <Row className={"d-flex justify-content-center"}>
              <a className={"text-center"} href="#Banner"><h3 className={styles.genericText}> Go to top</h3></a>
            </Row>
          </div>
      )
    }
  }

  useEffect(() => {

    if (router.query !== undefined) {
      fetchSpecificCategory()
    }
  }, [router])

  if (loading) return null
  if (!loading && !session) return index()


  return (
      <RecipeCategory category={displayMeal()}/>
  )
}

export default Category;