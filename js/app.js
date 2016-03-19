'use strict';

var app = angular.module('myApp', [
  'pascalprecht.translate',
  'ngCookies'
  ]);

app.run(['$rootScope', function($rootScope) {
  $rootScope.lang = 'en';

}])

app.config(['$translateProvider', function($translateProvider) {

  $translateProvider
  .useStaticFilesLoader({
    prefix: '/translations/',
    suffix: '.json'
  })
  .preferredLanguage('sr')
  .useLocalStorage()
  .useMissingTranslationHandlerLog()
  .useSanitizeValueStrategy(null);

}]);

app.controller('LanguageSwitchController', ['$scope', '$rootScope', '$translate',
  function($scope, $rootScope, $translate) {

    $scope.changeLanguage = function(langKey) {
      $translate.use(langKey);
    };

    $rootScope.$on('$translateChangeSuccess', function(event, data) {

      var language = data.language;

      $rootScope.lang = language;



    });
  }

  ]);