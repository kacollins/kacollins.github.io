angular.module("Portfolio").directive('meetupGroupsMember', function ()
{
    return {
        replace: true,
        restrict: "E",
        templateUrl: "views/directives/meetup-groups-member.html"
    };
});
