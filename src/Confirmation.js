import React from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";

const Confirmation = props => {
   const { values } = props;
   return (
      <Container>
         <h1 className="text-center">Confirm your details</h1>
         <ListGroup>
            <ListGroupItem>Name: {values.name}</ListGroupItem>
            <ListGroupItem>Email: {values.email}</ListGroupItem>
            <ListGroupItem>City: {values.city}</ListGroupItem>
            <ListGroupItem>Country: {values.country}</ListGroupItem>
         </ListGroup>
         <br />
         <Button color="primary" onClick={props.prevStep}>
            Back
         </Button>{" "}
         <Button color="success" onClick={props.nextStep}>
            Save and continue
         </Button>
      </Container>
   );
};

export default Confirmation;
