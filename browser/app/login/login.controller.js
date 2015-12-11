app.controller('loginCtrl', function($scope, authFactory){
	$scope.login = function(){
		authFactory.login($scope.user).then(function(credentials){

		})
	}
})

/*
Client Id
	1082091964019-am0g341nhf9o48felfmq5kk6mcamlpmk.apps.googleusercontent.com

client secret
	mi4HtQqkRYBWqh_EFeVcWdjk

*/