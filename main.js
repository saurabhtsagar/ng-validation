var myApp = angular.module('helloworld', ['ui.bootstrap', 'ui.router', 'ui.grid', 'ui.grid.resizeColumns', 'ui.grid.moveColumns', 'ui.grid.exporter',
    'ui.grid.selection',
    'isteven-multi-select',
    'ripplerModule',
]);

myApp.config(function ($stateProvider) {
    var helloState = {
        name: 'hello',
        url: '/hello',
        templateUrl: 'hello.html',
        controller: "helloController"
    }


    $stateProvider.state(helloState);
}).controller('helloController', function ($scope, $rootScope, $q, $timeout, $interval, $http, uiGridConstants) {

    $scope.submitForm = function () {

        alert("Submitting form !!!");
    }

}).directive('onlyDigits', function () {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attr, ctrl) {

            function inputValue(val) {

                if (val) {
                    var digits = val.replace(/[^0-9]/g, '');
                    if (digits !== val) {
                        console.log($(element).siblings("#myerror").html("<i class='fa fa-exclamation-triangle'> Digits only !!</i>"));
                        // ctrl.$setViewValue(digits);
                        // ctrl.$render();
                    }
                    else {
                        console.log($(element).siblings("#myerror").html(""));
                    }
                    return parseInt(digits, 10);
                }

                console.log($(element).siblings("#myerror").html(""));
                return undefined;
            }
            ctrl.$parsers.push(inputValue);
        }
    }
});