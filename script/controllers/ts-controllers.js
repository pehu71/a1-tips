var tsControllers;
(function (tsControllers) {
    var app = angular.module('tsControllers');
    var SampleController = (function () {
        function SampleController() {
        }
        return SampleController;
    }());
    tsControllers.SampleController = SampleController;
    app.controller('SampleController', tsControllers.SampleController);
})(tsControllers || (tsControllers = {}));
//# sourceMappingURL=ts-controllers.js.map