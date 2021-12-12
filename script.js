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
    return (current > min && current < max)
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

// ===========================================
// Challenge #5 - You get a job, she gets a job, he gets a job
// ===========================================

// Now that a crew has been selected, you need to write a new function that will assign a job to each astronaut. Since you’ve had some experience with updating object properties in some of the previous challenges, this should be fairly straightforward. Just keep in mind that you need to return the astronaut after updating the job property.

// Input:
// const exampleAstronaut = {
//     firstName: "Chris",
//     lastName: "Hadfield",
//     nickname: "Space Oddity",
//     prefix: "Astronaut"
// }

// Output:
// const exampleAstronaut = {
//     firstName: "Chris",
//     lastName: "Hadfield",
//     nickname: "Space Oddity",
//     prefix: "Astronaut",
//     job: "Shuttle DJ"
// }

const addJobToAstronaut = (astronaut, job) => {
    astronaut.job = job;
    return astronaut;
}

// ===========================================
// Challenge #6 - Another day, another challenge
// ===========================================

// Create a function that takes in a roster array and an astronaut object. The function will add the astronaut to the roster and return the updated roster.

// Input:

// const exampleRoster = []
// const exampleAstronaut = {
//     firstName: "Chris",
//     lastName: "Hadfield",
//     nickname: "Space Oddity",
//     prefix: "Astronaut"
// }

// Output:

// const exampleRoster = [
//     {
//         firstName: "Chris",
//         lastName: "Hadfield",
//         nickname: "Space Oddity",
//         prefix: "Astronaut"
//     }
// ]

const addAstronautToRoster = (roster, astronaut) => {
    roster.push(astronaut);
    return roster;
}

// ===========================================
// Challenge #7 - It’s a bird! It’s a plane!
// ===========================================

// Your task is to write a function that takes in the temperature, weather condition, wind speed, and direction as parameters and store them inside a structure that holds each value as properties.

//     There's a small and important detail for this one, you must convert the temperature from Fahrenheit to Celsius and convert the wind speed from miles/hour to meters/second, and round both of them before storing them.

// The information that LARRY gave you about temperature conversions are in the hint section.

// Input:

// const temperature = 32
// const condition = "Sunny with small clouds"
// const windSpeed = 20
// const windDirection = "NNE

// Output:

// {
//     temperature: 0,
//         windSpeed: 9,
//             windDirection: "NNE",
//                 condition: "Sunny with small clouds"
// }

const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
    return {
        temperature: Math.round((temperature - 32) * 5 / 9),
        windSpeed: Math.round(windSpeed / 2.237),
        windDirection: windDirection,
        condition: condition,
    }
}

// ===========================================
// Challenge #8 - It’s all part of the job
// ===========================================

// Your task is to create a function that takes in a roster array, and will calculate the amount of astronauts in the given roster list and return said amount.

// Sometimes things are just simple, code doesn't need to be complicated!

// Input:

// const exampleRoster = [
//     {
//         firstName: "Chris",
//         lastName: "Hadfield",
//         nickname: "Space Oddity",
//         prefix: "Astronaut",
//         job: "Shuttle DJ"
//     }
// ]

// Output:

// 1

const countActiveAstronauts = (roster) => {
    return roster.length;
}

// ===========================================
// Challenge #9 - Media mania!
// ===========================================

// Your task is to create a function that will take in an array representing the roster of astronauts, and return an array containing the jobs of each astronaut as a string.

// In other terms, for each astronaut of the roster, you want to take the job and add it to a list, then return said list.

// Input:

// const exampleRoster = [
//     {
//         ...
//         job: "Shuttle DJ"
//       },
//     {
//         ...
//         job: "Space Cook"
//       }
// ]

// Output:

// ["Shuttle DJ", "Space Cook"]

const listAstronautJobs = (roster) => {
    return roster.map(astronaut => astronaut.job);
}

// ===========================================
// Challenge #10 - Flying solo
// ===========================================

// Your task is to create a function that will take in an array of weather objects and will return a rounded average of the wind speed.
// Since we work with an unknown amount of entries, you will need to calculate the average wind speed using loops.

//     Input:

// const exampleEntries = [
//     {
//         temperature: 0,
//         weather: "sunny",
//         windDirection: "NNE",
//         windSpeed: 24
//     },
//     {
//         temperature: 10,
//         weather: "cloudy",
//         windDirection: "NNE",
//         windSpeed: 9
//     }
// ]

// Output:

// 17

const averageWindSpeed = (weatherEntries) => {
    return Math.round(weatherEntries.reduce((total, entry) => total + entry.windSpeed, 0) / weatherEntries.length);
}

// ===========================================
// Challenge #11 - Save the date!
// ===========================================

// Your task is write a function that will take in a list of platforms and a date as a string.That function will update the date property on the first platform with an empty date and then return the platform list.

// In other terms, for each platform of the platform list array, update the date of the first free one and then return the updated platform list.

// Input:

// const missionDate = "2021-12-12"
// const platformList = [
//     {
//         name: "Platform A",
//         bookDate: "2021-12-11"
//     },
//     {
//         name: "Platform B",
//         bookDate: undefined
//     },
//     {
//         name: "Platform C",
//         bookDate: undefined
//     },
// ]

// Output:

// const platformList = [
//     {
//         name: "Platform A",
//         bookDate: "2021-12-11"
//     },
//     {
//         name: "Platform B",
//         bookDate: "2021-12-12"
//     },
//     {
//         name: "Platform C",
//         bookDate: undefined
//     },
// ]

const bookFreePlatform = (platformList, missionDate) => {
    try {
        platformList.forEach((platform) => {
            if (!platform.bookDate) {
                platform.bookDate = missionDate;
                throw 'break';
            }
        });
    } catch { }
    return platformList;
}

// ===========================================
// Challenge #12 - From novice to master
// ===========================================

// This challenge is worth 20 points (who knows why)

// Your task is to write a function that will take in an array of objects containing a sender and a message as a parameter.The function will then parse a message from each object, add it to an array then return the built array.

// Each message is built exactly like the first challenge, so you can either use the function you already made, or rebuild it from scratch.

//     Examples
// Input:

// const messages = [
//     { origin: "MC", message: "Hello!" },
//     { origin: "Shuttle", message: "Hey!" },
// ]

// Output:

// [
//     "MC: Hello!",
//     "Shuttle: Hey!"
// ]

const parseTranscripts = (messages) => {
    return messages.map(message => `${message.origin}: ${message.message}`);
}

// ===========================================
// Challenge #13 - One gauge at a time
// ===========================================

// Instructions

// Your task is to write a function that will take in an array of objects containing a gauge reading(min, max, current).The function will then check if the gauge current value is within spec(between min and max) and check the next gauge.If one of the values is outside the spec, return false, if they are all ok, return true.

// The method the evaluate the gauge is the same as the third challenge.You may take your function, get inspired by it, or start from scratch in this challenge.

// Examples
// Input:

// const gaugeList = [
//     {
//         current: 0.4,
//         min: 0.1,
//         max: 0.9
//     },
//     {
//         current: 1.2,
//         min: 0.1,
//         max: 0.6
//     }
// ]

// Output:

// false

const checkAllGauges = (gaugeList) => {
    return gaugeList.every(gauge => (gauge.current > gauge.min && gauge.current < gauge.max));
}

// ===========================================
// Challenge #14 - List-o-mania
// ===========================================

// Instructions


// Your task is to write a function that will take in an array of objects containing switches.The function will change the value of the isOn property to true for every switch in the list, and then return the updated array.

// You can use the previous switchToggle function from the fourth challenge, however be careful, since we want all of them on, not toggled!

// Examples
// Input:

// const toggleList = [
//     {
//         name: "Air",
//         isOn: true
//     },
//     {
//         name: "Radio",
//         isOn: false
//     },
// ]

// Output:

// [
//     {
//         name: "Air",
//         isOn: true
//     },
//     {
//         name: "Radio",
//         isOn: true
//     },
// ]

const switchAllTogglesOn = (toggleList) => {
    toggleList.forEach(toggle => toggle.isOn = true);
    return toggleList;
}

// ===========================================
// Challenge #15 - A fated reunion
// ===========================================

// Instructions

// Your task is to write a function that will take in a launch date and a mission name as strings.Calculate the difference between two dates in days and return an object containing the name of the mission and a rounded day difference.

// A part of the code has been written for you, and it is important that it stays the same for the tests to work out.

// Examples
// Input:

// const launchDate = "2021-12-12"
// const fakeToday = "2021-12-01"
// const missionName = "Moon visit"

// Output:

// {
//     missionName = "Moon visit",
//         daysRemaining = 11
// }

const timeRemaining = (launchDate, missionName, fakeToday) => {
    const today = fakeToday || new Date() // Do not alter this line!

    const daysRemaining = Math.round((Date.parse(launchDate) - Date.parse(today)) / 86400000);
    return { missionName: missionName, daysRemaining: daysRemaining }
}

// ===========================================
// Challenge #16 - 21 Questions
// ===========================================

// Instructions

// Your task is to write a function that will take in two position objects.Calculate the average speed from the two positions and return the average speed rounded to the first decimal point.

// Each object contains the altitude in meters, and a time stamp in seconds.

//     Examples
// Input:

// const firstPosition = {
//     time: 1637074462,
//     altitude: 1100
// }
// const secondPosition = {
//     time: 1637074558,
//     altitude: 2200
// }

// Output:

// 11.5

const getAverageSpeed = (firstPosition, secondPosition) => {
    const time = secondPosition.time - firstPosition.time;
    const distance = Math.abs(secondPosition.altitude - firstPosition.altitude);
    return Math.round((distance / time) * 10) / 10;
    // Could also use toFixed but it gets a little messy because it returns a string instead of a number
}

// ===========================================
// Challenge #17 - The moment you’ve all been waiting for...
// ===========================================

// Instructions

// Your task is to write a function that will take in an array of toggle objects and a specific toggle name.The goal is to switch only the specific toggle, without affecting the other toggles and then return the updated array.

//     Don't forget that you can use your previous function from the fourth challenge to help you complete it faster!

// Examples
// Input:

// const toggleList = [
//     {
//         name: "toggleA",
//         isOn: false
//     },
//     {
//         name: "toggleB",
//         isOn: true
//     }
// ]
// const specificToggle = "toggleA"

// Output:

// [
//     {
//         name: "toggleA",
//         isOn: true
//     },
//     {
//         name: "toggleB",
//         isOn: true
//     }
// ]

// I could have made this just an extension of #14 but wanted to see if I could get most of the logic on one line.
const switchSpecificToggle = (toggleList, specificToggle) => {
    toggleList.find(toggle => toggle.name === specificToggle).isOn = !toggleList.find(toggle => toggle.name === specificToggle).isOn;
    return toggleList;
}


// ===========================================
// Challenge #18 - Bon Appetit
// ===========================================

// Instructions


// Your task is to write a function that will take in an array of lunch choices(strings) and return the choice as a string with the most votes.

// There is always two lunch choices, and always an odd number of astronauts!

// Examples
// Input:

// const listOfChoices = [
//     "Chicken Dinner",
//     "Chicken Dinner",
//     "Chicken Dinner",
//     "Ice Cream Sandwich",
//     "Ice Cream Sandwich"
// ]
// Output:

//     Chicken Dinner

// Surely there's a simpler way but just wanting to make sure it can expand to when there are more than two choices.


const chooseLunchWinner = (listOfChoices) => {
    const choiceFrequency = listOfChoices.reduce((choices, choice) => {
        choices[choice] = choices[choice] + 1 || 1;
        return choices
    }, {});
    return Object.keys(choiceFrequency).reduce((a, b) => choiceFrequency[a] > choiceFrequency[b] ? a : b);
}

// ===========================================
// Challenge #19 - It's Pumpkin Spice Time
// ===========================================

// Instructions

// Your task is to write a function that will take in a list of data entries in the shape of an array of objects.The function will then organize and return the entries by type and store each bit of data(string) in each list, in the shape of an object containing arrays.

//     Examples
// Input:

// const listOfReceivedData = [
//     { type: "astro", data: "Saturn Data" },
//     { type: "bio", data: "Space Potatoes" },
//     { type: "physics", data: "Lagrange Points" },
//     { type: "bio", data: "OMG Tardigrades" },
//     { type: "physics", data: "Material reflectivity" },
//     { type: "astro", data: "Mercury is not the hottest" },
// ]

// Output:

// {
//     "astro": ["Saturn Data", "Mercury is not the hottest"],
//         "bio": ["Space Potatoes", "OMG Tardigrades"],
//             "physics": ["Lagrange Points", "Material reflectivity"],
// }


// This is not as elegant as I would have wanted it but it works.

const organizeData = (receivedData) => {
    return receivedData.reduce((object, entry) => {
        if (object[entry.type]) {
            object[entry.type] = [...object[entry.type], entry.data];
        } else {
            object[entry.type] = [entry.data];
        }
        return object;
    }, {});
}

// ===========================================
// Challenge #20 - Incoming Task: Confirm Re-Entry!
// ===========================================

// Instructions
//     (This challenge is worth 10 points)

// Your task is to write a function that will take in speed(number), missionData(object) and checks(object) as parameters.The goal is to make sure that the speed is within the limits and that the amount of entries per type matches with the checks.If one of the values is a mismatch, return false, if everything is fine, return true.

// Speed will be compared against maxSpeed and minSpeed inclusively and the length of each array inside missionData will be compared to the values inside the dataEntries object values.

//     Examples
// Input:

// const speed = 40
// const missionData = {
//     astro: ["...", "..."],
//     bio: ["..."],
//     physics: ["..."]
// }

// const checks = {
//     maxSpeed: 50,
//     minSpeed: 20,
//     dataEntries: {
//         astro: 3,
//         bio: 1,
//         physics: 1
//     }
// }

// Output:

// false // Not the same amount of entries

// Again not particularly elegant but it works.

const confirmReentryPlans = (speed, missionData, checks) => {
    const atSpeed = (speed > checks.minSpeed && speed < checks.maxSpeed);
    let correctEntries = true;

    for (const type in missionData) {
        correctEntries = correctEntries && (missionData[type].length === checks.dataEntries[type]);
    }

    return atSpeed && correctEntries;
}

// ===========================================
// Challenge #21 - 21 Challenges Later
// ===========================================

// Instructions
//     (This challenge is worth 20 points)

// Your last(!) task is to write a function that will take in an array of exchanged messages and an array of organized data.The goal is to parse each message, add them to a list and return an object containing two keys, transcript with the messages, missionData with the missionData object.

// Each message should be parsed using the same structure as the first challenge;

// "Origin: Message"
//     .
// You can reuse the function of the first challenge if you want!

// Examples
// Input:

// const exchanges = [
//     { origin: "MC", message: "So how is it out there?" },
//     { origin: "Shuttle", message: "Oh it's pretty nice!" },
//     { origin: "MC", message: "Did you like the challenges?" },
// ]

// const missionData = {
//     astro: ["...", "..."],
//     bio: ["..."],
//     physics: ["..."]
// }

// Output:

// {
//     transcript:
//     [
//         "MC: So how is it out there?",
//         "Shuttle: Oh it's pretty nice!",
//         "MC: Did you like the challenges?"
//     ],
//         missionData: {
//         astro: ["...", "..."],
//             bio: ["..."],
//                 physics: ["..."]
//     }
// }

const parseMissionSummary = (exchanges, missionData) => {
    return {
        transcript: exchanges.map(exchange => `${exchange.origin}: ${exchange.message}`),
        missionData: missionData,
    }
}

// And that's a wrap