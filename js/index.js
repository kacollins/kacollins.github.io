var app = angular.module("Portfolio", ["ngResource", "ngRoute"]);

app.controller("mainCtrl", function ($scope, $resource)
{
    console.log("mainCtrl");
});

app.controller("completedCtrl", function ($scope, $resource)
{
    var url = "https://www.codeschool.com/users/kacollins.json";

    var CodeSchoolAPI = $resource(url,
        {callback: "JSON_CALLBACK"},
        {get: {method: "JSONP"}});

    CodeSchoolAPI.get({}, function (data)
    {
        $scope.coursesCompleted = data.courses.completed;
    });
});

app.controller("inProgressCtrl", function ($scope, $resource)
{
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

app.controller("meetupGroupsCtrl", function ($scope, $resource)
{
    loadJSON("meetup-groups", false, function (response)
    {
        // Parse JSON string into object
        var meetupGroups = JSON.parse(response);

        meetupGroups.forEach(function (group)
        {
            group.organizerSortOrder = group.role.indexOf('Organizer');
        });

        $scope.organizerGroups = meetupGroups.filter(function (group)
        {
            return group.organizerSortOrder >= 0;
        });

        $scope.attendeeGroups = meetupGroups.filter(function (group)
        {
            return group.organizerSortOrder < 0;
        });
    });
});

function loadJSON(filename, async, callback)
{
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data/' + filename + '.json', async);
    xobj.onreadystatechange = function ()
    {
        if (xobj.readyState == 4 && xobj.status == "200")
        {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
