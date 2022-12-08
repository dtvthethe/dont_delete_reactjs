// Cách 1: function component

// basic
// function Car(props) {
//   return (
//     <div>This is car color {props.color} and version {props.version}</div>
//   );
// }

// arrow function
// const Car = (props) => {
//   return (
//     <div>This is car color {props.color} and version {props.version}</div>
//   );
// }



// Cách 2: class component
import React, { Component } from 'react';

class Car extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>This is car color {this.props.color} and version {this.props.version}</div>
    );
  }
}

// App
function PropCar() {
  return (
    <div>
      <Car color="red" version="1" />
      <Car color="green" version="2" />
    </div>
  );
}

export default PropCar;
