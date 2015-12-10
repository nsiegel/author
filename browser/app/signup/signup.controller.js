app.controller('signupCtrl', function($scope, authFactory){
	$scope.signup = authFactory.signup;
})