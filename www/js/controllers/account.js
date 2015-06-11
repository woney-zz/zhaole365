'use strict';
angular.module('zhaole365')

.controller('AccountCtrl', function($scope, $window, LocalStorageService, LocalDbService) {
    var jsonString = '[{ "action": "Buy Flowers", "done": false }, \
{ "action": "Get Shoes", "done": false }, \
{ "action": "Collect Tickets", "done": true }, \
{ "action": "Call Joe", "done": false }]';
    
  $scope.settings = {
    enableFriends: true,
    winWidth : $window.innerWidth,
//    todos : angular.fromJson(jsonString)
    name : LocalStorageService.get('name', 'undefined'),
    account : LocalStorageService.get('account', 'undefined'),
    
  };
  
  //
  LocalDbService.select('wang');
  
});
