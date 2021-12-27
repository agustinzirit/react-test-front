import React from "react";
import { Container, Card } from "react-bootstrap";
import ResultComponent from "./ResultComponent";
import { useDispatch, useSelector } from "react-redux";

const CardComponent = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state.query);
  console.log(state);

  return (
    <Container>
      <Card>
        <Card.Body>
          <h4>Results</h4>
          <Container>
            {
              state.map((item, key) => (
                <ResultComponent key={key} text={item.text} palindrome={item.palindrome} />
              ))
            }
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CardComponent;
