angular.module("Portfolio").directive('githubReposWebsites', function ()
{
    return {
        replace: true,
        restrict: "E",
        templateUrl: "views/directives/github-repos-websites.html"
    };
});
