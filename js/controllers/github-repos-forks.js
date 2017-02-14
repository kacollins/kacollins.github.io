app.controller("githubReposForksCtrl", function ($scope, $http)
{
    var url = "https://api.github.com/users/kacollins/repos";

    $http.get(url).success(function (data)
    {
        $scope.forks = data.filter(function (repo)
        {
            return repo.fork
                && repo.name != "presentations" && repo.name != "user-groups" //barely did anything on these
                && !(repo.homepage && repo.homepage != ''); //don't include websites
        });
    });
});
