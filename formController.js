citizenshipApp.controller('FormController', function($scope, $location) {
    $scope.nameDone = function() {
        $location.path('/about');
    }
    
    $scope.monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    $scope.dateIsValid = true;
    
    $scope.aboutDone = function() {
        if (dateValidator($scope.user.birthDay, $scope.user.birthMonth, $scope.user.birthYear)) {
            $scope.dateIsValid = true;
        } else {
            $scope.dateIsValid = false;
        }
        
        if($scope.dateIsValid) {
            $location.path('/contact');
        }
    }
});

function dateValidator(day, month, year) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var inputDate = moment([year, months.indexOf(month), day]);
    var todayDate = moment();
    if(inputDate._isValid) {
        return true;
    } else {
        return false;
    }
}