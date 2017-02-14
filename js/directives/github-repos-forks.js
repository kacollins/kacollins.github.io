angular.module("Portfolio").directive('githubReposForks', function ()
{
    return {
        replace: true,
        restrict: "E",
        templateUrl: "views/directives/github-repos-forks.html"
    };
});
