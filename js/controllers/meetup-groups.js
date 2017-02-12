app.controller("meetupGroupsCtrl", function ($scope)
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
