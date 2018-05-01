import React, { Component } from "react";
import {render} from "react-dom";
import Clock from "./components/Clock.js";

const node = document.querySelector("#app");
render(<Clock />, node);