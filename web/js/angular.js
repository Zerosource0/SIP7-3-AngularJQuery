var myApp = angular.module('myApp',[]);

myApp.controller('controller', function($http, $scope){
   var self = this;
   var list = [];
   self.list = list;
   $http.get("api/member").success(function(data, status){
       self.list = data;
       console.log(data + " " + status)
   }).error(function(data, status){
       console.log(data + " " + status)
   });
    
});