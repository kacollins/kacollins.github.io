angular.module("Portfolio").directive('coursesInProgress', function ()
{
    return {
        replace: true,
        restrict: "E",
        templateUrl: "views/directives/courses-in-progress.html"
    };
});
