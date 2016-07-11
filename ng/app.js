var app = angular.module('app', []);

app.controller('PostsCtrl', function($scope, PostsSvc) {

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

app.service('PostsSvc', function($http) {
	this.fetch = function() {
		return $http.get('/api/posts');
	};
	this.create = function(post) {
		return $http.post('/api/posts', post);
	};
}) 