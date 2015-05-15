var demoApp = angular.module("demoApp", ['ngRoute']);


demoApp.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
   
    $routeProvider
        .when("/", {
            templateUrl: "/app/home/homeIndex.html",
            controller: "homeIndexController"

        })

    $routeProvider
        .when("/page2", {
            templateUrl: "/app/page2/page2.html",
            controller: "page2Controller"

        })

    $routeProvider.otherwise({ redirectTo: "/" });



});
