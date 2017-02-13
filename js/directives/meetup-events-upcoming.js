angular.module("Portfolio").directive('meetupEventsUpcoming', function ()
{
    return {
        replace: true,
        restrict: "E",
        templateUrl: "views/directives/meetup-events-upcoming.html"
    };
});
