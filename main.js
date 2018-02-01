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
                        console.log($(element).siblings("#controlError").html("<i class='fa fa-exclamation-triangle'> Digits only !!</i>"));
                        // ctrl.$setViewValue(digits);
                        // ctrl.$render();
                    }
                    else {
                        console.log($(element).siblings("#controlError").html(""));
                    }
                    return parseInt(digits, 10);
                }

                console.log($(element).siblings("#controlError").html(""));
                return undefined;
            }
            ctrl.$parsers.push(inputValue);
        }
    }
}).directive('onlyDigitsDecimal', function () {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attr, ctrl) {
            function inputValue(val) {
                if (val) {
                    var digits = val.replace(/[^0-9.]/g, '');

                    if (digits !== val) {
                        console.log($(element).siblings("#controlError").html("<i class='fa fa-exclamation-triangle'> Digits Decimal only !!</i>"));
                        // ctrl.$setViewValue(digits);
                        // ctrl.$render();
                    }
                    else {
                        console.log($(element).siblings("#controlError").html(""));
                    }
                    return parseFloat(digits);
                }
                console.log($(element).siblings("#controlError").html(""));
                return undefined;
            }
            ctrl.$parsers.push(inputValue);
        }
    }
}).directive('validateEmail', function () {
    var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return {
        require: 'ngModel',
        link: function (scope, element) {
            element.on("keyup", function () {
                var isMatchRegex = EMAIL_REGEXP.test(element.val());
                if (isMatchRegex && element.hasClass('warning') || element.val() == '') {
                    element.removeClass('warning');
                    console.log($(element).siblings("#controlError").html(""));
                } else if (isMatchRegex == false && !element.hasClass('warning')) {
                    element.addClass('warning');
                    console.log($(element).siblings("#controlError").html("<i class='fa fa-exclamation-triangle'> Invalid email !!</i>"));
                }
            });
        }
    }
}).directive('minLength', function () {  
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModel, ctrl) {
            element.on("keyup", function () {
                if (l = ngModel.$viewValue.length < parseInt(attr.minLength))
                {
                    console.log("Minimun char Limit is : 2");
                    console.log($(element).siblings("#controlError").html("<i class='fa fa-exclamation-triangle'> Minimun char Limit is : 2 </i>"));
                }
                else{
                    console.log("Valid Input !!");    
                    console.log($(element).siblings("#controlError").html(""));
                }
            });
        }
    }
})