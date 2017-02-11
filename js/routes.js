angular.module('Portfolio').config(function ($routeProvider)
{
    $routeProvider
        .when("/in-progress", {
            templateUrl: "views/in-progress.html"
        })
        .when("/completed", {
            templateUrl: "views/completed.html"
        });
});
