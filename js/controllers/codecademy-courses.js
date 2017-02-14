app.controller("codecademyCoursesCtrl", function ($scope)
{
    loadJSON("codecademy-courses", false, function (response)
    {
        // Parse JSON string into object
        $scope.codecademyCourses = JSON.parse(response);
    });
});
