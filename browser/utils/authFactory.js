app.factory('authFactory', function($http, $state){
	var auth = {};
	var currentUser;
	auth.signup = function (credentials){
		$http.post

	};

	auth.login = function(credentials){
		return $http.post('/api/users/login', credentials).then(function(data){
					var user = data.data;
					currentUser = user;
					return user;
		}).then(function(user) {
      if (user) {
        $state.go('users');
      }
      // TODO add something if user is not found
    })
	};
	return auth;
})
