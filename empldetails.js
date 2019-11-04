app.controller('editCtrl', function($scope, dataservice)
{
    $scope.user=dataservice.editdata;
    $scope.index= dataservice.object.indexOf( dataservice.editdata);
 console.log($scope.index);
    $scope.saveEmp=function(){
         
         
        dataservice.object[$scope.index]= $scope.user
       
        window.location.href = "#employelist";
    };
    // $scope.user= {};
    $scope.addemp = function()
    {
        // dataservice.object.push(dataservice.object.indexOf(adddata),1);

        dataservice.object.push($scope.user);
        window.location.href = "#employelist";
    }
});