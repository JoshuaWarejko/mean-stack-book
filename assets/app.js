angular.module("app",[]);var app=angular.module("app",[]);app.controller("PostsCtrl",["$scope","PostsSvc",function(t,o){o.fetch().then(function(o){t.posts=o.data}),t.addPost=function(){t.postBody&&o.create({username:"dickeyxxx",textbody:t.postBody}).then(function(o){t.posts.unshift(o),t.postBody=null})}}]),app.service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(o){return t.post("/api/posts",o)}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,o){o.fetch().then(function(o){t.posts=o.data}),t.addPost=function(){t.postBody&&o.create({username:"dickeyxxx",textbody:t.postBody}).then(function(o){t.posts.unshift(o),t.postBody=null})}}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(o){return t.post("/api/posts",o)},console.error("error!")}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcC5qcyIsInBvc3RzLmN0cmwuanMiLCJwb3N0cy5zdmMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImFwcCIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJQb3N0c1N2YyIsImZldGNoIiwidGhlbiIsInBvc3RzIiwiZGF0YSIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsInVzZXJuYW1lIiwidGV4dGJvZHkiLCJwb3N0IiwidW5zaGlmdCIsInNlcnZpY2UiLCIkaHR0cCIsInRoaXMiLCJnZXQiLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFBQyxPQUFBLFNDQUEsSUFBQUMsS0FBQUYsUUFBQUMsT0FBQSxTQUVBQyxLQUFBQyxXQUFBLGFBQUEsU0FBQSxXQUFBLFNBQUFDLEVBQUFDLEdBRUFBLEVBQUFDLFFBQ0FDLEtBQUEsU0FBQUMsR0FDQUosRUFBQUksTUFBQUEsRUFBQUMsT0FHQUwsRUFBQU0sUUFBQSxXQUNBTixFQUFBTyxVQUNBTixFQUFBTyxRQUNBQyxTQUFBLFlBQ0FDLFNBQUFWLEVBQUFPLFdBRUFKLEtBQUEsU0FBQVEsR0FDQVgsRUFBQUksTUFBQVEsUUFBQUQsR0FDQVgsRUFBQU8sU0FBQSxXQU1BVCxJQUFBZSxRQUFBLFlBQUEsUUFBQSxTQUFBQyxHQUNBQyxLQUFBYixNQUFBLFdBQ0EsTUFBQVksR0FBQUUsSUFBQSxlQUVBRCxLQUFBUCxPQUFBLFNBQUFHLEdBQ0EsTUFBQUcsR0FBQUgsS0FBQSxhQUFBQSxPQzVCQWYsUUFBQUMsT0FBQSxPQUNBRSxXQUFBLGFBQUEsU0FBQSxXQUFBLFNBQUFDLEVBQUFDLEdBRUFBLEVBQUFDLFFBQ0FDLEtBQUEsU0FBQUMsR0FDQUosRUFBQUksTUFBQUEsRUFBQUMsT0FHQUwsRUFBQU0sUUFBQSxXQUNBTixFQUFBTyxVQUNBTixFQUFBTyxRQUNBQyxTQUFBLFlBQ0FDLFNBQUFWLEVBQUFPLFdBRUFKLEtBQUEsU0FBQVEsR0FDQVgsRUFBQUksTUFBQVEsUUFBQUQsR0FDQVgsRUFBQU8sU0FBQSxXQ2hCQVgsUUFBQUMsT0FBQSxPQUNBZ0IsUUFBQSxZQUFBLFFBQUEsU0FBQUMsR0FDQUMsS0FBQWIsTUFBQSxXQUNBLE1BQUFZLEdBQUFFLElBQUEsZUFFQUQsS0FBQVAsT0FBQSxTQUFBRyxHQUNBLE1BQUFHLEdBQUFILEtBQUEsYUFBQUEsSUFFQU0sUUFBQUMsTUFBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwJywgW10pIiwidmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXSk7XG5cbmFwcC5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIFBvc3RzU3ZjKSB7XG5cblx0UG9zdHNTdmMuZmV0Y2goKVxuXHQudGhlbihmdW5jdGlvbihwb3N0cykge1xuXHRcdCRzY29wZS5wb3N0cyA9IHBvc3RzLmRhdGE7XG5cdH0pO1xuXG5cdCRzY29wZS5hZGRQb3N0ID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoJHNjb3BlLnBvc3RCb2R5KSB7XG5cdFx0XHRQb3N0c1N2Yy5jcmVhdGUoe1xuXHRcdFx0XHR1c2VybmFtZTogJ2RpY2tleXh4eCcsXG5cdFx0XHRcdHRleHRib2R5OiAkc2NvcGUucG9zdEJvZHlcblx0XHRcdH0pXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocG9zdCkge1xuXHRcdFx0XHQkc2NvcGUucG9zdHMudW5zaGlmdChwb3N0KTtcblx0XHRcdFx0JHNjb3BlLnBvc3RCb2R5ID0gbnVsbDtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufSk7XG5cbmFwcC5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XG5cdHRoaXMuZmV0Y2ggPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJyk7XG5cdH07XG5cdHRoaXMuY3JlYXRlID0gZnVuY3Rpb24ocG9zdCkge1xuXHRcdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgcG9zdCk7XG5cdH07XG59KSAiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIFBvc3RzU3ZjKSB7XG5cblx0UG9zdHNTdmMuZmV0Y2goKVxuXHQudGhlbihmdW5jdGlvbihwb3N0cykge1xuXHRcdCRzY29wZS5wb3N0cyA9IHBvc3RzLmRhdGE7XG5cdH0pO1xuXG5cdCRzY29wZS5hZGRQb3N0ID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoJHNjb3BlLnBvc3RCb2R5KSB7XG5cdFx0XHRQb3N0c1N2Yy5jcmVhdGUoe1xuXHRcdFx0XHR1c2VybmFtZTogJ2RpY2tleXh4eCcsXG5cdFx0XHRcdHRleHRib2R5OiAkc2NvcGUucG9zdEJvZHlcblx0XHRcdH0pXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocG9zdCkge1xuXHRcdFx0XHQkc2NvcGUucG9zdHMudW5zaGlmdChwb3N0KTtcblx0XHRcdFx0JHNjb3BlLnBvc3RCb2R5ID0gbnVsbDtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uc2VydmljZSgnUG9zdHNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xuXHR0aGlzLmZldGNoID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cycpO1xuXHR9O1xuXHR0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uKHBvc3QpIHtcblx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpO1xuXHR9O1xuXHRjb25zb2xlLmVycm9yKCdlcnJvciEnKTtcbn0pOyAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
