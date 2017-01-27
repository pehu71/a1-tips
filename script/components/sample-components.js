angular.module('sample-components', [])

    .controller('listComponentCtrl', function ($scope, $element, $attrs) {
        var ctrl = this;
        ctrl.sins = [{title:'gluttony', severity:0}, {title:'adultery',severity:1} ];
        ctrl.quote = 'sdfd ade ew wewee qwewqe wewe weew';

        ctrl.clickAlert = function () {
            ctrl.sins.push({title:'clicking', severity:10})
        }
    })
    .component('listComponent', {

        bindings: {
            showQuote: '<'
        },

        controller: 'listComponentCtrl',
        controllerAs: 'listCtrl',
        template: '<div><p>{{listCtrl.quote}}</p><p ng-repeat="sin in listCtrl.sins" ng-click="listCtrl.clickAlert()">{{sin.title}}</p></div>'

    });

