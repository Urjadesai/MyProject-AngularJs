// var app = angular.module("myApp", []);
app.service('dataservice', function($http)
{
    this.display=function()
    {
        return $http.get('EMPLOYE_INFO.JSON');
    }
   this.object;
   this.editdata;
  
});
app.controller('mainCtrl', function($scope, dataservice)
{
    if(!dataservice.object){
        console.log(dataservice.object);
    dataservice.display().then(function(response)
    {
       dataservice.object = response.data;
        $scope.data =  dataservice.object;
        console.log(response.data);
    });
}
$scope.data =  dataservice.object;
    $scope.removeData = function(seldata)
    {
        dataservice.object.splice(dataservice.object.indexOf(seldata),1);
    }
    $scope.gotoAddNew=function()
    {
        window.location.href="#empldetails";
      }  

    $scope.editClicked = function(obj)
    {
        dataservice.editdata=obj;
        window.location.href = "#empldetails";
    };
});

