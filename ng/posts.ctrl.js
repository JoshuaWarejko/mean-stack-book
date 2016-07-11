angular.module('app')
.controller('PostsCtrl', function($scope, PostsSvc) {

	PostsSvc.fetch()
	.then(function(posts) {
		$scope.posts = posts.data;
	});

	$scope.addPost = function() {
		if($scope.postBody) {
			PostsSvc.create({
				username: 'dickeyxxx',
				textbody: $scope.postBody
			})
			.then(function (post) {
				$scope.posts.unshift(post);
				$scope.postBody = null;
			});
		}
	}
});