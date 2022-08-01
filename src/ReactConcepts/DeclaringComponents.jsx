import React from "react";
import React, { Component } from 'react'//class

const FunctionalComponent = () => {
  return <div>FunctionalComponent</div>;
};

export default FunctionalComponent;



export default class ClassComponent extends Component {
  render() {
    return (
      <div>ClassComponent</div>
    )
  }
}

