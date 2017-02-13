angular.module("Portfolio").directive('coursesCompleted', function ()
{
    return {
        replace: true,
        restrict: "E",
        templateUrl: "views/directives/courses-completed.html"
    };
});
