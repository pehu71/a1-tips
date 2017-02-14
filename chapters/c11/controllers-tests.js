describe('controllers', function () {

    beforeEach(function () {
        module('controllers')
    });

    describe('customerController', function () {

        var $controller,
            controller,
            $scope;

        beforeEach(inject(function(_$controller_){
            $controller = _$controller_;
            $scope = {};
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
