import React, { Component } from "react";
import CurrentTime from "../CurrentTime";
import { dial as dialStyle, secondHand as secondHandStyle, minuteHand as minuteHandStyle, hourHand as hourHandStyle } from "../styles/styles";

class Analog extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            currentTime: CurrentTime.currentTime
        };
        this.updateTime();
    }
    toDegree( value, divisor = 60 ) {
        return ( value / divisor ) * 360 - 90;
    }
    updateTime() {
        setInterval( () => this.setState( { currentTime: CurrentTime.currentTime } ), 1000 );
    }
    transformStyle( style, transform ) {
        return Object.assign( {}, style, transform );
    }
    transform( degree ) {
        return { transform: `rotate(${ degree }deg)` };
    }
    render() {
        const currentTime = new Date ( this.state.currentTime );
        const second = currentTime.getSeconds();
        const minute = currentTime.getMinutes();
        const hour = currentTime.getHours();
        
        const secondInDegree = this.toDegree( second ).toString();
        const minuteInDegree = this.toDegree( minute ).toString();
        const hourInDegree = this.toDegree( hour, 12 ).toString();

        this.secondHandStyle = this.transformStyle( secondHandStyle, this.transform( secondInDegree ) );
        this.minuteHandStyle = this.transformStyle( minuteHandStyle, this.transform( minuteInDegree ) );
        this.hourHandStyle = this.transformStyle( hourHandStyle, this.transform( hourInDegree ) );
        return (
            <div style={ dialStyle }>
                <div style={ this.secondHandStyle }></div>
                <div style={ this.minuteHandStyle }></div>
                <div style={ this.hourHandStyle }></div>
            </div>
        );
    }
}

export default Analog;