import React, { Component } from "react";
import Personal from "./Personal";
import Location from "./Location";

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
               <div className="container">
                  <br />
                  <Personal
                     nextStep={this.nextStep}
                     handleChange={this.handleChange}
                     values={values}
                  />
               </div>
            );
         case 2:
            return (
               <div className="container">
                  <br />
                  <Location
                     nextStep={this.nextStep}
                     handleChange={this.handleChange}
                     values={values}
                  />
               </div>
            );
         default:
            return (
               <div className="container">
                  <br />
                  <Personal
                     nextStep={this.nextStep}
                     handleChange={this.handleChange}
                     values={values}
                  />
               </div>
            );
      }
   }
}

export default App;
