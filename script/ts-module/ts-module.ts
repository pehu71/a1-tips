angular.module('tsModule', []); // this is the little hack to integrate with full-flavoured TS module

module tsModule {

    let tsm = angular.module('tsModule'); // reference the fake angular module to add controller and directive to it

    import ILocationService = angular.ILocationService; // import some types

    export class SampleController {

        path: string = ''; // use types

        constructor($location: ILocationService) {  // use strongly typed DI
            this.path = `I know my $location.path(): ${$location.path()}`; // you can use template strings
        }

        static $inject = ['$location']; // let it survive uglification
    }

    tsm.controller('SampleController', tsModule.SampleController); // add controller to angular module
}
