app.controller("githubReposWebsitesCtrl", function ($scope, $http)
{
    var url = "https://api.github.com/users/kacollins/repos";

    $http.get(url).success(function (data)
    {
        $scope.websites = data.filter(function (repo)
        {
            return repo.homepage && repo.homepage != '';
        });

    });
});
