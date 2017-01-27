angular.module('sample-components', [])

    .component('listComponent', {

        bindings: {
            show: '<',
            onAdd: '&'
        },

        controller: function ($scope, $element, $attrs) {
            var ctrl = this;
            ctrl.sins = [{title: 'gluttony', severity: 0}, {title: 'adultery', severity: 1}];
            ctrl.quote = 'sdfd ade ew wewee qwewqe wewe weew';

            ctrl.addSin = function () {
                // ctrl.sins.push({title: 'clicking', severity: 10});
                ctrl.onAdd({count: 1});
            };

        },
        controllerAs: 'listCtrl',
        templateUrl: 'views/sample-component.html'

    });

