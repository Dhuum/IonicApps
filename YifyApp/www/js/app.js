// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('yifyApp', ['ionic'])

.controller ('mainController', function($scope, $http) {
  // http://yts.re/api/list.json?sort=date&limit=10
    $scope.results = [];
    $scope.init = function() {
        //Call the API and get 10 max results sorted by Date in descending order
        $http.jsonp('http://yts.re/api/list.jsonp?sort=date&order=desc&limit=10' + '&callback=JSON_CALLBACK').success(function(data) {
            console.log(data);
            angular.forEach(data.MovieList, function(movie, index){
              $scope.results.push(movie);
          });
        }).error(function(error) {
 
        });
    };
})
/*
.controller('ModalCtrl', function($scope, $ionicModal) {

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Called when the form is submitted
  $scope.createTask = function(task) {
    $scope.tasks.push({
      title: task.title
    });
    $scope.taskModal.hide();
    task.title = "";
  };

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };
});
*/

function TabCtrl($scope, $ionicTabsDelegate) {
  $scope.selectTabWithIndex = function(index) {
    $ionicTabsDelegate.select(index);
  }
};

