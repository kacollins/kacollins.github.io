app.controller("skillsCtrl", function ($scope)
{
    loadJSON("skills", false, function (response)
    {
        // Parse JSON string into object
        $scope.skills = JSON.parse(response);
    });
});
