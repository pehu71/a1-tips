describe('validators', function () {

    beforeEach(function () {
       module('validators')
    });

    describe('tsuEmailValidator', function () {

        beforeEach(inject(function($compile, $rootScope){
            $scope = $rootScope;
            var element = angular.element(
                '<form name="form"><input type="text" name="customerEmail" ng-model="model.customerEmail" tsu-email-validator></form>'
            );
            $scope.model = { customerEmail: null};
            $compile(element)($scope);
            $scope.$digest();
            form = $scope.form;
        }));

        it('when nothing given it should be valid', function () {
            expect(form.customerEmail.$valid).toBe(true);
        });

        it('when given email is not IANA then input should be $invalid and its parent form as well', function () {
            form.customerEmail.$setViewValue('gonz@h');
            expect(form.customerEmail.$valid).toBe(false);
        });

        it('when given email is not IANA valid it should have "ng-invalid-email" and "ng-invalid-parse" errors (+ css classes) and its parent form as well', function () {
            form.customerEmail.$setViewValue('gonz@h');
            expect(form.customerEmail.$error.email).toBeDefined();
        })
    });

});
