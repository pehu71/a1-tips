angular.module('chapter6', [])

    .controller('ScopeInheritanceCtrlParent', ['$scope', function ($scope) {
        $scope.customer = 'Abraham'; // todo: for primitive value
        $scope.address = {
            streetName: 'Husakova',
            streetNumber: '1971'
        }
    }])

    .directive('myAddressScopeFalse', function () {
        return {
            restrict: 'E',
            scope: false,
            template: '<p><input type="text" ng-model="customer"></p>'
        }
    })

    .directive('myAddressScopeTrue', function () {
        return {
            restrict: 'E',
            scope: true,
            template: '<p><input type="text" ng-model="customer"></p>'
        }
    })

    .directive('myAddressScopeIsolated', function () {
        return {
            restrict: 'E',
            scope: {},
            template: '<p><input type="text" ng-model="customer"></p>'
        }
    })

    .directive('myAddressScopeIsolatedTwoway', function () {
        return {
            restrict: 'E',
            scope: {customer: '='},
            template: '<p><input type="text" ng-model="customer"></p>'
        }
    })

    .directive('myAddressScopeIsolatedInputOnly', function () {
        return {
            restrict: 'E',
            scope: {customer: '<'},
            template: '<p><input type="text" ng-model="customer"></p>'
        }
    })
;