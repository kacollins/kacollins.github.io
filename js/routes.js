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
        .when("/meetup-groups-member", {
            templateUrl: "views/meetup-groups-member.html"
        })
        .when("/meetup-groups-volunteer", {
            templateUrl: "views/meetup-groups-volunteer.html"
        })
        .otherwise({redirectTo: '/'});
});
