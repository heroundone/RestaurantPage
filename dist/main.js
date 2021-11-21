/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomepage\": () => (/* binding */ createHomepage)\n/* harmony export */ });\n/* harmony import */ var _zap_s_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zap's-pizza.jpg */ \"./src/zap's-pizza.jpg\");\n// make it an immediately invoked function later\n\n\nconst createHomepage = () => {\n    // array to use for appending to container later\n    let elements = [];\n\n    // push element onto array\n    function addToArray(element) {\n        elements.push(element);\n    }\n\n    // container to append to\n    let container = document.getElementById('content');\n    Object.assign(container.style,{display:'flex',flexDirection:'column'});\n\n    // name of business\n    let business = document.createElement('h1');\n    business.textContent = \"Zap's Pizza\";\n    addToArray(business);\n\n    // picture of business\n    let picture = document.createElement('img');\n    picture.setAttribute('src', _zap_s_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__);\n    picture.setAttribute('alt', 'pizza parlor');\n    Object.assign(picture.style,{height:'auto',width:'200px'});\n    addToArray(picture);\n\n    // tagline\n    let tagline = document.createElement('div');\n    tagline.textContent = 'Pizza with some pizzazz';\n    addToArray(tagline);\n\n    // blurb\n    let blurb = document.createElement('div');\n    blurb.textContent = \"Tired of the same old pizza? Need to spice it up some, well Zap's does spice and plenty more.\"\n    addToArray(blurb);\n\n    // add to homepage\n    elements.forEach(index => container.appendChild(index));\n\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.js */ \"./src/tabs.js\");\n\n\n\n// initial load of website upon visit\n(function () {\n    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.createHomepage)();\n    _tabs_js__WEBPACK_IMPORTED_MODULE_1__.createTabs();\n})();\n\n\n// event listener function for each tab\n\nfunction addTabsListener() {\n    // get nodelist of all buttons\n    let buttons = document.querySelectorAll('button');\n\n    // add event listener to each\n    buttons.forEach(button => button.addEventListener('click', (e) => {\n\n        // get text of button that was clicked\n        let buttonText = e.target.textContent;\n\n        // check which tab was clicked, and generate content for that tab\n        if(buttonText === 'home') {\n            generatePage((0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.createHomepage)());\n        }\n        else if(buttonText === 'menu') {\n            generatePage(createMenu());\n        }\n        else {\n            generatePage(createContact());\n        };\n    }));\n}\n\n// clear content from page\nfunction clearpage() {\n    let content = document.getElementById('content');\n    while(content.firstChild) {\n        content.removeChild(content.firstChild);\n    }\n}\n\n// generate content for this specific page\nfunction generatePage(pageFunction) {\n    clearpage();\n    pageFunction;\n    _tabs_js__WEBPACK_IMPORTED_MODULE_1__.createTabs();\n    addTabsListener();\n}\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeButton\": () => (/* binding */ makeButton),\n/* harmony export */   \"createTabs\": () => (/* binding */ createTabs)\n/* harmony export */ });\n// function to generate buttons\nfunction makeButton(tabName) {\n    let button = document.createElement('button');\n    Object.assign(button.style,{padding:'20px',margin:'0px'});\n    button.textContent = tabName;\n    return button;\n};\n\nconst createTabs = () => {\n    // element to which all is appended\n    let content = document.getElementById('content');\n\n    // container for buttons\n    let container = document.createElement('div');\n    Object.assign(container.style,{display:'flex',gap:'0px',});\n\n    // make buttons\n    let buttons = [];\n    buttons.push(makeButton('home'));\n    buttons.push(makeButton('menu'));\n    buttons.push(makeButton('contact'));\n\n    // add tabs to container and container to content(tabs must be topmost content)\n    buttons.forEach(button => container.appendChild(button));\n    content.insertAdjacentElement(\"afterbegin\",container);\n};\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/tabs.js?");

/***/ }),

/***/ "./src/zap's-pizza.jpg":
/*!*****************************!*\
  !*** ./src/zap's-pizza.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"700f65d4e41d911078e7.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/zap's-pizza.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;