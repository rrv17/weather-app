// Dependencies
var express = require('express');
var http = require('http');
var router = express.Router();

//Routes
router.get('/getWeatherDetailsByCity/:city', function(req, res) {
    getCityDetails(req.params.city, res);
})

//getting Forescast details
router.get('/getForecastDetailsWithCity/:location/:units/:apiKey', function(req, res) {

    var data = {
        "location": req.params.location,
        "units": req.params.units,
        "apiKey":req.params.apiKey
    }

    getForecastDetailsWithCity(data, res);
})


//Print out error messages
function printError(error) {
    console.error(error.message);
}


function getCityDetails(city, respond) {

    var weatherAPIResponse = "";

    var request = http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=b1f91124de8e9f1bc79d362d3c1c4c43', function(response) {

        var body = "";
        //Read the data
        response.on('data', function(chunk) {
            body += chunk;
        });

        response.on('end', function() {

            if (response.statusCode === 200) {
                try {
                    //Parse the data
                    var weatherAPIResponse = JSON.parse(body);

                    //Print the data

                    respond.send(weatherAPIResponse);
                } catch (error) {
                    //Parse error
                    printError(error);
                }
            } else {
                //Status Code error
                printError({ message: 'There was an error getting the weather from ' + city + '. (' + http.STATUS_CODES[response.statusCode] + ')' });
            }
        })
    });

    //Connection error
    request.on('error', printError);
}


function getForecastDetailsWithCity(requestDetails, respond) {

    var weatherAPIResponse = "";

    var request = http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + requestDetails.location + '&units=' + requestDetails.units + '&APPID=' + requestDetails.apiKey, function(response) {

        var body = "";
        //Read the data
        response.on('data', function(chunk) {
            body += chunk;
        });

        response.on('end', function() {

            if (response.statusCode === 200) {
                try {
                    //Parse the data
                    var weatherAPIResponse = JSON.parse(body);

                    //Print the data
                    console.log(weatherAPIResponse);
                    respond.send(weatherAPIResponse);
                } catch (error) {
                    //Parse error
                    printError(error);
                }
            } else {
                //Status Code error
                printError({ message: 'There was an error getting the weather from ' + requestDetails.location + '. (' + http.STATUS_CODES[response.statusCode] + ')' });
            }
        })
    });

    //Connection error
    request.on('error', printError);
}


// Return router
module.exports = router;