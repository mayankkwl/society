angular.module('starter.controllers', [])


.controller('LoginCtrl', function($scope, $location) {
  $scope.sa = {};
  $scope.submitLogin = function(){
      if($scope.sa.username == "demo" && $scope.sa.password == "demo"){
        $location.url('/home'); 
      }
      else {
        $scope.error = "Wrong Credentials";
      }
  }
}).controller('DashboardCtrl', function($scope, $location) {
 
})
.controller('FeedbackCtrl', function($scope, $location) {


}).controller('EventsCtrl', function($scope, $location, $http) {
  $scope.events = [];
  $http.get('json/events.json').then(function(resp) {
    console.log('Success', resp.data);
    $scope.events = resp.data;
  }, function(err) {
    console.error('ERR', err);
  })

  $scope.updateDesc = function(ind){   
    $scope.description = $scope.events[ind].description;
  }

}).controller('MaintenanceCtrl', function($scope, $location) {
  

}).controller('LostfoundCtrl', function($scope, $location, $http) {
  $scope.lostfounditems = [];
  $scope.groups = [];
  $http.get('json/reportedItems.json').then(function(resp) {
    $scope.lostfounditems = resp.data;
    for (var i=0; i<$scope.lostfounditems.length; i++) {
      $scope.groups[i] = {
        name: $scope.lostfounditems[i].name,
        items: []
      };
      for (var j=0; j<$scope.lostfounditems[i].items.length; j++) {
        $scope.groups[i].items.push({
          "itemname" : $scope.lostfounditems[i].items[j].itemname,
          "date" : $scope.lostfounditems[i].items[j].date,
          "description" : $scope.lostfounditems[i].items[j].description,
          "contactPerson" : $scope.lostfounditems[i].items[j].contactPerson,
          "contactNo" : $scope.lostfounditems[i].items[j].contactNo,
          "flatNo" : $scope.lostfounditems[i].items[j].flatNo,
          "imageURL" : $scope.lostfounditems[i].items[j].imageURL
        });
      }
  }
 //console.error($scope.groups);
  }, function(err) {
    console.error('ERR', err);
  })
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
}).controller('ItemLostCtrl', function($scope, $location) {
  
console.log("ItemLostCtrl uploaded");
  $scope.takePicture = function () {
    navigator.camera.getPicture(function(imageURI) {
      console.log("imageURI " + imageURI);
      $scope.imageuri = imageURI;
      // imageURI is the URL of the image that we can use for
      // an <img> element or backgroundImage.

    }, function(err) {

      // Ruh-roh, something bad happened

    }, cameraOptions);
  }

}).controller('ItemFoundCtrl', function($scope, $location, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}).controller('RentsellCtrl', function($scope, $location) {
  

}).controller('AmenitiesCtrl', function($scope, $location) {
  

}).controller('RulesCtrl', function($scope, $location) {
  

}).controller('FaqCtrl', function($scope, $location) {
  

}).controller('ContactsCtrl', function($scope, $location) {
  

}).controller('AlertsCtrl', function($scope, $location) {
  

});
