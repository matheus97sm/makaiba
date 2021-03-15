/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./app/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_animacoes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/animacoes */ \"./app/js/animacoes.js\");\n/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/menu */ \"./app/js/menu.js\");\n/* harmony import */ var _js_copyright__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/copyright */ \"./app/js/copyright.js\");\n/* harmony import */ var _js_projetosOutside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/projetosOutside */ \"./app/js/projetosOutside.js\");\n/* harmony import */ var _js_carrossel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/carrossel */ \"./app/js/carrossel.js\");\n/* harmony import */ var _js_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/gallery */ \"./app/js/gallery.js\");\n/* harmony import */ var _js_modernizr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/modernizr */ \"./app/js/modernizr.js\");\n/* harmony import */ var _js_modernizr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_modernizr__WEBPACK_IMPORTED_MODULE_7__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_js_projetosOutside__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\nObject(_js_carrossel__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\nObject(_js_animacoes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nObject(_js_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\nObject(_js_copyright__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\nObject(_js_gallery__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/js/animacoes.js":
/*!*****************************!*\
  !*** ./app/js/animacoes.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return animacoes; });\nfunction animacoes() {\r\n  const animaItem = document.querySelectorAll(\"[data-animar]\");\r\n\r\n  animaItem.forEach(item => {\r\n    window.addEventListener(\"scroll\", e => {\r\n      const distTop = window.innerHeight * 0.85;\r\n\r\n      if (item.getBoundingClientRect().top < distTop)\r\n        item.classList.add(\"animar\");\r\n    });\r\n  });\r\n\r\n  const animarComTempo = document.querySelectorAll(\"[data-anima-tempo]\");\r\n\r\n  window.setTimeout(() => {\r\n    animarComTempo.forEach(item => {\r\n      item.classList.add(\"animar\");\r\n    });\r\n  }, 500);\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/animacoes.js?");

/***/ }),

/***/ "./app/js/carrossel.js":
/*!*****************************!*\
  !*** ./app/js/carrossel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return carrossel; });\nfunction carrossel() {\r\n  const carrosselItems = document.querySelectorAll('.banner-item');\r\n  const carrosselItemsImg = document.querySelectorAll('.banner-item-img');\r\n  const carrosselButtonWrapper = document.querySelector('.banner-buttons');\r\n  let atual = 0;\r\n  let ableButton = 1;\r\n  let start;\r\n\r\n  if (carrosselItems.length === 0) return null;\r\n\r\n  carrosselItems[0].classList.add('ativo');\r\n  carrosselItemsImg[0].classList.add('ativo');\r\n\r\n  carrosselItems.forEach((item, index) => {\r\n    const dot = document.createElement('div');\r\n    dot.classList.add('dot');\r\n    dot.classList.add(index === 0 && 'ativo')\r\n    carrosselButtonWrapper.appendChild(dot);\r\n  });\r\n\r\n  const dotButtons = document.querySelectorAll('.banner-buttons .dot');\r\n\r\n  dotButtons.forEach((dot, index) => {\r\n    dot.addEventListener('click', e => {\r\n      e.preventDefault();\r\n\r\n      if (ableButton !== 1) return;\r\n\r\n      ableButton = 0;\r\n\r\n      clearInterval(start);\r\n\r\n      carrosselItems.forEach((carrosselInative, index) => {\r\n        carrosselInative.classList.forEach(itemClass => {\r\n          if (itemClass === 'ativo') {\r\n            carrosselInative.classList.add('inativo');\r\n            carrosselItemsImg[index].classList.add('inativo');\r\n          }\r\n        })\r\n        \r\n        carrosselInative.classList.remove('ativo');\r\n        carrosselItemsImg[index].classList.remove('ativo');\r\n      });\r\n    \r\n      atual = index;\r\n\r\n      dotButtons.forEach(cleanDot => {\r\n        cleanDot.classList.remove('ativo');\r\n      });\r\n\r\n      dot.classList.add('ativo');\r\n      setClass(carrosselItems, atual);\r\n      setClass(carrosselItemsImg, atual);\r\n\r\n      setTime();\r\n\r\n      const setRecoveryToButton = window.setTimeout(() => {\r\n        ableButton = 1;\r\n      }, 3000);\r\n    });\r\n  });\r\n\r\n  function setTime() {\r\n    start = window.setInterval(() => {\r\n      ableButton = 0;\r\n\r\n      if (atual === carrosselItems.length - 1) {\r\n        atual = 0;\r\n      } else {\r\n        atual++;\r\n      }\r\n\r\n      setClass(carrosselItems, atual);\r\n      setClass(carrosselItemsImg, atual);\r\n      setClass(dotButtons, atual);\r\n\r\n      const setRecoveryToButton = window.setTimeout(() => {\r\n        ableButton = 1;\r\n      }, 3000);\r\n    }, 10000);\r\n  }\r\n\r\n  setTime();\r\n}\r\n\r\nfunction setClass(items, atual) {\r\n  items.forEach(item => {\r\n    item.classList.forEach(itemClass => {\r\n      if (itemClass === 'ativo') {\r\n        item.classList.add('inativo');\r\n      }\r\n    })\r\n    item.classList.remove('ativo');\r\n  });\r\n\r\n  items[atual].classList.remove('inativo');\r\n\r\n  const setClass = window.setTimeout(() => {\r\n    items[atual].classList.add('ativo');\r\n  }, 2000);\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/carrossel.js?");

/***/ }),

/***/ "./app/js/copyright.js":
/*!*****************************!*\
  !*** ./app/js/copyright.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return copyright; });\nfunction copyright () {\r\n  const copyrightField = document.querySelector('.copyright-year');\r\n\r\n  if (!copyrightField) return null;\r\n\r\n  const year = new Date().getFullYear();\r\n\r\n  copyrightField.innerText = year;\r\n}\n\n//# sourceURL=webpack:///./app/js/copyright.js?");

/***/ }),

/***/ "./app/js/gallery.js":
/*!***************************!*\
  !*** ./app/js/gallery.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return gallery; });\nfunction gallery() {\r\n  const galleryImg = document.querySelector('.projeto-gallery-img');\r\n  const galleryImgArray = document.querySelectorAll('.projeto-gallery-img-item');\r\n  const galleryTextArray = document.querySelectorAll('.projeto-gallery-txt-item');\r\n  const galleryGridArray = document.querySelectorAll('.projeto-gallery-grid-item');\r\n  const galleryGrid = document.querySelector('.projeto-gallery-grid');\r\n  const galleryCounter = document.querySelector('.projeto-gallery-page');\r\n  const buttonLeft = document.querySelector('.projeto-gallery-left');\r\n  const buttonRight = document.querySelector('.projeto-gallery-right');\r\n  const buttonGrid = document.querySelector('.projeto-gallery-button-grid');\r\n  const buttonFullscreen = document.querySelector('.projeto-gallery-button-full');\r\n  const buttonGridClose = document.querySelector('.projeto-gallery-grid-close');\r\n  let atual = 0;\r\n  let touchStartX = 0;\r\n  let touchEndX = 0;\r\n\r\n  if (galleryImgArray.length === 0) return null;\r\n\r\n  const counter = document.createElement('span');\r\n  counter.innerText = `${atual + 1}/${galleryImgArray.length}`;\r\n  galleryCounter.appendChild(counter);\r\n\r\n  galleryImgArray[atual].classList.add('ativo');\r\n  galleryTextArray[atual].classList.add('ativo');\r\n\r\n  buttonLeft.addEventListener('click', e => {\r\n    e.preventDefault();\r\n\r\n    if (atual === 0)\r\n      atual = galleryImgArray.length - 1;\r\n    else\r\n      atual--;\r\n\r\n    setClass(galleryImgArray, atual);\r\n    setClass(galleryTextArray, atual);\r\n    counter.innerText = `${atual + 1}/${galleryImgArray.length}`;\r\n  });\r\n\r\n  buttonRight.addEventListener('click', e => {\r\n    e.preventDefault();\r\n\r\n    if (atual === galleryImgArray.length - 1)\r\n      atual = 0;\r\n    else\r\n      atual++;\r\n\r\n    setClass(galleryImgArray, atual);\r\n    setClass(galleryTextArray, atual);\r\n    counter.innerText = `${atual + 1}/${galleryImgArray.length}`;\r\n  });\r\n\r\n  buttonGrid.addEventListener('click', e => {\r\n    e.preventDefault();\r\n\r\n    galleryGrid.classList.add('ativo');\r\n  });\r\n\r\n  buttonGridClose.addEventListener('click', e => {\r\n    e.preventDefault();\r\n\r\n    galleryGrid.classList.remove('ativo');\r\n  });\r\n\r\n  galleryGridArray.forEach((item, index) => {\r\n    item.addEventListener('click', e => {\r\n      e.preventDefault();\r\n\r\n      galleryGrid.classList.remove('ativo');\r\n\r\n      atual = index;\r\n      \r\n      setClass(galleryImgArray, atual);\r\n      setClass(galleryTextArray, atual);\r\n      counter.innerText = `${atual + 1}/${galleryImgArray.length}`;\r\n\r\n      galleryImg.requestFullscreen();\r\n    });\r\n  });\r\n\r\n  buttonFullscreen.addEventListener('click', e => {\r\n    e.preventDefault();\r\n\r\n    galleryImg.requestFullscreen();\r\n  });\r\n\r\n  galleryImg.addEventListener('mouseenter', e => {\r\n    galleryImg.classList.add('ativo');\r\n  });\r\n\r\n  galleryImg.addEventListener('mouseleave', e => {\r\n    galleryImg.classList.remove('ativo');\r\n  });\r\n\r\n  galleryImg.addEventListener('click', e => {\r\n    e.preventDefault();\r\n\r\n    if (e.offsetX / galleryImg.clientWidth < 0.2) {\r\n      if (atual === 0)\r\n        atual = galleryImgArray.length - 1;\r\n      else\r\n        atual--;\r\n\r\n      setClass(galleryImgArray, atual);\r\n      setClass(galleryTextArray, atual);\r\n      counter.innerText = `${atual + 1}/${galleryImgArray.length}`;\r\n    }\r\n    \r\n    if (e.offsetX / galleryImg.clientWidth > 0.8) {\r\n      if (atual === galleryImgArray.length - 1)\r\n        atual = 0;\r\n      else\r\n        atual++;  \r\n\r\n      setClass(galleryImgArray, atual);\r\n      setClass(galleryTextArray, atual);\r\n      counter.innerText = `${atual + 1}/${galleryImgArray.length}`;\r\n    }\r\n  });\r\n\r\n  window.addEventListener('keydown', e => {\r\n    if (e.key === \"ArrowLeft\") {\r\n      if (atual === 0)\r\n        atual = galleryImgArray.length - 1;\r\n      else\r\n        atual--;\r\n\r\n      setClass(galleryImgArray, atual);\r\n      setClass(galleryTextArray, atual);\r\n      counter.innerText = `${atual + 1}/${galleryImgArray.length}`;\r\n    }\r\n\r\n    if (e.key === \"ArrowRight\") {\r\n      if (atual === galleryImgArray.length - 1)\r\n        atual = 0;\r\n      else\r\n        atual++;\r\n\r\n      setClass(galleryImgArray, atual);\r\n      setClass(galleryTextArray, atual);\r\n      counter.innerText = `${atual + 1}/${galleryImgArray.length}`;\r\n    }\r\n  });\r\n\r\n  galleryImg.addEventListener('touchstart', e => {\r\n    if (e.touches.length === 1) {\r\n      touchStartX = e.touches[0].clientX;\r\n    }\r\n  });\r\n\r\n  galleryImg.addEventListener('touchend', e => {\r\n    if (e.changedTouches.length === 1) {\r\n      touchEndX = e.changedTouches[0].clientX;\r\n    }\r\n\r\n    if (touchStartX > touchEndX) {\r\n      if (atual === galleryImgArray.length - 1)\r\n        atual = 0;\r\n      else\r\n        atual++;\r\n\r\n      setClass(galleryImgArray, atual);\r\n      setClass(galleryTextArray, atual);\r\n      counter.innerText = `${atual + 1}/${galleryImgArray.length}`;\r\n    }\r\n\r\n    if (touchStartX < touchEndX) {\r\n      if (atual === 0)\r\n        atual = galleryImgArray.length - 1;\r\n      else\r\n        atual--;\r\n\r\n      setClass(galleryImgArray, atual);\r\n      setClass(galleryTextArray, atual);\r\n      counter.innerText = `${atual + 1}/${galleryImgArray.length}`;\r\n    }\r\n  });\r\n}\r\n\r\nfunction setClass(items, atual) {\r\n  items.forEach(item => {\r\n    item.classList.remove('ativo');\r\n  });\r\n\r\n  items[atual].classList.add('ativo');\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/gallery.js?");

/***/ }),

/***/ "./app/js/menu.js":
/*!************************!*\
  !*** ./app/js/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return openMenu; });\nfunction openMenu() {\r\n  const menuHamb = document.querySelector('[data-menu=\"button\"]');\r\n  const menu = document.querySelector('[data-menu=\"menu\"]');\r\n  let ativo = false;\r\n\r\n  if (!menuHamb || !menu) return null;\r\n\r\n  menuHamb.addEventListener(\"click\", e => {\r\n    e.preventDefault();\r\n\r\n    menu.classList.toggle(\"ativo\");\r\n    menuHamb.classList.toggle(\"ativo\");\r\n\r\n    ativo = !ativo;\r\n\r\n    if (!!ativo) {\r\n      window.scrollTo({\r\n        top: 0,\r\n        left: 0,\r\n        behavior: 'smooth'\r\n      });\r\n      document.body.style.setProperty('overflow-y', 'hidden');\r\n    } else {\r\n      document.body.style.setProperty('overflow-y', 'scroll');\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/menu.js?");

/***/ }),

/***/ "./app/js/modernizr.js":
/*!*****************************!*\
  !*** ./app/js/modernizr.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,\"function\")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split(\".\"),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?\"\":\"no-\")+l.join(\"-\"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||\"\";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp(\"(^|\\\\s)\"+A+\"no-js(\\\\s|$)\");n=n.replace(o,\"$1\"+A+\"js$2\")}Modernizr._config.enableClasses&&(n+=\" \"+A+e.join(\" \"+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if(\"object\"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split(\".\"),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),\"undefined\"!=typeof t)return Modernizr;n=\"function\"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?\"\":\"no-\")+o.join(\"-\")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:\"3.6.0\",_config:{classPrefix:\"\",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c=\"svg\"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,\"undefined\")||o(e.call,\"undefined\")?function(e,n){return n in e&&o(e.constructor.prototype[n],\"undefined\")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&\"load\"===n.type?1==t.width:!1,a=\"webp\"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:\"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=\",name:\"webp\"},{uri:\"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==\",name:\"webp.alpha\"},{uri:\"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA\",name:\"webp.animation\"},{uri:\"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=\",name:\"webp.lossless\"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&\"load\"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);\n\n//# sourceURL=webpack:///./app/js/modernizr.js?");

/***/ }),

/***/ "./app/js/projetosOutside.js":
/*!***********************************!*\
  !*** ./app/js/projetosOutside.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return projetosOutside; });\nfunction projetosOutside() {\r\n  const projetosArray = document.querySelectorAll('.projeto-card');\r\n  const projetosDadosArray = document.querySelectorAll('.projeto-card-dados');\r\n\r\n  if (window.innerWidth < 768) {\r\n    window.addEventListener('scroll', showCardGradual);\r\n  }\r\n\r\n  window.addEventListener('resize', e => {\r\n    if (window.innerWidth > 768) {\r\n      window.removeEventListener('scroll', showCardGradual);\r\n    } else {\r\n      window.addEventListener('scroll', showCardGradual);\r\n    }\r\n  });\r\n\r\n  function showCardGradual() {\r\n    projetosArray.forEach((projeto, index) => {\r\n      const objectDistance = projeto.getBoundingClientRect().top + projeto.getBoundingClientRect().height / 2;\r\n      const opacityValue = (objectDistance - (window.innerHeight / 2)) / (window.innerHeight / 2);\r\n    \r\n      projetosDadosArray[index].style.setProperty('opacity', opacityValue > 0 ? 1 - opacityValue : 1 - -opacityValue);\r\n    });\r\n  }\r\n}\n\n//# sourceURL=webpack:///./app/js/projetosOutside.js?");

/***/ }),

/***/ "./app/style.scss":
/*!************************!*\
  !*** ./app/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/style.scss?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./app/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./app/index.js */\"./app/index.js\");\n\n\n//# sourceURL=webpack:///multi_./app/index.js?");

/***/ })

/******/ });