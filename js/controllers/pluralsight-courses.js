app.controller("pluralsightCoursesCtrl", function ($scope)
{
    loadJSON("pluralsight-courses", false, function (response)
    {
        // Parse JSON string into object
        $scope.pluralsightCourses = JSON.parse(response);

        $scope.coursesCompletedCount = $scope.pluralsightCourses.filter(function(course){
            return course.status == "Completed";
        }).length;

        $scope.coursesInProgressCount = $scope.pluralsightCourses.filter(function(course){
            return course.status == "In Progress";
        }).length;
    });
});
