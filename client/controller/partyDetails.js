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