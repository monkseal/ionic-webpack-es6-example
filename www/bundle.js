/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _app = __webpack_require__(2);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _profile = __webpack_require__(5);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	// the 2nd parameter is an array of 'requires'
	angular.module('starter', ['ionic', _profile2.default.name]).run(function ($ionicPlatform) {
	  $ionicPlatform.ready(function () {
	    if (window.cordova && window.cordova.plugins.Keyboard) {
	      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	      // for form inputs)
	      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	
	      // Don't remove this line unless you know what you are doing. It stops the viewport
	      // from snapping when text inputs are focused. Ionic handles this internally for
	      // a much nicer keyboard experience.
	      cordova.plugins.Keyboard.disableScroll(true);
	    }
	    if (window.StatusBar) {
	      StatusBar.styleDefault();
	    }
	  });
	}).config(_app2.default); // Ionic Starter App

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tabs = __webpack_require__(3);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _first = __webpack_require__(4);
	
	var _first2 = _interopRequireDefault(_first);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function AppRouter($stateProvider, $urlRouterProvider) {
	    $stateProvider.state('app', {
	        url: "/app",
	        abstract: true,
	        template: _tabs2.default
	    }).state('app.home', {
	        url: "/home",
	        views: {
	            'home-tab': {
	                template: _first2.default
	            }
	        }
	    });
	
	    $urlRouterProvider.otherwise('/app/home');
	}
	
	exports.default = AppRouter;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "\n<ion-tabs class=\"tabs-icon-top tabs-positive\" >\n  <ion-tab title=\"Home\" icon=\"ion-home\" href=\"#/app/home\">\n      <ion-nav-view name=\"home-tab\"></ion-nav-view>\n   </ion-tab>\n   <ion-tab title=\"Profile\" icon=\"ion-person\" href=\"#/app/profile\">\n       <ion-nav-view name=\"profile-tab\"></ion-nav-view>\n    </ion-tab>\n</ion-tabs>\n"

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<ion-view>\n    <ion-nav-title>\n        Home\n    </ion-nav-title>\n    <ion-content>\n        <h1>Header Text</h1>\n    </ion-content>\n</ion-view>\n"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _profile = __webpack_require__(6);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	var _profile3 = __webpack_require__(7);
	
	var _profile4 = _interopRequireDefault(_profile3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ProfileModule = angular.module('profile', []);
	
	angular.module('profile').config(_profile4.default).controller('ProfileCtrl', _profile2.default);
	
	exports.default = ProfileModule;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ProfileCtrl = function ProfileCtrl() {
	    _classCallCheck(this, ProfileCtrl);
	
	    this.userName = 'John Doe';
	};
	
	exports.default = ProfileCtrl;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _profileView = __webpack_require__(8);
	
	var _profileView2 = _interopRequireDefault(_profileView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ProfileRoutes($stateProvider) {
	    $stateProvider.state('app.profile', {
	        url: "/profile",
	        views: {
	            'profile-tab': {
	                template: _profileView2.default,
	                controller: 'ProfileCtrl',
	                controllerAs: 'profile'
	            }
	        }
	    });
	}
	
	exports.default = ProfileRoutes;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<ion-view>\n    <ion-nav-title>\n        Profile\n    </ion-nav-title>\n    <ion-content>\n        <h1>This is profile page</h1>\n        Username: {{profile.userName}}\n    </ion-content>\n</ion-view>\n"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map