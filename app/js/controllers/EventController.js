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
            {
                name: 'Directives Masterclass',
                creatorName:'Bob Smith',
                duration:'1 hr',
                level:'Advanced',
                abstract:'In this session you will learn the ins and outs of directives!',
                upVoteCount: 0
            },
            {
                name: 'Scopes for fun and profit',
                creatorName:'John Doe',
                duration:'30 mins',
                level:'Introductory',
                abstract:'This session will look closer at scopes. Learn what they do, etc...',
                upVoteCount: 0
            },
            {
                name: 'Well Behaved Controllers',
                creatorName:'Jane Doe',
                duration:'2 hrs',
                level:'Intermediate',
                abstract:'Controllers are essential components that allow Angular to do what it does',
                upVoteCount: 0
            }
        ]
    }

    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    }

    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    }

};

eventsApp.controller('EventController', ["$scope", EventController]);