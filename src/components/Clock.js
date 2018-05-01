import React, { Component } from "react";
import Analog from "./Analog"
import Digital from "./Digital";
import { app as appStyle } from "../styles/styles";

const Clock = ( props ) => (
    <div style={ appStyle }>
        <Analog />
        <Digital />>
    </div>
);

export default Clock;