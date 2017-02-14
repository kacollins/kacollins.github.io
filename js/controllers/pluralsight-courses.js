app.controller("pluralsightCoursesCtrl", function ($scope)
{
    loadJSON("pluralsight-courses", false, function (response)
    {
        // Parse JSON string into object
        $scope.pluralsightCourses = JSON.parse(response);
    });
});
