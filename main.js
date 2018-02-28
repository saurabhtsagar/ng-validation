var myApp = angular.module('helloworld', ['ui.bootstrap', 'ngMap', 'ui.router', 'ui.grid', 'ui.grid.resizeColumns', 'ui.grid.moveColumns', 'ui.grid.exporter',
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

    var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: 'about.html',
        controller: "aboutController"
    }

    $stateProvider.state(aboutState);
    $stateProvider.state(helloState);
}).controller('aboutController', function ($scope) {
    particlesJS.load('particles-js', 'lib/particles/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
})
    .controller('helloController', function ($scope, $rootScope, $q, $timeout, $interval, $http, uiGridConstants) {

        $scope.submitForm = function () {
            alert("Submitting form !!!");
        }
        
        /*update using underscore.js */
        var nameInfo = [{ name: "Moroni", age: 50 },
        { name: "Tiancum", age: 43 },
        { name: "Jacob", age: 27 },
        { name: "Nephi", age: 29 },
        { name: "Enos", age: 34 }];

        var newNameInfo = { name: "Sagar", age: 29 };

        var match = _.map(nameInfo, function (obj, i) {
            if (obj.name == 'Moroni') {
                obj[i] = newNameInfo; // Or replace the whole obj
            }
        });

        alert(JSON.stringify(nameInfo));
        /*update using underscore.js */

        $scope.latlng = [18.5204, 73.8567];
        $scope.mapPopover = {
            content: 'Hello, World!',
            templateUrl: 'mapPopoverTemplate.html',
            title: "Selection :" + $scope.latlng
        };
        $scope.lat = $scope.latlng[0].toFixed(8);;
        $scope.long = $scope.latlng[1].toFixed(8);;

        $scope.getpos = function (event) {
            $scope.latlng = [event.latLng.lat(), event.latLng.lng()];
            $scope.lat = $scope.latlng[0].toFixed(8);
            $scope.long = $scope.latlng[1].toFixed(8);
            $scope.mapPopover.title = "Selection :" + $scope.lat + "," + $scope.long;
        };

        $scope.users =
            [
                {
                    "_id": "5a796b90d85cc62c5d3118aa",
                    "index": 0,
                    "age": 32,
                    "gender": "female",
                    "company": "PORTALIS",
                    "email": "antoniahale@portalis.com",
                    "latitude": -78.973802,
                    "longitude": -63.241946
                },
                {
                    "_id": "5a796b90317b616ba7873cab",
                    "index": 1,
                    "age": 38,
                    "gender": "female",
                    "company": "VOIPA",
                    "email": "antoniahale@voipa.com",
                    "latitude": 63.880419,
                    "longitude": 48.200203
                },
                {
                    "_id": "5a796b9050e1000147dcae4c",
                    "index": 2,
                    "age": 26,
                    "gender": "female",
                    "company": "BICOL",
                    "email": "antoniahale@bicol.com",
                    "latitude": 70.047987,
                    "longitude": 55.49047
                },
                {
                    "_id": "5a796b90dd9ee33629bbf25f",
                    "index": 3,
                    "age": 35,
                    "gender": "female",
                    "company": "ISOLOGIX",
                    "email": "antoniahale@isologix.com",
                    "latitude": -37.25965,
                    "longitude": -128.163099
                },
                {
                    "_id": "5a796b9068e1e95b6761411c",
                    "index": 4,
                    "age": 36,
                    "gender": "female",
                    "company": "COMCUR",
                    "email": "antoniahale@comcur.com",
                    "latitude": 10.149394,
                    "longitude": 108.436264
                },
                {
                    "_id": "5a796b90065718c34a8ecf69",
                    "index": 5,
                    "age": 29,
                    "gender": "female",
                    "company": "ZILLAN",
                    "email": "antoniahale@zillan.com",
                    "latitude": 14.150373,
                    "longitude": -142.782742
                },
                {
                    "_id": "5a796b9032d57e0033ebceb4",
                    "index": 6,
                    "age": 32,
                    "gender": "female",
                    "company": "NIQUENT",
                    "email": "antoniahale@niquent.com",
                    "latitude": -38.16848,
                    "longitude": 88.713481
                },
                {
                    "_id": "5a796b907a9a635ccdfb60f5",
                    "index": 7,
                    "age": 34,
                    "gender": "female",
                    "company": "EWEVILLE",
                    "email": "antoniahale@eweville.com",
                    "latitude": -50.119242,
                    "longitude": -154.381052
                },
                {
                    "_id": "5a796b90727c579b5e3eeaa3",
                    "index": 8,
                    "age": 23,
                    "gender": "female",
                    "company": "QNEKT",
                    "email": "antoniahale@qnekt.com",
                    "latitude": 18.039039,
                    "longitude": -119.899369
                },
                {
                    "_id": "5a796b90f786bca48d138c36",
                    "index": 9,
                    "age": 40,
                    "gender": "female",
                    "company": "TWIIST",
                    "email": "antoniahale@twiist.com",
                    "latitude": 49.176946,
                    "longitude": -116.794845
                },
                {
                    "_id": "5a796b90c2353b8fc2586e2e",
                    "index": 10,
                    "age": 29,
                    "gender": "female",
                    "company": "KYAGURU",
                    "email": "antoniahale@kyaguru.com",
                    "latitude": -72.548683,
                    "longitude": 52.975302
                },
                {
                    "_id": "5a796b90bf0167f39d8d3847",
                    "index": 11,
                    "age": 28,
                    "gender": "female",
                    "company": "ISOTRACK",
                    "email": "antoniahale@isotrack.com",
                    "latitude": -13.858277,
                    "longitude": 151.83178
                },
                {
                    "_id": "5a796b90455f2c7f7d49149c",
                    "index": 12,
                    "age": 33,
                    "gender": "female",
                    "company": "EZENT",
                    "email": "antoniahale@ezent.com",
                    "latitude": 37.659027,
                    "longitude": -107.570536
                },
                {
                    "_id": "5a796b90ff7c480667c42c59",
                    "index": 13,
                    "age": 26,
                    "gender": "female",
                    "company": "NORSUL",
                    "email": "antoniahale@norsul.com",
                    "latitude": -31.423659,
                    "longitude": -79.153523
                },
                {
                    "_id": "5a796b904dc8e5e4266d7cd2",
                    "index": 14,
                    "age": 40,
                    "gender": "female",
                    "company": "ANACHO",
                    "email": "antoniahale@anacho.com",
                    "latitude": -77.937211,
                    "longitude": -26.958244
                },
                {
                    "_id": "5a796b9035fb6e3feea9f447",
                    "index": 15,
                    "age": 28,
                    "gender": "female",
                    "company": "HATOLOGY",
                    "email": "antoniahale@hatology.com",
                    "latitude": -69.957923,
                    "longitude": -153.783388
                },
                {
                    "_id": "5a796b90f98794beb54611f7",
                    "index": 16,
                    "age": 25,
                    "gender": "female",
                    "company": "NETILITY",
                    "email": "antoniahale@netility.com",
                    "latitude": -69.866693,
                    "longitude": 51.949697
                },
                {
                    "_id": "5a796b90864700d9fa054b1e",
                    "index": 17,
                    "age": 32,
                    "gender": "female",
                    "company": "MELBACOR",
                    "email": "antoniahale@melbacor.com",
                    "latitude": -13.34437,
                    "longitude": -150.535883
                },
                {
                    "_id": "5a796b90f4bbced0cf3a4539",
                    "index": 18,
                    "age": 22,
                    "gender": "female",
                    "company": "DOGNOSIS",
                    "email": "antoniahale@dognosis.com",
                    "latitude": 59.442016,
                    "longitude": -81.72754
                },
                {
                    "_id": "5a796b90b32b7512c661802c",
                    "index": 19,
                    "age": 31,
                    "gender": "female",
                    "company": "NURPLEX",
                    "email": "antoniahale@nurplex.com",
                    "latitude": -28.267575,
                    "longitude": 115.36104
                }
            ];

        var linq = Enumerable;
        var obj = linq.from($scope.users).where(function (obj, index) {
            if (obj.age == 40) {
                console.log(obj);
                return obj;
            }
        }).toArray();



    }).directive('onlyDigits', function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function (scope, element, attr, ctrl) {

                function inputValue(val) {

                    if (val) {
                        var digits = val.replace(/[^0-9]/g, '');
                        if (digits !== val) {
                            angular.element(element).css("border-color", "red");
                            console.log(angular.element(element).siblings("#controlError").html("<i class='fa fa-exclamation-triangle'><span id='errorText'> Digits only !! </span></i>"));
                            // ctrl.$setViewValue(digits);
                            // ctrl.$render();
                        }
                        else {
                            console.log(angular.element(element).siblings("#controlError").html(""));
                            angular.element(element).css("border-color", "");
                        }
                        return parseInt(digits, 10);
                    }

                    console.log(angular.element(element).siblings("#controlError").html(""));
                    angular.element(element).css("border-color", "");
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