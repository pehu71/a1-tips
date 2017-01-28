angular.module('chapter6', [])

    .controller('ScopeInheritanceCtrlParent', ['$scope', function ($scope) {
        $scope.customer = 'Abraham';
        $scope.address = {
            streetName: 'Husakova',
            streetNumber: '1971'
        }
    }])

    .directive('myAddressScopeFalse', function () {
        return {
            restrict: 'E',
            scope: false,
            template: '<p><input type="text" ng-model="customer"><input type="text" ng-model="address.streetName"></p>'
        }
    })

    .directive('myAddressScopeTrue', function () {
        return {
            restrict: 'E',
            scope: true,
            template: '<p><input type="text" ng-model="customer"><input type="text" ng-model="address.streetName">&nbsp;<label class="label label-danger">beware oof arrays, objects!</label></p>'
        }
    })

    .directive('myAddressScopeIsolated', function () {
        return {
            restrict: 'E',
            scope: {},
            template: '<p><input type="text" ng-model="customer"><input type="text" ng-model="address.streetName"></p>'
        }
    })

    .directive('myAddressScopeIsolatedTwoway', function () {
        return {
            restrict: 'E',
            scope: {customer: '=', streetName: '='},
            template: '<p><input type="text" ng-model="customer"><input type="text" ng-model="streetName"></p>'
        }
    })

    .directive('myAddressScopeIsolatedInputOnly', function () {
        return {
            restrict: 'E',
            scope: {customer: '<', streetName: '<'},
            template: '<p><input type="text" ng-model="customer"><input type="text" ng-model="streetName"></p>'
        }
    })
;