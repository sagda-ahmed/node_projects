const request = require("request")
const forecast = (longitude, latitude, callback) => {
    const url = "https://api.weatherapi.com/v1/current.json?key=your_key" + longitude + "," + latitude
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (response.body.error) {
            callback(response.body.error.message, undefined)
        } else {
            callback(undefined, response.body.location.name +"it is" + response.body.current.conditiontext + "and it is currently " + response.body.current.temp_c )
        }
    })
}
module.exports = forecast