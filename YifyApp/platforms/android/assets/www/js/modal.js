angular.module('yifyApp', ['ionic'])

.controller('modalController', function($scope, $ionicModal) {
  // No need for testing data anymore
  $scope.tasks = [];

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('modal-info.html', function(modal) {
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
  $scope.modalInfo = function() {
    $scope.taskModal.show();
  };

  // Close the new task modal
  $scope.closeModalInfo = function() {
    $scope.taskModal.hide();
  };
});