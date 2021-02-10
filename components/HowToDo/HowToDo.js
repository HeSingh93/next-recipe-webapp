import {Container} from "react-bootstrap";
import React, {useState, useEffect} from "react";
import axios from "axios";

const API_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'

function HowToDo({instructions}) {

  return (
      <Container>
        <h4 className="text-center"><strong>Instructions</strong></h4>
        <p>{instructions}</p>
      </Container>
  );
}

export default HowToDo;