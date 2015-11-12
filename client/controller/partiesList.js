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