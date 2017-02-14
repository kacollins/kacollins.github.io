app.controller("meetupGroupsVolunteerCtrl", function ($scope)
{
    loadJSON("meetup-groups", false, function (response)
    {
        // Parse JSON string into object
        var meetupGroups = JSON.parse(response);

        meetupGroups.forEach(function (group)
        {
            group.volunteerSortOrder = group.role.indexOf('Organizer');
        });

        $scope.volunteerGroups = meetupGroups.filter(function (group)
        {
            return group.volunteerSortOrder >= 0;
        });
    });
});
