/*!
 * Webogram v0.5.2 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.bootstrap',
  'ui.utils',
  'ngAnimate',
  'toastr',
  'LocalStorageModule',
  'mediaPlayer',
  'izhukov.utils',
  'izhukov.mtproto',
  'izhukov.mtproto.wrapper',
  'myApp.filters',
  'myApp.services',
  /*PRODUCTION_ONLY_BEGIN
  'myApp.templates',
  PRODUCTION_ONLY_END*/
  'myApp.directives',
  'myApp.controllers'
]).
config(['$locationProvider', '$routeProvider', '$compileProvider', 'StorageProvider', 'localStorageServiceProvider', function($locationProvider, $routeProvider, $compileProvider, StorageProvider, localStorageServiceProvider) {

  localStorageServiceProvider.setPrefix('tsupport');
  localStorageServiceProvider.setStorageCookie(0, '/');
  localStorageServiceProvider.setStorageCookieDomain('https://rubenlagus.github.io'); // TODO set production domain

  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|filesystem|chrome-extension|app):|data:image\//);
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|file|tg|mailto|blob|filesystem|chrome-extension|app):|data:/);

  if (Config.Modes.test) {
    StorageProvider.setPrefix('t_');
  }

  $routeProvider.when('/', {templateUrl: templateUrl('welcome'), controller: 'AppWelcomeController'});
  $routeProvider.when('/login', {templateUrl: templateUrl('login'), controller: 'AppLoginController'});
  $routeProvider.when('/im', {templateUrl: templateUrl('im'), controller: 'AppIMController', reloadOnSearch: false});
  $routeProvider.otherwise({redirectTo: '/'});

}]);
