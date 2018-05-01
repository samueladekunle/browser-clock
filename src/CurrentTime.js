class CurrentTime {
    static get currentTime() {
        return ( new Date() ).toLocaleString();
    }
}