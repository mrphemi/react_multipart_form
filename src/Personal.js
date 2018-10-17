import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Personal extends Component {
   saveAndContinue = e => {
      e.preventDefault();
      this.props.nextStep();
   };
   render() {
      return (
         <Form>
            <FormGroup>
               <Label for="name">Fullname</Label>
               <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Full Name"
                  onChange={this.props.handleChange("name")}
               />
            </FormGroup>
            <FormGroup>
               <Label for="email">Email</Label>
               <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter valid email"
                  onChange={this.props.handleChange("email")}
               />
            </FormGroup>
            <Button color="success">Save and continue</Button>
         </Form>
      );
   }
}

export default Personal;
