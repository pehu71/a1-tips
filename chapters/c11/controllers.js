angular.module('controllers', [])

.controller('customerController', ['$scope', function ($scope) {

    $scope.customerSn = '';

    $scope.checkCustomerSn = function () {
        var sn = parseInt($scope.customerSn);
        return sn % 11 == 0;
    }

}]);
