var developerControllers = angular.module('developerControllers', []);
developerControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/dummyJson.json').success(function(data) {
		$scope.developers = data;
		$scope.developerOrder = "firstName";
	});
}]);