app.factory('authFactory', function($http, $state){
	var auth = {};
	var currentUser;
	auth.signup = function (credentials){
		return $http.post('api/users/signup/entry', credentials)
      .then(function(data) {
        console.log(data);
        var user = data.data;
        currentUser = user;
        return user;
      })
      .then(function(user){
        if (currentUser) {
          console.log(currentUser)
          // $state.go('users');
        }
        // deal with invalid input
      })

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

  auth.loggedIn = function(user){
    
  }

	return auth;
})
