'use strict';

angular.module('openWeatherApp.services', ['ngResource'])
    .factory('openWeatherMap', function($q, $resource) {


        var getWeatherDetailsWitCity = function(requestObj) {

            console.log('hello');

            var apiKey = '279b4be6d54c8bf6ea9b12275a567156';
            var apiBaseUrl = '/api/getForecastDetailsWithCity/:location/:units/:apiKey';

            var deferred = $q.defer();
            var resource = $resource(apiBaseUrl);

            resource.get({ location: requestObj.location, units: requestObj.selectedUnit, apiKey: apiKey }, function(response) {

                deferred.resolve(response);
            });
            return deferred.promise;
        };

        return {
            getWeatherDetailsWitCity: getWeatherDetailsWitCity
        };
    });


// 'use strict';


// angular.module('openWeatherApp.services', ['ngResource'])

//   .value('version', '0.1.6')

//   .factory('openWeatherMap', function($resource) {

//     // API key is currently unused (work either with or without key)
//     var apiKey = 'b1f91124de8e9f1bc79d362d3c1c4c43';
//     var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/';

//     return $resource(apiBaseUrl + ':path/:subPath?q=:location&units=:units',
//       {
//         APPID: apiKey,
//         mode: 'json',
//         callback: 'JSON_CALLBACK',
//         lang: 'en'
//       },
//       {
//         queryWeather: {
//           method: 'JSONP',
//           params: {
//             path: 'weather'
//           },
//           isArray: false,
//           headers: {
//             'x-api-key': apiKey
//           }
//         },
//         queryForecast: {
//           method: 'JSONP',
//           params: {
//             path: 'forecast'
//           },
//           isArray: false,
//           headers: {
//             'x-api-key': apiKey
//           }
//         },
//         queryForecastDaily: {
//           method: 'JSONP',
//           params: {
//             path: 'forecast',
//             subPath: 'daily',
//             cnt: 7
//           },
//           isArray: false,
//           headers: {
//             'x-api-key': apiKey
//           }
//         }
//       }
//     )
//   });
