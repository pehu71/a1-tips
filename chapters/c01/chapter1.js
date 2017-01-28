angular.module('chapter1', [])

    .controller('WelcomeCtrl', ['$route', function ($route) {
        this.h1 = 'Survival guide';
    }]);
