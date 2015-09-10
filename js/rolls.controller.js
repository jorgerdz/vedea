var vedea = angular.module('vedea',[]);

vedea.controller('RollsController', ['$scope', function($scope) {

	$scope.rolls = [{
    route : 'Aguascalientes - San Juan',
    name : 'Ruta 1',
    img : 'img/rolls.jpg'
  },
  {
    route : 'Aguascalientes - Guadalajara',
    name : 'Ruta 2',
    img : 'img/Fondo.jpg'
  },
  {
    route : 'Aguascalientes - León',
    name : 'Ruta 3',
    img : 'img/intro-bg.jpg'
  }];

  $scope.initialize = function(){
    $scope.selection = $scope.rolls[0];
    $scope.indexSelected = 0;
    $scope.nextExists = true;
    console.log($scope.selection);
  };

  $scope.nextSlide = function(){
    console.log($scope.indexSelected);
    $scope.indexSelected++;
    $scope.selection = $scope.rolls[$scope.indexSelected];
    if(!$scope.rolls[$scope.indexSelected+1])
      $scope.nextExists = false;
    $scope.prevExists = true;
  };

  $scope.prevSlide = function(){
    $scope.indexSelected--;
    $scope.selection = $scope.rolls[$scope.indexSelected];
    if(!$scope.rolls[$scope.indexSelected-1])
      $scope.prevExists = false;
    $scope.nextExists = true;
  };

}]);
