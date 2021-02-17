import React, {useContext} from "react";
import {Row, Col, ListGroup,} from 'react-bootstrap';
import styles from '../styles/generic.module.css';
import MainRecipeFeed from "../components/MainRecipeFeed/MainRecipeFeed";
import Category from "../components/Category/Category";
import SearchItem from "./SearchItem";
import AppContext from "../Context/ContextIndex";
import Header from "../components/Header/Header";
import { useSession} from 'next-auth/client'

export default function Home() {
  let {query} = useContext(AppContext);
  const [ session, loading ] = useSession()

  if (loading) return null

  if (!loading && !session) return <index/>

  const mealList = () => {
    if (query.length > 1) {
      return (
          <ListGroup>
            <ListGroup.Item>
              <h1 className={styles.indexTextTitle}>Searched recipes</h1>
              <SearchItem/>
            </ListGroup.Item>
          </ListGroup>
      )
    } else {
      return (
          <ListGroup>
            <ListGroup.Item>
              <h1 className={styles.indexTextTitle}>Recommended recipes </h1>
              <MainRecipeFeed/></ListGroup.Item>
            <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
            <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
            <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
            <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
            <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
            <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
            <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
          </ListGroup>
      )
    }
  }

  return (
      <div className={styles.indexContainer}>
        <Header/>
        <div>
          <Row noGutters={true}>
            <Col md={12} lg={3}>
              <Category/>
            </Col>
            <Col md={"auto"} lg={6}>
              {mealList()}
            </Col>
            <Col lg={3}>
            </Col>
          </Row>
        </div>
      </div>
  )
}