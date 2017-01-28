angular.module('chapter7', [])

    .controller('DirectiveCtrl', function () {
    })

    .directive('myComponentDirective', function () {
        return {
            restrict: 'E', // must be restricted to Element
            scope: {}, // must have isolated scope

            bindToController: { // must bind to controller rather then to $scope
                someParam: '='
            },

            templateUrl: 'chapters/c07/my-cmp.html',

            controller: function () { // must have its own controller - manipulate directive template via controller, not scope
                this.someText = 'I am component directive - you fucking click me!';
                this.afterClick = undefined;

                this.onClick = function () {
                    this.afterClick = 'Hey, you clicked me!';
                }
            },

            controllerAs: 'ctrl' // must declare controllerAs - use it in component template
        };
    });
