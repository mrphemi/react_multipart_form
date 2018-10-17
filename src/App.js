import React, { Component } from "react";
import { Container } from "reactstrap";
import Personal from "./Personal";
import Location from "./Location";
import Confirmation from "./Confirmation";
import Success from "./Success";

class App extends Component {
   state = {
      step: 1,
      name: "",
      email: "",
      country: "",
      city: ""
   };

   nextStep = () => {
      const { step } = this.state;
      this.setState({
         step: step + 1
      });
   };

   prevStep = () => {
      const { step } = this.state;
      this.setState({
         step: step - 1
      });
   };

   handleChange = input => e => {
      this.setState({ [input]: e.target.value });
   };

   render() {
      const { step } = this.state;
      const { name, email, country, city } = this.state;
      const values = { name, email, country, city };
      switch (step) {
         case 1:
            return (
               <Container>
                  <br />
                  <Personal
                     nextStep={this.nextStep}
                     handleChange={this.handleChange}
                     values={values}
                  />
               </Container>
            );
         case 2:
            return (
               <Container>
                  <br />
                  <Location
                     nextStep={this.nextStep}
                     prevStep={this.prevStep}
                     handleChange={this.handleChange}
                     values={values}
                  />
               </Container>
            );
         case 3:
            return (
               <Container>
                  <br />
                  <Confirmation
                     values={values}
                     nextStep={this.nextStep}
                     prevStep={this.prevStep}
                  />
               </Container>
            );
         default:
            return (
               <Container>
                  <Success />
               </Container>
            );
      }
   }
}

export default App;
