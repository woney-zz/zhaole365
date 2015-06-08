'use strict';
angular.module('zhaole365')
        
.controller('ChatDetailCtrl', function($scope, $stateParams, ChatsService) {
  $scope.chat = ChatsService.get($stateParams.chatId);
});
