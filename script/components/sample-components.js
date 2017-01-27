angular.module('sample-components', [])

    .component('listComponent', {

        bindings: {
            show: '<'
        },

        controller: function ($scope, $element, $attrs) {
            var ctrl = this;
            ctrl.sins = [{title: 'gluttony', severity: 0}, {title: 'adultery', severity: 1}];
            ctrl.quote = 'sdfd ade ew wewee qwewqe wewe weew';

            ctrl.addSin = function () {
                ctrl.sins.push({title: 'clicking', severity: 10})
            };

        },
        controllerAs: 'listCtrl',
        template: '<div><p ng-if="listCtrl.show">{{listCtrl.quote}}</p><p ng-repeat="sin in listCtrl.sins" ng-click="listCtrl.addSin()">{{sin.title}}</p></div>'

    });

