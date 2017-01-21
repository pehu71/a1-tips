angular.module('tsModule', []); // this is the little hack to integrate with full-flavoured TS module

module tsModule {

    let tsm = angular.module('tsModule'); // reference the fake angular module to add controller and directive to it

    import ILocationService = angular.ILocationService; // import some types

    /*
    * This directive is aligned with the pattern of "component directive"
    * mentioned in chapter "Component directives"
    * This one just uses TS and @types/angular type definitions
    * */
    export function sampleDirective() {
        return {
            restrict: 'E',
            scope: {},
            template: `
            <div style="padding:6px;background-color: #bbbbbb;cursor:pointer;">
                <label>sample-directive</label>
                <p ng-click="ctrl.onClick()" style="color:{{ctrl.color}};">{{ctrl.someText}}</p>
            </div>
            `,
            bindToController: {
                color: '='
            },
            controller: function ()  {
                this.someText = 'Jelenovi pivo nelej';

                this.onClick = () => {
                    this.someText = this.someText.toUpperCase();
                }
            },
            controllerAs: 'ctrl'
        }
    }

    tsm.directive('sampleDirective', tsModule.sampleDirective); // bind to module

    export class SampleController {

        path: string = ''; // use types

        constructor($location: ILocationService) {  // use strongly typed DI
            this.path = `Controller: I know my $location.path(): ${$location.path()}`; // you can use template strings
        }

        static $inject = ['$location']; // let it survive uglification
    }

    tsm.controller('SampleController', tsModule.SampleController); // add controller to angular module
}
