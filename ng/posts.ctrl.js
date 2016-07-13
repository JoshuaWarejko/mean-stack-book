angular.module('app')
.controller('PostsCtrl', function($scope, PostsSvc) {

	// $scope.$on('login', function(_,user) {
	// 	$scope.currentLogin = user;
	// });
	$scope.addPost = function() {
		if(!$scope.currentUser) {
			window.alert("Must be logged in to post!");
		} else if($scope.postBody) {
			PostsSvc.create({
				username: $scope.currentUser.username,
				textbody: $scope.postBody
			})
			.then(function (post) {
				$scope.posts.unshift(post);
				$scope.postBody = null;
			});
		}
	}
	PostsSvc.fetch()
	.then(function(posts) {
		$scope.posts = posts.data;
	});
});