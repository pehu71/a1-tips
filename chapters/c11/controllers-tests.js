describe('controllers', function () {

    beforeEach(function () {
        module('controllers')
    });

    describe('customerController', function () {

        var $controller,
            controller,
            $scope;

        beforeEach(inject(function(_$controller_){

            // we get hold of $controller service via DI
            // the underscores are here so as we could name it $controller - injector removes them during matching
            $controller = _$controller_;

            // we define some scope
            $scope = {};

            // we create controller instance through the service
            // and pass the created $scope to the constructor as locals
            controller = $controller('customerController', {$scope: $scope});
        }));

        describe('function checkCustomerSn', function () {

            it('returns true if customer social number is modulo 11', function () {
                $scope.customerSn = '7110195004';
                var result = $scope.checkCustomerSn();
                expect(result).toBe(true);
            });

            it('returns false if customer social number is not modulo 11', function () {
                $scope.customerSn = '7110195003';
                var result = $scope.checkCustomerSn();
                expect(result).toBe(false);
            });
        });


    });

});
