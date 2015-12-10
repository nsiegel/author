app.controller('signupCtrl', function($scope){
	$scope.user = {};
	$scope.update = function(user){
		$scope.user = angular.copy(user);
		console.log($scope.user);
	};
})