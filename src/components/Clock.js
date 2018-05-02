// Import the React library
import React, { Component } from "react";

// Import the <Analog /> component.
import Analog from "./Analog"

// Import the <Digital /> component.
import Digital from "./Digital";

// Import the app style rule.
import { app as appStyle } from "../styles/styles";

// Define the <Clock /> component.
const Clock = ( props ) => (
    <div style={ appStyle }>
        <Analog />
        <Digital />
    </div>
);

// Export the <Clock /> component.
export default Clock;