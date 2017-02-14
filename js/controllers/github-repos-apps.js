app.controller("githubReposAppsCtrl", function ($scope, $http)
{
    var url = "https://api.github.com/users/kacollins/repos";

    $http.get(url).success(function (data)
    {
        $scope.apps = data.filter(function (repo)
        {
            return !repo.fork
                && (repo.language == "C#" || (repo.description && repo.description.toLowerCase().indexOf("linqpad") >= 0))
                && !(repo.homepage && repo.homepage != ''); //don't include websites
        });
    });
});
