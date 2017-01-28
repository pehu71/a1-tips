angular.module('chapter6', [])

    .controller('ScopeInheritanceCtrlParent', ['$scope', function ($scope) {
        $scope.customer = {
            name: 'Abraham',
            lastName: 'Lincoln',
            age: 300,
            address: 'Lincoln Street 1, 01019 Ivo'
        }
    }])

    .controller('ScopeInheritanceCtrlChild', ['$scope', function ($scope) {

    }])

    .directive('myAddressDirective', function () {
        return {
            restrict: 'E',
            template: '<p><input type="text" ng-model="customer.name"></p>'
        }
    })

    .directive('myAddressDirectiveIsolated', function () {
        return {
            restrict: 'E',
            scope: {},      // or scope = true
            // todo: but we can let them accept parent model explicitly
            // scope: {customer: '='},
            template: '<p><input type="text" ng-model="customer.name"></p>'
        }
    });