import React, { Component } from "react";
import CurrentTime from "../CurrentTime";
import { dial as dialStyle, secondHand as secondHandStyle, minuteHand as minuteHandStyle, hourHand as hourHandStyle } from "../styles/styles";

class Analog extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            currentTime: new Date( CurrentTime.currentTime )
        };
        const currentTime = this.state.currentTime;
        secondHandStyle.transform = this.toDegree( currentTime );
        minuteHandStyle.transform = this.toDegree( currentTime );
        hourHandStyle.transform = this.toDegree( currentTime, 12 );
        this.updateTime();
    }
    toDegree( value, divisor = 60 ) {
        return ( value / divisor ) * 360 - 90;
    }
    updateTime() {
        setInterval( () => this.setState( { currentTime: CurrentTime.currentTime } ), 1000 );
    }
    render() {
        return (
            <div style={ dialStyle }>
                <div style={ secondHandStyle }></div>
                <div style={ minuteHandStyle }></div>
                <div style={ hourHandStyle }></div>
            </div>
        );
    }
}

export default Analog;