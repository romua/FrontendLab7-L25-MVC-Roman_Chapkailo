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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operations__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaceBuilder__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resultToPage__ = __webpack_require__(3);





Object(__WEBPACK_IMPORTED_MODULE_1__interfaceBuilder__["a" /* interfaceBuilder */])();
document.body.addEventListener('click', (e)=>{
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let result = 0;
    switch (e.target.id) {
        case 'buttonPlus':
            result = __WEBPACK_IMPORTED_MODULE_0__operations__["a" /* default */].mathPlus(a,b);
            break;
        case 'buttonMinus':
            result = __WEBPACK_IMPORTED_MODULE_0__operations__["a" /* default */].mathMinus(a,b);
            break;
        case 'buttonMultiply':
            result = __WEBPACK_IMPORTED_MODULE_0__operations__["a" /* default */].mathMultiply(a,b);
            break;
        case 'buttonDivide':
            result = __WEBPACK_IMPORTED_MODULE_0__operations__["a" /* default */].mathDivide(a,b);
            break;
        default:
    }
    Object(__WEBPACK_IMPORTED_MODULE_2__resultToPage__["a" /* resultToPage */])(result);
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function mathPlus(a,b) {

    return parseInt(a,10)+parseInt(b,10);
}
function mathMinus(a,b) {
    return parseInt(a,10)-parseInt(b,10);
}
function mathMultiply(a,b) {
    return parseInt(a,10)*parseInt(b,10);
}
function mathDivide(a,b) {
    return parseInt(a,10)/parseInt(b,10);
}



/* harmony default export */ __webpack_exports__["a"] = ({
    mathPlus: mathPlus,
    mathMinus: mathMinus,
    mathMultiply: mathMultiply,
    mathDivide: mathDivide

});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = interfaceBuilder;
function interfaceBuilder() {
    let inputA = document.createElement('INPUT');
    inputA.setAttribute('TYPE', 'number');
    inputA.setAttribute('id','a');

    document.body.appendChild(inputA);
    let br = document.createElement('br');
    document.body.appendChild(br);

    let inputB = document.createElement('INPUT');
    inputB.setAttribute('TYPE', 'number');
    inputB.setAttribute('id','b');
    document.body.appendChild(inputB);

    let br1 = document.createElement('br');
    document.body.appendChild(br1);
    document.body.appendChild(br1);

    let buttonPlus = document.createElement('INPUT');
    buttonPlus.setAttribute('TYPE', 'button');
    buttonPlus.setAttribute('value', '+');
    buttonPlus.setAttribute('id','buttonPlus');
    document.body.appendChild(buttonPlus);

    let buttonMinus = document.createElement('INPUT');
    buttonMinus.setAttribute('TYPE', 'button');
    buttonMinus.setAttribute('value', '-');
    buttonMinus.setAttribute('id','buttonMinus');
    document.body.appendChild(buttonMinus);

    let buttonMultiply = document.createElement('INPUT');
    buttonMultiply.setAttribute('TYPE', 'button');
    buttonMultiply.setAttribute('value', '*');
    buttonMultiply.setAttribute('id','buttonMultiply');
    document.body.appendChild(buttonMultiply);

    let buttonDivide = document.createElement('INPUT');
    buttonDivide.setAttribute('TYPE', 'button');
    buttonDivide.setAttribute('value', ':');
    buttonDivide.setAttribute('id','buttonDivide');
    document.body.appendChild(buttonDivide);

    let resultDiv = document.createElement('div');
    resultDiv.setAttribute('id','result');
    document.body.appendChild(resultDiv);
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = resultToPage;
function resultToPage(data) {
    let resultDiv = document.getElementById('result');
    resultDiv.innerText = data;
}

/***/ })
/******/ ]);