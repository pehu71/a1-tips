angular.module('tsModule', []); // this is the little hack to integrate with full-flavoured TS module
var tsModule;
(function (tsModule) {
    var tsm = angular.module('tsModule'); // reference the fake angular module to add controller and directive to it
    var SampleController = (function () {
        function SampleController($location) {
            this.path = ''; // use types
            this.path = "I know my $location.path(): " + $location.path(); // you can use template strings
        }
        SampleController.$inject = ['$location']; // let it survive uglification
        return SampleController;
    }());
    tsModule.SampleController = SampleController;
    tsm.controller('SampleController', tsModule.SampleController); // add controller to angular module
})(tsModule || (tsModule = {}));
//# sourceMappingURL=ts-module.js.map