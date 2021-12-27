import React from 'react'
import { Row, Col, Card, Badge } from "react-bootstrap";

const ResultComponent = ({text, palindrome}) => {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <Card>
          <Card.Body>
            {text}
            <Badge
              bg={palindrome === true ? "success" : "danger"}
              className="float-end"
            >
              Palindrome: {palindrome === true ? "Yes" : "No "}
            </Badge>
            &nbsp;
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ResultComponent
