angular.module("app",["ngRoute"]);var app=angular.module("app",[]);app.controller("PostsCtrl",["$scope","PostsSvc",function(t,o){o.fetch().then(function(o){t.posts=o.data}),t.addPost=function(){t.postBody&&o.create({username:"dickeyxxx",textbody:t.postBody}).then(function(o){t.posts.unshift(o),t.postBody=null})}}]),app.service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(o){return t.post("/api/posts",o)}}]),angular.module("app").controller("LoginCtrl",["$scope",function(t){}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,o){o.fetch().then(function(o){t.posts=o.data}),t.addPost=function(){t.postBody&&o.create({username:"dickeyxxx",textbody:t.postBody}).then(function(o){t.posts.unshift(o),t.postBody=null})}}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(o){return t.post("/api/posts",o)},console.error("error!")}]),angular.module("app").controller("RegisterCtrl",["$scope",function(t){}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"})}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcC5qcyIsImxvZ2luLmN0cmwuanMiLCJwb3N0cy5jdHJsLmpzIiwicG9zdHMuc3ZjLmpzIiwicmVnaXN0ZXIuY3RybC5qcyIsInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiYXBwIiwiY29udHJvbGxlciIsIiRzY29wZSIsIlBvc3RzU3ZjIiwiZmV0Y2giLCJ0aGVuIiwicG9zdHMiLCJkYXRhIiwiYWRkUG9zdCIsInBvc3RCb2R5IiwiY3JlYXRlIiwidXNlcm5hbWUiLCJ0ZXh0Ym9keSIsInBvc3QiLCJ1bnNoaWZ0Iiwic2VydmljZSIsIiRodHRwIiwidGhpcyIsImdldCIsImNvbnNvbGUiLCJlcnJvciIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBQUMsT0FBQSxPQUNBLFdDREEsSUFBQUMsS0FBQUYsUUFBQUMsT0FBQSxTQUVBQyxLQUFBQyxXQUFBLGFBQUEsU0FBQSxXQUFBLFNBQUFDLEVBQUFDLEdBRUFBLEVBQUFDLFFBQ0FDLEtBQUEsU0FBQUMsR0FDQUosRUFBQUksTUFBQUEsRUFBQUMsT0FHQUwsRUFBQU0sUUFBQSxXQUNBTixFQUFBTyxVQUNBTixFQUFBTyxRQUNBQyxTQUFBLFlBQ0FDLFNBQUFWLEVBQUFPLFdBRUFKLEtBQUEsU0FBQVEsR0FDQVgsRUFBQUksTUFBQVEsUUFBQUQsR0FDQVgsRUFBQU8sU0FBQSxXQU1BVCxJQUFBZSxRQUFBLFlBQUEsUUFBQSxTQUFBQyxHQUNBQyxLQUFBYixNQUFBLFdBQ0EsTUFBQVksR0FBQUUsSUFBQSxlQUVBRCxLQUFBUCxPQUFBLFNBQUFHLEdBQ0EsTUFBQUcsR0FBQUgsS0FBQSxhQUFBQSxPQzVCQWYsUUFBQUMsT0FBQSxPQUNBRSxXQUFBLGFBQUEsU0FBQSxTQUFBQyxPQ0RBSixRQUFBQyxPQUFBLE9BQ0FFLFdBQUEsYUFBQSxTQUFBLFdBQUEsU0FBQUMsRUFBQUMsR0FFQUEsRUFBQUMsUUFDQUMsS0FBQSxTQUFBQyxHQUNBSixFQUFBSSxNQUFBQSxFQUFBQyxPQUdBTCxFQUFBTSxRQUFBLFdBQ0FOLEVBQUFPLFVBQ0FOLEVBQUFPLFFBQ0FDLFNBQUEsWUFDQUMsU0FBQVYsRUFBQU8sV0FFQUosS0FBQSxTQUFBUSxHQUNBWCxFQUFBSSxNQUFBUSxRQUFBRCxHQUNBWCxFQUFBTyxTQUFBLFdDaEJBWCxRQUFBQyxPQUFBLE9BQ0FnQixRQUFBLFlBQUEsUUFBQSxTQUFBQyxHQUNBQyxLQUFBYixNQUFBLFdBQ0EsTUFBQVksR0FBQUUsSUFBQSxlQUVBRCxLQUFBUCxPQUFBLFNBQUFHLEdBQ0EsTUFBQUcsR0FBQUgsS0FBQSxhQUFBQSxJQUVBTSxRQUFBQyxNQUFBLGFDUkF0QixRQUFBQyxPQUFBLE9BQ0FFLFdBQUEsZ0JBQUEsU0FBQSxTQUFBQyxPQ0NBSixRQUFBQyxPQUFBLE9BQ0FzQixRQUFBLGlCQUFBLFNBQUFDLEdBQ0FBLEVBQ0FDLEtBQUEsS0FBQXRCLFdBQUEsWUFBQXVCLFlBQUEsZUFDQUQsS0FBQSxhQUFBdEIsV0FBQSxlQUFBdUIsWUFBQSxrQkFDQUQsS0FBQSxVQUFBdEIsV0FBQSxZQUFBdUIsWUFBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xuXHQnbmdSb3V0ZSdcbl0pIiwidmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXSk7XG5cbmFwcC5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIFBvc3RzU3ZjKSB7XG5cblx0UG9zdHNTdmMuZmV0Y2goKVxuXHQudGhlbihmdW5jdGlvbihwb3N0cykge1xuXHRcdCRzY29wZS5wb3N0cyA9IHBvc3RzLmRhdGE7XG5cdH0pO1xuXG5cdCRzY29wZS5hZGRQb3N0ID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoJHNjb3BlLnBvc3RCb2R5KSB7XG5cdFx0XHRQb3N0c1N2Yy5jcmVhdGUoe1xuXHRcdFx0XHR1c2VybmFtZTogJ2RpY2tleXh4eCcsXG5cdFx0XHRcdHRleHRib2R5OiAkc2NvcGUucG9zdEJvZHlcblx0XHRcdH0pXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocG9zdCkge1xuXHRcdFx0XHQkc2NvcGUucG9zdHMudW5zaGlmdChwb3N0KTtcblx0XHRcdFx0JHNjb3BlLnBvc3RCb2R5ID0gbnVsbDtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufSk7XG5cbmFwcC5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XG5cdHRoaXMuZmV0Y2ggPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJyk7XG5cdH07XG5cdHRoaXMuY3JlYXRlID0gZnVuY3Rpb24ocG9zdCkge1xuXHRcdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgcG9zdCk7XG5cdH07XG59KSAiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxufSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignUG9zdHNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBQb3N0c1N2Yykge1xuXG5cdFBvc3RzU3ZjLmZldGNoKClcblx0LnRoZW4oZnVuY3Rpb24ocG9zdHMpIHtcblx0XHQkc2NvcGUucG9zdHMgPSBwb3N0cy5kYXRhO1xuXHR9KTtcblxuXHQkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmKCRzY29wZS5wb3N0Qm9keSkge1xuXHRcdFx0UG9zdHNTdmMuY3JlYXRlKHtcblx0XHRcdFx0dXNlcm5hbWU6ICdkaWNrZXl4eHgnLFxuXHRcdFx0XHR0ZXh0Ym9keTogJHNjb3BlLnBvc3RCb2R5XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHBvc3QpIHtcblx0XHRcdFx0JHNjb3BlLnBvc3RzLnVuc2hpZnQocG9zdCk7XG5cdFx0XHRcdCRzY29wZS5wb3N0Qm9keSA9IG51bGw7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLnNlcnZpY2UoJ1Bvc3RzU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcblx0dGhpcy5mZXRjaCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKTtcblx0fTtcblx0dGhpcy5jcmVhdGUgPSBmdW5jdGlvbihwb3N0KSB7XG5cdFx0cmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCBwb3N0KTtcblx0fTtcblx0Y29uc29sZS5lcnJvcignZXJyb3IhJyk7XG59KTsgIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignUmVnaXN0ZXJDdHJsJywgZnVuY3Rpb24oJHNjb3BlKSB7XG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAkcm91dGVQcm92aWRlclxuICAud2hlbignLycsICAgICAgICAgeyBjb250cm9sbGVyOiAnUG9zdHNDdHJsJywgdGVtcGxhdGVVcmw6ICdwb3N0cy5odG1sJyB9KVxuICAud2hlbignL3JlZ2lzdGVyJywgeyBjb250cm9sbGVyOiAnUmVnaXN0ZXJDdHJsJywgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci5odG1sJyB9KVxuICAud2hlbignL2xvZ2luJywgICAgeyBjb250cm9sbGVyOiAnTG9naW5DdHJsJywgdGVtcGxhdGVVcmw6ICdsb2dpbi5odG1sJyB9KVxufSlcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
