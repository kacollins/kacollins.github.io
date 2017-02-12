angular.module("Portfolio").directive('meetupGroupsVolunteer', function ()
{
    return {
        replace: true,
        restrict: "E",
        templateUrl: "views/directives/meetup-groups-volunteer.html"
    };
});
