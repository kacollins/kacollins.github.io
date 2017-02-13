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
        .when("/meetup-events", {
            templateUrl: "views/meetup-events.html"
        })
        .when("/meetup-events-past", {
            templateUrl: "views/meetup-events-past.html"
        })
        .when("/meetup-events-upcoming", {
            templateUrl: "views/meetup-events-upcoming.html"
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
