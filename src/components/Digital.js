import React, { Component } from "react";
import CurrentTime from "../CurrentTime.js";

class Digital extends Component {
    constructor( props ) {
        super( props );
        this.updateTime = this.updateTime.bind(this);
        this.state = {
            currentTime: CurrentTime.currentTime
        };
        this.updateTime();
    }
    updateTime() {
        setInterval( () => this.setState( { currentTime: CurrentTime.currentTime } ), 1000 );
    }
    render() {
        return <div>{ this.state.currentTime }</div>;
    }
}

export default Digital;