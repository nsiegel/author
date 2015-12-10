app.controller('signupCtrl', function($scope, authFactory){
  $scope.signup = function(){
		authFactory.signup($scope.user).then(function(credentials){

		})
	}
})
