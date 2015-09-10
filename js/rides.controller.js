var vedea = angular.module('vedea',[]);

vedea.controller('RidesController', ['$scope', function($scope) {

	$scope.brandSelection = "triumph";

  $scope.brandSelected = function(brand){
  	$scope.shownMotos = [];

  	$scope.brands.forEach(function(data){
  		if(data.name==brand.name)
  			data.selected = true;
		else
			data.selected = false;
  	});

  	$scope.motos.forEach(function(data){
  		if(data.seller == brand.name){
  			$scope.shownMotos.push(data);
  		}
  	});

  	$scope.shownMotos[0].selected = true;

  	$scope.back = false;
  	$scope.next = true;
  	$scope.indexSelection = 0;

  	$scope.selected = $scope.shownMotos[0];
  };

  $scope.nextMoto = function(){
  	$scope.indexSelection += 1;
  	$scope.selected = $scope.shownMotos[$scope.indexSelection];
  	if(!$scope.shownMotos[$scope.indexSelection+1])
  		$scope.next = false;
  	$scope.back = true;
  };

  $scope.backMoto = function(){
  	console.log("in the back");
  	$scope.indexSelection -= 1;
  	$scope.selected = $scope.shownMotos[$scope.indexSelection];
  	if(!$scope.shownMotos[$scope.indexSelection-1])
  		$scope.back = false;
  	$scope.next = true;
  };
  
  $scope.motos = [{
	  	url : "http://c15071547.r47.cf2.rackcdn.com/atv/model_thumbnails/1000-XT-WhtMet.png",
	  	name : "Big Bore",
	  	seller : "Arctic Cat"
	  },{
	  	url : "http://www.arcticchat.com/forum/attachments/general-atv-discussion/235298d1411630746-2015-arctic-cat-xr-atvs-xr700ltd_blk_2015_w.png",
	  	name : "XR",
	  	seller : "Arctic Cat"
	  },{
	  	url : "http://images.triumphmotorcycles.co.nz/media-library/95B094DECB0943CA8E032AEE148E960B.png?w=600",
	  	name : "Speedmaster (2014)",
	  	seller : "Triumph"
	  },{
	  	url : "http://www.brisans.com.au/admin/images/bike_gallery_extra_images/144/Triumph-America-2014-Black.png",
	  	name : "America (2014)",
	  	seller : "Triumph"
	  }];

  $scope.brands = [{
	  	url : "img/arctic_cat_logo_small.png",
	  	name : "Arctic Cat",
	  },{
	  	url : "img/triumph_logo_small.png",
	  	name : "Triumph"
	  }];



}]);