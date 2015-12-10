app.controller('signupCtrl', function($scope, authFactory){
  $scope.login = function(){
		authFactory.login($scope.user).then(function(credentials){

		})
	}
})
