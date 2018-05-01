const app = {
    position: "relative",
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    margin: "0 auto",
    textAlign: "center"
};

const dial = {
    position: "relative",
    top: "inherit",
    left: "inherit",
    width: "inherit",
    height: "inherit",
    borderRadius: 2000,
    border: "1px solid black"
};

const secondHand = {
    position: "relative",
    top: 100,
    left: 100,
    width: "40%",
    height: 1,
    transformOrigin: "0% 0%",
    backgroundColor: "grey",
    border: "1px solid grey",
    backgroundColor: "red"
};

const minuteHand = {
    position: "relative",
    top: 100,
    left: 1000,
    width: "40%",
    height: 3,
    transformOrigin: "0% 0%",
    backgroundColor: "grey",
    border: "1px solid grey"
};

const hourHand = {
    position: "relative",
    top: 100,
    left: 100,
    width: "20%",
    height: 7,
    transformOrigin: "0% 0%",
    backgroundColor: "black",
    border: "1px solid black"
};

export { app, dial, secondHand, minuteHand, hourHand };