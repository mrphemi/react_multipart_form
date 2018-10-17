import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Location extends Component {
   saveAndContinue = e => {
      e.preventDefault();
      this.props.nextStep();
   };

   back = e => {
      e.preventDefault();
      this.props.prevStep();
   };

   render() {
      const { values, handleChange } = this.props;
      return (
         <Form>
            <FormGroup>
               <Label for="city">Country</Label>
               <Input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter city"
                  value={values.city}
                  onChange={handleChange("city")}
               />
            </FormGroup>
            <FormGroup>
               <Label for="country">Password</Label>
               <Input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Enter country"
                  value={values.country}
                  onChange={handleChange("country")}
               />
            </FormGroup>
            <Button color="primary" onClick={this.back}>
               Back
            </Button>{" "}
            <Button color="success" onClick={this.saveAndContinue}>
               Save and continue
            </Button>
         </Form>
      );
   }
}

export default Location;
