// Definition of the CurrentTime class.
class CurrentTime {
    static get currentTime() {
        // Returns the cureent system date, and time.
        return ( new Date() ).toLocaleString();
    }
}

// Export the CurrentTime class.
export default CurrentTime;