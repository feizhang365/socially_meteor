Parties = new Mongo.Collection("parties");
if (Meteor.isClient) {
  	angular.module('socially',['angular-meteor','ui.router']);

  	// routes config
  	angular.module('socially').config(function($urlRouterProvider, $stateProvider, $locationProvider){
      $locationProvider.html5Mode(true);
      $stateProvider
        .state('parties', {
          url: '/parties',
          templateUrl: 'parties_list.html',
          controller: 'PartiesListCtrl'
        })
        .state('partyDetails', {
          url: '/parties/:partyId',
          templateUrl: 'parties_detail.html',
          controller: 'PartyDetailsCtrl'
        });
 
        $urlRouterProvider.otherwise("/parties");
    });

  	// socially controller
    angular.module('socially').controller('PartiesListCtrl', ['$scope','$meteor', function ($scope,$meteor) {
    	$scope.parties = $meteor.collection(Parties);
	    $scope.remove = function(party){
      		//$scope.parties.splice($scope.parties.indexOf(party), 1);
      		$scope.parties.remove(party);
    	};
    	$scope.removeAll = function(){
    		$scope.parties.remove();
    	}
  	}]);
    //Parties details 
    angular.module("socially").controller("PartyDetailsCtrl", ['$scope', '$stateParams','$meteor',function($scope, $stateParams, $meteor) {
    	console.log($stateParams);
    	// $scope.partyId = $stateParams.partyId;
    	$scope.party = $meteor.object(Parties,$stateParams.partyId,false);
    	console.log($scope.party);

    	$scope.save = function() {
	      // $scope.party.save();
	        $scope.party.save().then(function(numberOfDocs){
        		console.log('save success doc affected ', numberOfDocs);
		    }, function(error){
		        console.log('save error', error);
		    });
	    };
	 
	    $scope.reset = function() {
	      $scope.party.reset();
	    };
  	}]);
}else{
  Meteor.startup(function () {
    if (Parties.find().count() === 0) {
      var parties = [
        {'name': 'Dubstep-Free Zone',
          'description': 'Fast just got faster with Nexus S.'},
        {'name': 'All dubstep all the time',
          'description': 'ttttttttttttt'},
        {'name': 'Savage lounging',
          'description': 'Leisure suit required. And only fiercest manners.'}
      ];
      for (var i = 0; i < parties.length; i++)
        Parties.insert(parties[i]);
    }
  });
}