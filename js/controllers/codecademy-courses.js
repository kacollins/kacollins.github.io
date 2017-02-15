app.controller("codecademyCoursesCtrl", function ($scope)
{
    loadJSON("codecademy-courses", false, function (response)
    {
        // Parse JSON string into object
        $scope.codecademyCourses = JSON.parse(response);

        $scope.coursesCompletedCount = $scope.codecademyCourses.filter(function(course){
            return course.status == "Completed";
        }).length;

        $scope.coursesInProgressCount = $scope.codecademyCourses.filter(function(course){
            return course.status == "In Progress";
        }).length;
    });
});
