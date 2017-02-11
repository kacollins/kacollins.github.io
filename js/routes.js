angular.module('Portfolio').config(function ($routeProvider)
{
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html'
        })
        .when("/in-progress", {
            templateUrl: "views/in-progress.html"
        })
        .when("/completed", {
            templateUrl: "views/completed.html"
        })
        .otherwise({redirectTo: '/'});
});
