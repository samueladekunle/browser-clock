import React, { Component } from "react";
import {render} from "react-dom";

const Hello = props => <p>Hello!</p>;

render(<Hello/>, document.querySelector("#app"));