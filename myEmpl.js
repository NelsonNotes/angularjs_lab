;(function() {
    'use strict';

    angular
    .module('myApp')
    .controller('nameCtrl', function($scope){
        $scope.firstName = 'John';
        $scope.lastName = 'Week';
    })
    .controller('numCtrl', function($scope){
        $scope.firstName = 1;
        $scope.lastName = 2;
    })
    .controller('colCtrl', function($scope){
        $scope.color = 'lightblue';
    })
    .controller('reptCtrl', function($scope){
        $scope.persons = [
            {firstName: 'John', lastName: 'Week'}, 
            {firstName: 'Bart', lastName: 'Simpson'}, 
            {firstName: 'Herbert', lastName: 'Schildt'}, 
            {firstName: 'Guido', lastName: 'van Rossum'}, 
        ]
    })
    .controller('chnameCtrl', function($scope){
        $scope.firstName = 'Kevin'
        $scope.changeName = function() {
            $scope.firstName = 'Lana'
        }
    })
    .controller('dateCtrl', function($scope){
        $scope.answer = {
            "in_gen": {
              "bandwidth": null, 
              "id": 3, 
              "iperf_pid": null, 
              "pause": null, 
              "period": null, 
              "status": 0, 
              "turned_on": "2022-02-21 10:29:17.191626"
            }, 
            "out_gen": {
              "bandwidth": null, 
              "id": 3, 
              "iperf_pid": null, 
              "pause": null, 
              "period": null, 
              "status": 0, 
              "turned_on": "2022-02-19 01:55:13.832010"
            }
          }
    })
    .controller('apiCtrl', function($scope, $http){
        $http.get('http://213.87.200.65:9001/device/3').then(function(response){
            $scope.answer = response.data
        })
    })
    .directive('testDirective', function(){
        return {
            template : "i'm here just for directive test, no more"
        }
    })
})();