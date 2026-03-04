const request = require("request")
const geocode = (address , callback) =>{
    const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk. YOUR_ACCESS_TOKENclear"
    request ({url: geocodeUrl, json : true} , (error , Response)=>{
        if(error){
            callback("Error fetching geocoding data:")
        }
        else if (Response.body.message) {
            callback( Response.body.message , undefined)
        }
        else if (Response.body.features.length === 0) {
            callback("No matching location found" , undefined)
        }
        else{
            const longtitude = Response.body.features[0].center[0]
            const latitude = Response.body.features[0].center[1]
            callback(undefined , {longtitude : Response.body.features[0].center[0],
                latitude : Response.body.features[0].center[1]
            })}
        })
    }
module.exports = geocode