mainApp.controller('wiController', function ($scope) {
    $scope.workitems = {
        wis: [
            { orderid:1, name: 'RLOS-000001-SIB', startdate:'01-01-2021', enddate: '10-01-2021', currworkstep:'Ack_Sanction_Letter_Upload', stat:'Sanctioned' },
            { orderid:2, name: 'LEGAL-000001-SIB', startdate:'10-01-2021', enddate: '15-01-2021', currworkstep:'Branch_Approval', stat:'Sanctioned' },
            { orderid:3, name: 'LOD-000001-SIB', startdate:'15-01-2021', enddate: '', currworkstep:'LOD_Sanction', stat:'Pending' },
        ],
       
    };
});