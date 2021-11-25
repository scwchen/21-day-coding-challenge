// ===========================================
// Challenge #1 - To compilation and beyond!
// ===========================================


// Your first task is to write a function that will take two string parameters and return a string containing the sender name and the message in the form specified in the instructions.

// Input:
// parseMessage("Mission Control", "Hello there!")

// Output:
// Mission Control: Hello there!


const parseMessage = (origin, message) => {
    return origin + ': ' + message;
}
// ===========================================
// Challenge #2 - One small step at a time
// ===========================================

// Your task is to automate that process by creating a function that will take in an astronaut object as a parameter and return a string using the properties of the astronaut.

// Input:
// const exampleAstronaut = {
//     firstName: "Yuri",
//     lastName: "Gagarin",
//     nickname: "First!",
//     prefix: "Cosmonaut"
// }

// Output:
// Cosmonaut: Yuri "First!" Gagarin

const generateAstronautTag = (astronaut) => {
    const { firstName, lastName, nickname, prefix } = astronaut;
    const greeting = `${prefix}: ${firstName} "${nickname}" ${lastName}`;

    return greeting;
}

// ===========================================
// Challenge #3 - What’s in the box?
// ===========================================

// Your task is to create a function that will take the gauge object as a parameter, and will return true if the current value is between the minimum and maximum, and return false if the value is outside those.

// Input:
// const exampleGauge = {
//     current: 0.4,
//     min: 0.1,
//     max: 0.9
// }

// Output:
// true

const checkGaugeStatus = (gauge) => {
    const { current, min, max } = gauge;

    if (current > min && current < max) {
        return true;
    } else {
        return false;
    }
}

// ===========================================
// Challenge #4 - Hope you’re not afraid of the dark...
// ===========================================

// Create a function that takes in a toggle object and will change the value of the property isOn between true and false and return the updated object. Using the function twice should revert the toggle back to its original value.

// Input:

// const someToggle = {
//     name: "toggleA",
//     isOn: false
// }

// Output:

// const someToggle = {
//     name: "toggleA",
//     isOn: true
// }

const switchToggle = (toggle) => {
    toggle.isOn = !toggle.isOn;
    return toggle;
}