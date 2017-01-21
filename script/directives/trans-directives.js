angular.module('trans-directives', [])

.directive('simpleTransclude', function () {
    return {
        restrict: 'E',
        scope: {},
        transclude: true, // important here
        templateUrl: 'views/simple-transclude.html',
        bindToController: {
            read: '='
        },
        controller: function () {
            this.agreed = false;
        },
        controllerAs: 'ctrl'
    }
});
