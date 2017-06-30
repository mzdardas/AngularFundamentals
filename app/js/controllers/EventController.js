'use strict';

var EventController = function($scope){
    $scope.event = {
        name: 'Angular Boot Camp',
        date: '6/30/2017',
        time: '3:00 PM',
        location: {
            address: '270 Park Avenue',
            city: 'Manhattan, New York City',
            province: 'NY'
        },
        imageUrl: '/img/angularjs-logo.png',
        sessions: [
            {name: 'Directives Masterclass'},
            {name: 'Scopes for fun and profit'},
            {name: 'Well Behaved Controllers'}
        ]
    }
};

eventsApp.controller('EventController', ["$scope", EventController]);