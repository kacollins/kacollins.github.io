app.controller("freecodecampSectionsCtrl", function ($scope)
{
    loadJSON("freecodecamp-sections", false, function (response)
    {
        // Parse JSON string into object
        $scope.freecodecampSections = JSON.parse(response);
    });
});
