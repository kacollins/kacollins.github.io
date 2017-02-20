app.controller("coursesCompletedCtrl", function ($scope, $resource)
{
    var url = "https://www.codeschool.com/users/kacollins.json";

    var CodeSchoolAPI = $resource(url,
        {callback: "JSON_CALLBACK"},
        {get: {method: "JSONP"}});

    CodeSchoolAPI.get({}, function (data)
    {
        $scope.coursesCompleted = data.courses.completed;
        $scope.coursesCompletedCount = $scope.coursesCompleted.length;

        var regex = /large_badge\/(\d+)\//;

        $scope.coursesCompleted.forEach(function(course){
            var match = regex.exec(course.badge);

            if (match)
            {
                course.badge_url = 'https://www.codeschool.com/users/kacollins/badges/' + match[1];
            }
        });
    });
});
