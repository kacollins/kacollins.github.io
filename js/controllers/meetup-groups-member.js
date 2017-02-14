app.controller("meetupGroupsMemberCtrl", function ($scope)
{
    loadJSON("meetup-groups", false, function (response)
    {
        // Parse JSON string into object
        var meetupGroups = JSON.parse(response);

        $scope.memberGroups = meetupGroups.filter(function (group)
        {
            return group.role.indexOf('Organizer') < 0;
        });
    });
});
