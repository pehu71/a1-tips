angular.module('capital-letters-validator', [])

.directive('capitalLetters', function (){
    return {
        restrict: 'A',
        require: 'ngModel', // very important, because the ctrl param is in fact "ngModel.NgModelController"
        link: function (scope, elem, attrs, ctrl) {
            ctrl.$parsers.unshift(function (value) {
                if (value) {

                    console.log(ctrl);

                    var valid = /^[A-Z]*$/.test(value);
                    ctrl.$setValidity('capitalLetters', valid);
                    return valid ? value : undefined;

                    // returning undefined means there was a validation error
                    // otherwise we're passing the value on through the chain of $parsers

                } else {

                    // if there is nothing, it is most probably not touched yet, it is on us how to handle this
                    // depends on "business scenario"
                    ctrl.$setValidity('capitalLetters', true);
                    return true;
                }
            })
        }
    }
});
