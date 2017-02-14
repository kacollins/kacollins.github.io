app.controller("meetupEventsUpcomingCtrl", function ($scope, $http)
{
    var urlForUpcomingMeetups = "https://api.meetup.com/2/events?member_id=189408334&offset=0&format=json&limited_events=False&rsvp=yes&photo-host=public&page=20&fields=&order=time&status=upcoming&desc=false&sig_id=189408334&sig=7bd8f3bc4179f5235ab1d914c7f36e9ba6da3370";

    $http.jsonp(urlForUpcomingMeetups + "&callback=JSON_CALLBACK")
        .success(function (data)
        {
            $scope.upcomingMeetups = data.results;

            $scope.upcomingMeetups.forEach(function (event)
            {
                event.group.name = event.group.name.replace(" Group Meetup", "");
            });
        });
});
