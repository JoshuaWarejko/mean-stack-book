angular.module('app')
.controller('PostsCtrl', function($scope, PostsSvc) {

	$scope.addPost = function() {
		if($scope.postBody) {
			PostsSvc.create({
				username: 'joshww13',
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