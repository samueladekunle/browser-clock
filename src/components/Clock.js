import React, { Component } from "react";
import { app as appStyle, dial as dialStyle } from "../styles/styles.js";

const Clock = ( props ) => (
    <div style={ appStyle }>
        <div style={ dialStyle }></div>
    </div>
);

export default Clock;