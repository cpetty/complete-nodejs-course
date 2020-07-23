const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=12dfb5cd387cd005e3dee7dd402a01ec&query=' + latitude + ',' + longitude + '&units=f'

    request ({url, json:true},(error,{body}) =>{
        if (error) {
            callback('Unable to get connection to site', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out. The humidity is " + body.current.humidity + "%.")
        }
    } )
}
module.exports = forecast