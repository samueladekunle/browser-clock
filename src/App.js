// Import the React library, together with the Component class.
import React, { Component } from "react";

// Import the render() method from "react-dom"
import {render} from "react-dom";

// Import the <Clock /> component.
import Clock from "./components/Clock";

// The DOM node, where <Clock /> component will be mounted
const node = document.querySelector("#app");

// Render the <Clock /> component in the DOM node
render(<Clock />, node);