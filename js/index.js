var app = angular.module("Portfolio", ["ngResource", "ngRoute"]);

app.controller("inProgressCtrl", function ($scope, $resource) {
    var url = "https://www.codeschool.com/users/kacollins.json";

    var CodeSchoolAPI = $resource(url,
        {callback: "JSON_CALLBACK"},
        {get: {method: "JSONP"}});

    CodeSchoolAPI.get({}, function (data)
    {
        var coursesInProgress = data.courses.in_progress
            .map(function (course)
            {
                return course.url;
            });

        $scope.levelsCompleted = data.badges
            .filter(function (badge)
            {
                return badge.name.indexOf("Level") >= 0
                    && coursesInProgress.indexOf(badge.course_url) >= 0;
            });
    });
});

app.controller("completedCtrl", function ($scope, $resource) {
    var url = "https://www.codeschool.com/users/kacollins.json";

    var CodeSchoolAPI = $resource(url,
        {callback: "JSON_CALLBACK"},
        {get: {method: "JSONP"}});

    CodeSchoolAPI.get({}, function (data)
    {
        $scope.coursesCompleted = data.courses.completed;
    });
});
