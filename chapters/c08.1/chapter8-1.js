angular.module('chapter8-1', [])

    .controller('CmpApiLshCtrl', function () {
        this.paramToDirective = 'ABCD';
    })

    .component('cpmHooks', {

        bindings: {
            inputParam: '<'
        },

        controller: function () {

            var self = this;
            self.messages = [];

            self.$onInit = function () {
                self.messages.push({ title: '$onInit', param: null });
            };

            self.$postLink = function () {
                self.messages.push({ title: '$postLink', param: null })
            };

            self.$onChanges = function (changesObj) {
                self.messages.push({ title: '$onChanges', param: changesObj })
            };

            self.$onDestroy= function () {
                alert('$onDestroy')
            };

        },
        templateUrl: 'chapters/c08.1/cmp-hooks.html'
    });
