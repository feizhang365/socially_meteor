  	// routes config
  	angular.module('socially').config(function($urlRouterProvider, $stateProvider, $locationProvider){
      $locationProvider.html5Mode(true);
      $stateProvider
        .state('parties', {
          url: '/parties',
          templateUrl: 'client/view/parties_list.html',
          controller: 'PartiesListCtrl'
        })
        .state('partyDetails', {
          url: '/parties/:partyId',
          templateUrl: 'client/view/parties_detail.html',
          controller: 'PartyDetailsCtrl'
        });
 
        $urlRouterProvider.otherwise("/parties");
    });