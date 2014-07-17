var myApp = angular.module('myApp', []);
myApp.controller('MyController', function MyController($scope) {
    $scope.author = {
        'name': 'Jonathan Kempf',
        'title': 'UI/UX Developer/Designer',
        'company': 'vzw.com'
    }
})