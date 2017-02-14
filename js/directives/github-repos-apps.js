angular.module("Portfolio").directive('githubReposApps', function ()
{
    return {
        replace: true,
        restrict: "E",
        templateUrl: "views/directives/github-repos-apps.html"
    };
});
