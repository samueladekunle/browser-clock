import React, { Component } from "react";
import Digital from "./Digital.js";
import { app as appStyle, dial as dialStyle } from "../styles/styles.js";

const Clock = ( props ) => (
    <div style={ appStyle }>
        <div style={ dialStyle }></div>
        <Digital />>
    </div>
);

export default Clock;