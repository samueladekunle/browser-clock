import React, { Component } from "react";
import CurrentTime from "../CurrentTime.js";

class Digital extends Component {
    constructor( props ) {
        super( props );
        this.updateTime = this.updateTime.bind(this);
        this.state = {
            currentTime: CurrentTime
        };
        this.updateTime();
    }
    updateTime() {
        setInterval( () => this.setState( { currentTime: CurrentTime } ), 1000 );
    }
    render() {
        return <div>{ this.state.currentTime }</div>;
    }
}

export default Digital;