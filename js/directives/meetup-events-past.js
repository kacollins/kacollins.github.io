angular.module("Portfolio").directive('meetupEventsPast', function ()
{
    return {
        replace: true,
        restrict: "E",
        templateUrl: "views/directives/meetup-events-past.html"
    };
});
