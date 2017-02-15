app.controller("freecodecampSectionsCtrl", function ($scope)
{
    loadJSON("freecodecamp-sections", false, function (response)
    {
        // Parse JSON string into object
        $scope.freecodecampSections = JSON.parse(response);

        $scope.sectionsCompletedCount = $scope.freecodecampSections.filter(function(section){
            return section.status == "Completed";
        }).length;

        $scope.sectionsInProgressCount = $scope.freecodecampSections.filter(function(section){
            return section.status == "In Progress";
        }).length;
    });
});
