angular.module('Portfolio').config(function ($routeProvider)
{
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html'
        })
        .when("/completed", {
            templateUrl: "views/completed.html"
        })
        .when("/in-progress", {
            templateUrl: "views/in-progress.html"
        })
        .when("/meetup-groups", {
            templateUrl: "views/meetup-groups.html"
        })
        .otherwise({redirectTo: '/'});
});
