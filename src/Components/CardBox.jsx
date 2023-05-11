import React from 'react';
import Card from 'react-bootstrap/Card';
function CardBox(props) {
  return (
    <Card className="card">
      <Card.Img variant="top" src= {props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardBox;