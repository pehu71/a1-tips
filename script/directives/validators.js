angular.module('validators', [])

    .directive('tsuEmailValidator', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                ctrl.$parsers.unshift(function (value) {
                    if (value) {
                        var valid = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,8})$/.test(value);
                        ctrl.$setValidity('email', valid);
                        return valid ? value : undefined;
                    } else {
                        ctrl.$setValidity('email', true);
                        return true;
                    }
                });
            }
        }
    });
