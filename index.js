const axios = require("axios");

const [city] = process.argv.slice(2);
const forecast = process.argv[3];

let dt = new Date(1571207117 * 1000);
let res = dt.toISOString().substring(0, 10);

console.log(res);

const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9c116980cd34f1346e401f71e9263fee&units=metric`;

const forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=9c116980cd34f1346e401f71e9263fee&units=metric`;

theThing = async () => {
  await axios
    .get(weatherUrl)
    .then(res => {
      const data = res.data;

      console.log(
        `It is now ${data.main.temp}°C in ${data.name}, ${data.sys.country}`
      );
      console.log(
        `The current weather conditions are: ${data.weather[0].description}`
      );
    })
    .catch(err => {
      console.log(`The city you are looking for does'nt exist anymore`);
    });
};

console.log(theThing());
