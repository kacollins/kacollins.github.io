app.controller("meetupEventsPastCtrl", function ($scope, $http)
{
    var urlForPastMeetups = "https://api.meetup.com/2/events?member_id=189408334&offset=0&format=json&limited_events=False&rsvp=yes&photo-host=public&page=20&fields=&order=time&status=past&desc=true&sig_id=189408334&sig=ceb9ffcc66920f6ee33449fcaadaf69e1d9ecf62";

    $http.jsonp(urlForPastMeetups + "&callback=JSON_CALLBACK")
        .success(function (data)
        {
            $scope.pastMeetups = data.results.filter(function (event)
            {
                return event.group.name.indexOf("Group Meetup") < 0;
            });
        });
});
