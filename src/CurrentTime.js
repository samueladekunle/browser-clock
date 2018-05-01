class CurrentTime {
    static get currentTime() {
        return ( new Date() ).toLocaleString();
    }
}

export default CurrentTime;