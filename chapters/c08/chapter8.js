angular.module('chapter8', [])

    .controller('CmpApiCtrl', function () {

        this.sins = [{id: 0, title: 'gluttony', severity: 'light'}, {id: 1, title: 'adultery', severity: 'deadly'}];
        this.messages = [];

        this.deadlyOnly = function () {
            this.listApi.filterDeadly()
        };

        var ctrl = this;
        this.onDeleteNotification = function (sinId) {
            ctrl.messages.push('deletion refused for id: ' + sinId);
        }
    })
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
        templateUrl: 'chapters/c08/sample-component.html'

    });
