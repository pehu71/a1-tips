angular.module('chapter5', [])

    .controller('PipeCtrl', ['findKeyFilter', '$filter', function (findKeyFilter, $filter) {
        this.companies = [
            {
                key: 'HF',
                value: 'Hafslund'
            },
            {
                key: 'FO',
                value: 'Fortum'
            },
            {
                key: 'VTF',
                value: 'Vattenfall'
            }
        ];
        this.company = findKeyFilter(this.companies, 'FO', 'controller 1');
        this.sameCompany = $filter('findKey')(this.companies, 'FO', 'controller 2');
        this.textModel = '';
    }]);
