app.controller('loginCtrl', function($scope, authFactory){
	$scope.login = function(){
		authFactory.login($scope.user).then(function(credentials){

		})
	}
})