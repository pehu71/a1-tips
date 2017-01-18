angular.module('directives', [])
    .directive('myComponentDirective', function () {
        return {
            restrict: 'E', // must be restricted to Element
            scope: {}, // must have isolated scope

            bindToController: { // must bind to controller rather then to $scope
                someParam: '='
            },

            templateUrl: 'views/my-cmp.html',

            controller: function() { // must have its own controller - manipulate directive template via controller, not scope
                this.someText = 'I am component directive - you fucking click me!';

                this.onClick = function () {
                    alert('clicked');
                }
            },

            controllerAs: 'ctrl' // must declare controllerAs - use it in component template
        };
    });
