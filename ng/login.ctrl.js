angular.module('app')
.controller('LoginCtrl', function($scope, UserSvc) {
	$scope.login = function (username, password) {
		UserSvc.login(username, password)
		.then(function (res) {
			$scope.$emit('login', res.data);
			$scope.username = undefined;
			$scope.password = undefined;
		});
	};
})