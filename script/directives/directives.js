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
    })

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
