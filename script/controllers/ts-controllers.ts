module tsControllers {

    let app = angular.module('tsControllers');

    export class SampleController {
        constructor() {}
    }

    app.controller('SampleController', tsControllers.SampleController);
}
