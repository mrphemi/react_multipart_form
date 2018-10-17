import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Location extends Component {
   render() {
      return (
         <Form>
            <FormGroup>
               <Label for="city">Country</Label>
               <Input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter city"
                  onChange={this.props.handleChange("city")}
               />
            </FormGroup>
            <FormGroup>
               <Label for="country">Password</Label>
               <Input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Enter country"
                  onChange={this.props.handleChange("country")}
               />
            </FormGroup>
            <Button color="success">Save and continue</Button>
         </Form>
      );
   }
}

export default Location;
