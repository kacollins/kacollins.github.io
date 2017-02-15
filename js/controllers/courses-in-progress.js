app.controller("coursesInProgressCtrl", function ($scope, $resource)
{
    var url = "https://www.codeschool.com/users/kacollins.json";

    var CodeSchoolAPI = $resource(url,
        {callback: "JSON_CALLBACK"},
        {get: {method: "JSONP"}});

    CodeSchoolAPI.get({}, function (data)
    {
        var coursesInProgressWithLevelsCompleted = data.courses.in_progress;

        coursesInProgressWithLevelsCompleted.forEach(function (course)
        {
            course.levelsCompleted = data.badges
                .filter(function (badge)
                {
                    return badge.name.indexOf("Level") >= 0
                        && badge.course_url == course.url;
                });

            course.levelsCompleted.forEach(function(badge){
                badge.level = badge.name.replace(" on " + course.title, "");
            });
        });

        $scope.coursesInProgressWithLevelsCompleted = coursesInProgressWithLevelsCompleted.filter(function (course)
        {
            return course.levelsCompleted.length > 0;
        });

        $scope.coursesInProgressCount = $scope.coursesInProgressWithLevelsCompleted.length;
    });
});
