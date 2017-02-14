angular.module('Portfolio').config(function ($routeProvider)
{
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html'
        })
        .when("/codecademy-courses", {
            templateUrl: "views/codecademy-courses.html"
        })
        .when("/code-school", {
            templateUrl: "views/code-school.html"
        })
        .when("/courses-completed", {
            templateUrl: "views/courses-completed.html"
        })
        .when("/courses-in-progress", {
            templateUrl: "views/courses-in-progress.html"
        })
        .when("/github-repos", {
            templateUrl: "views/github-repos.html"
        })
        .when("/github-repos-websites", {
            templateUrl: "views/github-repos-websites.html"
        })
        .when("/github-repos-apps", {
            templateUrl: "views/github-repos-apps.html"
        })
        .when("/github-repos-forks", {
            templateUrl: "views/github-repos-forks.html"
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
