app.controller("loginController", function($scope, $http, $state){
	$scope.login = function(){
		
		var http = $http({
			url : "server/login_pro.jsp",
			method : "post",
			params : {
				nickname : $scope.nickname
			}
		})
		
		http.then(function(response){
			if(response.data.trim() == "OK"){
				$state.go("guestbook")
			}
		})
	}
})

app.controller("guestbookController", function($scope, $http){
	$scope.getData = function(){
		var http = $http({
			url : "server/get_data.jsp",
			method : "post"
		})
		
		http.then(function(response){
			$scope.content_data = response.data
		})
	}
})

app.controller("guestbookInputController", function($scope, $http){
	$scope.input = function(){
		var http = $http({
			url : "server/insert_data.jsp",
			method : "post",
			params : {
				content : $scope.guestbook_content
			}
		})
		
		http.then(function(response){
			if(response.data.trim() == "OK"){
				alert("저장이 완료되었습니다")
				$scope.guestbook_content = ""
				$scope.getData()
			}
		})
	}
})

app.controller("guestbookContentController", function($scope, $http){
	
	$scope.$watch("$viewContentLoaded", function(){
		$scope.getData()
	})
})








