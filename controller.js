angular.module('userProfiles').controller('MainController', function($scope, mainservice){

    $scope.thisAppIsBroken = "This angular app is working";
    $scope.users=mainservice.getusers();
    $scope.toggleFavorite = mainservice.toggleFavorite;

})
