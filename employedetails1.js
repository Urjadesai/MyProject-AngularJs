var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider)
{
    $routeProvider
    .when("/home",{
        templateUrl : "home.html",
        // controller: "homeCtrl"
    })
    .when("/employelist",{
        templateUrl : "employelist.html",
        // controller: "employelistCtrl"
    })
    .when("/empldetails",
    {
        templateUrl : "empldetails.html",
        //controller: "empldetailsCtrl"
    })
});
// app.controller("homeCtrl", function ($scope) {
//     $scope.msg = "";
    
// });
// app.controller("employelistCtrl", function ($scope) {
//     $scope.msg = "Welcome to the Pro-Tek Tutorials";
   
// });