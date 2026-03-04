const request = require("request")
const forecast = require("./data1/forecast")
const geocode = require("./data1/geocode")
const country = process.argv[2]
geocode(country , (error , data) => {
    console.log( "Error :" ,error)
    console.log(data ,"data:")

    forecast( data.longtitude, data.latitude, (error, data) => {
        if (error) {
     return console.log("Error:", error)
    
}
console.log ("country:", country)
console.log("temperature:", data)
console.log("latitude:", data.latitude)
console.log("longtitude:", data.longtitude)
})
})