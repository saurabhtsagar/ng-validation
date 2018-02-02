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
                        angular.element(element).css("border-color","red");
                        console.log(angular.element(element).siblings("#controlError").html("<i class='fa fa-exclamation-triangle'><span id='errorText'> Digits only !! </span></i>"));
                        // ctrl.$setViewValue(digits);
                        // ctrl.$render();
                    }
                    else {
                        console.log(angular.element(element).siblings("#controlError").html(""));
                        angular.element(element).css("border-color","");
                    }
                    return parseInt(digits, 10);
                }

                console.log(angular.element(element).siblings("#controlError").html(""));
                angular.element(element).css("border-color","");
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
                        console.log(angular.element(element).siblings("#controlError").html("<i class='fa fa-exclamation-triangle'> <span id='errorText'> Digits Decimal only !!<span></i>"));
                        // ctrl.$setViewValue(digits);
                        // ctrl.$render();
                    }
                    else {
                        console.log(angular.element(element).siblings("#controlError").html(""));
                    }
                    return parseFloat(digits);
                }
                console.log(angular.element(element).siblings("#controlError").html(""));
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
                   angular.element(element).siblings("#controlError").html("");
                } else if (isMatchRegex == false && !element.hasClass('warning')) {
                    element.addClass('warning');
                    console.log(angular.element(element).siblings("#controlError").html("<i class='fa fa-exclamation-triangle'> <span id='errorText'>Invalid email !! </span></i>"));
                }
            });
        }
    }
}).directive('minLength', function () {
    return {
        require: 'ngModel',
        restrict: 'A',
        scope: {
            callback: '&maxLength'
        },
        link: function (scope, element, attr, ngModel, ctrl) {
            element.on("keyup", function () {
                if (ngModel.$viewValue.length < parseInt(attr.minLength)) {
                    console.log("Minimun char Limit is : 2");
                    angular.element(element).siblings("#controlError").html("<i class='fa fa-exclamation-triangle'> <span id='errorText'> min char Limit is : 2 </span></i>");

                }
                else {
                    //console.log("Valid Input !!");
                    angular.element(element).siblings("#controlError").html("");

                }
            });
            scope.callback();
        }
    }
}).directive('maxLength', function () {
    return {
        require: 'ngModel',
        restrict: 'A',        
        link: function (scope, element, attr, ngModel, ctrl) {
            element.on("keyup", function () {
                if (ngModel.$viewValue.length > parseInt(attr.maxLength)) {
                    console.log("Maximum char Limit is : 5");
                    angular.element(element).siblings("#controlError").html("<i class='fa fa-exclamation-triangle'> <span id='errorText'>Maximum char Limit is : 5 <span></i>");
                }
                else {
                    //console.log("Valid Input !!");
                    //angular.element(element).siblings("#controlError").html("");
                }
            });

        }
    }
});