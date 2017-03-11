app.controller("coursesInProgressCtrl", function ($scope, $resource)
{
    var url = "https://www.codeschool.com/users/kacollins.json";

    var CodeSchoolAPI = $resource(url,
        {callback: "JSON_CALLBACK"},
        {get: {method: "JSONP"}});

    CodeSchoolAPI.get({}, function (data)
    {
        var coursesInProgress = getCoursesInProgress(data);

        //Don't show courses that I just barely started and then decided not to do
        $scope.coursesInProgressWithLevelsCompleted = coursesInProgress.filter(function (course)
        {
            return course.levelsCompleted.length > 0;
        });

        $scope.coursesInProgressCount = $scope.coursesInProgressWithLevelsCompleted.length;
    });
});

var getBadgeLevel = function (badge, course)
{
    var regex = /Level \d+/;
    var level = "";

    var match = regex.exec(badge.name);

    if (match)
    {
        level = match[0];
    }
    else
    {
        level = badge.name.replace(" on " + course.title, "");
    }

    return level;
};

var getBadgeURL = function (badgeImageURL)
{
    var regex = /large_badge\/(\d+)\//;
    var badgeURL = "";

    var match = regex.exec(badgeImageURL);

    if (match)
    {
        //match[0] is the entire match. match[1] is the capturing group (the badge ID)
        badgeURL = 'https://www.codeschool.com/users/kacollins/badges/' + match[1];
    }

    return badgeURL;
};

var getCoursesInProgress = function (data)
{
    var coursesInProgress = data.courses.in_progress;

    coursesInProgress.forEach(function (course)
    {
        course.levelsCompleted = data.badges
            .filter(function (badge)
            {
                return badge.name.indexOf("Level") >= 0
                    && badge.course_url == course.url;
            });

        course.levelsCompleted.map(function (badgeForCompletedLevel)
        {
            badgeForCompletedLevel.level = getBadgeLevel(badgeForCompletedLevel, course);
            badgeForCompletedLevel.badge_url = getBadgeURL(badgeForCompletedLevel.badge);

            return badgeForCompletedLevel;
        });
    });

    return coursesInProgress;
};
