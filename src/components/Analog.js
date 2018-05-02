// Import the React library, together with the Component class.
import React, { Component } from "react";

// Import the CurrentTime class.
import CurrentTime from "../CurrentTime";

// Import the dial, secondHand, minuteHand, and hourHand style rules.
import { dial as dialStyle,
         secondHand as secondHandStyle,
         minuteHand as minuteHandStyle,
         hourHand as hourHandStyle }
from "../styles/styles";

// Define the <Analog /> component
class Analog extends Component {
    constructor( props ) {
        super( props );

        // Initialise the currentTime state to system's current date and time
        this.state = {
            currentTime: CurrentTime.currentTime
        };

        // Invoke the updateTime() method to update the currentTime state.
        this.updateTime();
    }
    toDegree( value, divisor = 60 ) {
        // Converts the second, minute, and hour values to degree.
        return ( value / divisor ) * 360 - 90;
    }
    updateTime() {
        // Calls the setInterval function to update the currentTime state, every 1 second.
        setInterval( () => this.setState( { currentTime: CurrentTime.currentTime } ), 1000 );
    }
    transformStyle( style, transform ) {
        // Merges, and returns the transform property to the style rule object.
        return Object.assign( {}, style, transform );
    }
    transform( degree ) {
        // Returns the transform property
        return { transform: `rotate(${ degree }deg)` };
    }
    render() {
        // The current system date and time.
        const currentTime = new Date ( this.state.currentTime );
        // The current second.
        const second = currentTime.getSeconds();
        // The current minute.
        const minute = currentTime.getMinutes();
        // The current hour.
        const hour = currentTime.getHours();
        
        // Value of second, when coverted to degree.
        const secondInDegree = this.toDegree( second ).toString();
        // Value of minute, when converted to degree.
        const minuteInDegree = this.toDegree( minute ).toString();
        // Value of hour, when converted to degree.
        const hourInDegree = this.toDegree( hour, 12 ).toString();

        // The new secondHand rule, with the transform property.
        this.secondHandStyle = this.transformStyle( secondHandStyle, this.transform( secondInDegree ) );
        // The new minuteHand rule, with the transform property.
        this.minuteHandStyle = this.transformStyle( minuteHandStyle, this.transform( minuteInDegree ) );
        // The new hourHand style rule, with the transform property.
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

// Export the <Analog /> component.
export default Analog;