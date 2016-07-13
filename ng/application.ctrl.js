angular.module('app')
.controller('ApplicationCtrl', function($scope, UserSvc, $location) {
	$scope.$on('login', function(_, user) {
		$scope.currentUser = user;
	});
	$scope.logout = function() {
		$scope.currentUser = undefined;
		UserSvc.logout();
	};
	$scope.changeView = function(view) {
		$location.path(view);
	}
})

