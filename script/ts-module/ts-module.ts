angular.module('tsModule', []); // this is the little hack to integrate with full-flavoured TS module

module tsModule {

    import ILocationService = angular.ILocationService;

    let tsm = angular.module('tsModule');

    export class SampleController {

        path: string = '';

        constructor($location: ILocationService) {
            this.path = 'I know my $location.path(): ' + $location.path();
        }

        static $inject = ['$location'];
    }

    tsm.controller('SampleController', tsModule.SampleController);
}
