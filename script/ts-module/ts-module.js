angular.module('tsModule', []); // this is the little hack to integrate with full-flavoured TS module
var tsModule;
(function (tsModule) {
    var tsm = angular.module('tsModule');
    var SampleController = (function () {
        function SampleController($location) {
            this.path = '';
            this.path = 'I know my $location.path(): ' + $location.path();
        }
        SampleController.$inject = ['$location'];
        return SampleController;
    }());
    tsModule.SampleController = SampleController;
    tsm.controller('SampleController', tsModule.SampleController);
})(tsModule || (tsModule = {}));
//# sourceMappingURL=ts-module.js.map