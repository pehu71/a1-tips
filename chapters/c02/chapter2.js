angular.module('chapter2', [])

    .controller('ThisCtrl', ['$http', function ($http) {
        var self = this;

        $http.get('data/books.json')
            .then(function (res) {
                self.books = res.data.books; // todo: use "this" instead of "self"
            })
    }]);
