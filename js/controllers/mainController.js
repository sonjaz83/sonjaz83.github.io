app.controller('MainController', ['$scope', function($scope) {
$scope.scroll = 0;
}])

//tabs

  .controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });