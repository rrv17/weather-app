'use strict';

describe('openWeatherApp.controllers module', function() {

    var TextService;

    beforeEach(function() {
        module('openWeatherApp',[]);

        module('openWeatherApp.controllers');

        inject(function($rootScope, $controller) {

            scope = $rootScope.$new();

            controller = $controller('OpenWeatherCtrl', {
                $scope: scope
            });

        });
    });

    describe('when the controller is invoked', function () {

        it('should initialize objects', function() {
        //expect( $scope.dataPresent).toBeFalsy();
    });
       

    });

});