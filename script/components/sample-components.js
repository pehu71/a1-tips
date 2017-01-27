angular.module('sample-components', [])

    .component('sinList', {

        bindings: {
            sins: '<', // input only binding
            onDelete: '&', // event binding
            listApi: '=' // typical two-way binding
        },

        /*
        * we could use registered component as well
        * also we could pass $scope, $element, $attrs params, if we needed them for something
        * */
        controller: function () {
            var ctrl = this;
            ctrl.filterExp = '';

            /*
             * child-to-parent communication
             * we do not operate right on input data (as we would by using '=' binding)
             * we expose callback and let the parent controller decide what to do with the event
             **/
            ctrl.deleteSin = function (id) {
                ctrl.onDelete({id: id});
            };

            ctrl.$onInit = function () {
                /*
                 * we expose API in this life-cycle hook to enable parent-to-child communication
                 * */
                ctrl.listApi = {
                    filterDeadly: function () {
                        ctrl.filterExp = 'deadly';
                    }
                }
            }

        },
        controllerAs: 'listCtrl',
        templateUrl: 'views/sample-component.html'

    });

