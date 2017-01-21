angular.module('tsModule', []); // this is the little hack to integrate with full-flavoured TS module
var tsModule;
(function (tsModule) {
    var tsm = angular.module('tsModule'); // reference the fake angular module to add controller and directive to it
    /*
    * This directive is aligned with the pattern of "component directive"
    * mentioned in chapter "Component directives"
    * This one just uses TS and @types/angular type definitions
    * */
    function sampleDirective() {
        return {
            restrict: 'E',
            scope: {},
            template: "\n            <div style=\"padding:6px;background-color: #bbbbbb;cursor:pointer;\">\n                <label>sample-directive</label>\n                <p ng-click=\"ctrl.onClick()\" style=\"color:{{ctrl.color}};\">{{ctrl.someText}}</p>\n            </div>\n            ",
            bindToController: {
                color: '='
            },
            controller: function () {
                var _this = this;
                this.someText = 'Jelenovi pivo nelej';
                this.onClick = function () {
                    _this.someText = _this.someText.toUpperCase();
                };
            },
            controllerAs: 'ctrl'
        };
    }
    tsModule.sampleDirective = sampleDirective;
    tsm.directive('sampleDirective', tsModule.sampleDirective); // bind to module
    var SampleController = (function () {
        function SampleController($location) {
            this.path = ''; // use types
            this.path = "Controller: I know my $location.path(): " + $location.path(); // you can use template strings
        }
        SampleController.$inject = ['$location']; // let it survive uglification
        return SampleController;
    }());
    tsModule.SampleController = SampleController;
    tsm.controller('SampleController', tsModule.SampleController); // add controller to angular module
})(tsModule || (tsModule = {}));
//# sourceMappingURL=ts-module.js.map