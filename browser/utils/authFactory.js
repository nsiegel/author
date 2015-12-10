app.factory('authFactory', function($http){
	var auth = {};
	var currentUser;
	auth.signup = function (credentials){
		$http.post

	};

	auth.login = function(credentials){
		return $http.post('auth/login', credentials).then(function(data){
					var user = data.data;
					currentUser = user;
					return user;
		})
	};
	return auth;
})