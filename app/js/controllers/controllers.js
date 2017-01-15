'use strict';

/* Controllers */

angular.module('openWeatherApp.controllers', [])

// Controller for "open weather map" api data search
.controller('OpenWeatherCtrl', ['$scope', 'openWeatherMap', 'ISO3166',
    function($scope, openWeatherMap, ISO3166) {

        $scope.message = '';
        $scope.hasState = '';
        $scope.dataPresent = false;

        $scope.unitChoice = {
            Farenheit: 'imperial',
            Celcius: 'metric'
        }
        $scope.selectedUnit = $scope.unitChoice.Farenheit;

        $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

        var requestObj = {};
        /*
            // On initialization load data for first example entry
            $scope.forecast = openWeatherMap.queryForecastDaily({
              location: 'Phoenix',
              units: 'imperial'
            });
        */
        // Get forecast data for location as given in $scope.location
        $scope.getForecastByLocation = function() {

            if ($scope.location == '' || $scope.location == undefined) {
                $scope.hasState = 'has-warning';
                $scope.message = 'Please provide a location';
                return;
            }

            $scope.hasState = 'has-success';


            requestObj.location = $scope.location;
            requestObj.selectedUnit = $scope.selectedUnit;

            openWeatherMap.getWeatherDetailsWitCity(requestObj)
                .then(function(data) {

                    $scope.forecast = data;
                });

            $scope.dataPresent = true;
        };

        // Set $scope.location and execute search on API
        $scope.setLocation = function(loc) {
            $scope.location = loc;
            $scope.getForecastByLocation();
        };
        /*
            // Get icon image url
            $scope.getIconImageUrl = function(iconName) {
              return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
            };
        */
    }
]);
