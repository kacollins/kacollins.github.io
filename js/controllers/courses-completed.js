app.controller("coursesCompletedCtrl", function ($scope, $resource)
{
    console.log("coursesCompletedCtrl");
    var url = "https://www.codeschool.com/users/kacollins.json";

    var CodeSchoolAPI = $resource(url,
        {callback: "JSON_CALLBACK"},
        {get: {method: "JSONP"}});

    CodeSchoolAPI.get({}, function (data)
    {
        $scope.coursesCompleted = data.courses.completed;
    });
});
