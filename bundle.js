/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://freshwater/./src/style.scss?");

/***/ }),

/***/ "./src/components/footerComponent/footer.js":
/*!**************************************************!*\
  !*** ./src/components/footerComponent/footer.js ***!
  \**************************************************/
/***/ (() => {

eval("// footer zipper\n\nconst arrow1 = document.getElementById('arrow-1');\nconst arrow2 = document.getElementById('arrow-2');\n\nconst menuAccount = document.getElementById('expand-account');\nconst menuInfo = document.getElementById('expand-info');\n\narrow1.addEventListener('click', () => {\n  menuAccount.classList.toggle('desktop');\n});\narrow2.addEventListener('click', () => {\n  menuInfo.classList.toggle('desktop');\n});\n\n//# sourceURL=webpack://freshwater/./src/components/footerComponent/footer.js?");

/***/ }),

/***/ "./src/components/heroComponent/hero.js":
/*!**********************************************!*\
  !*** ./src/components/heroComponent/hero.js ***!
  \**********************************************/
/***/ (() => {

eval("// Hero carousel\n\nconst carousel = document.querySelector('.hero-slider');\nconst carouselImages = carousel.getElementsByTagName('li');\nconst carouselNavButtons = document.querySelectorAll('.hero-carousel-nav');\nlet currentIndex = 0;\n\n// Show the current slide and hide the rest\nfunction showSlide(index) {\n  [...carouselImages].map((image) => image.classList.remove('active'));\n  carouselImages[index].classList.add('active');\n\n  [...carouselNavButtons].map((dot) => dot.classList.remove('active'));\n  carouselNavButtons[index].classList.add('active');\n}\n\nfunction nextSlide() {\n  currentIndex++;\n  if (currentIndex >= carouselImages.length) {\n    currentIndex = 0;\n  }\n  showSlide(currentIndex);\n}\n\n// Automatic slide change\nlet slideInterval = setInterval(nextSlide, 3000);\n\n// Event listener for navigation buttons\n[...carouselNavButtons].forEach((button) => {\n  button.addEventListener('click', (e) => {\n    const slideIndex = parseInt(e.target.getAttribute('data-slide-index'));\n    clearInterval(slideInterval);\n    currentIndex = slideIndex;\n    showSlide(currentIndex);\n    slideInterval = setInterval(nextSlide, 3000);\n  });\n});\n\n\n//# sourceURL=webpack://freshwater/./src/components/heroComponent/hero.js?");

/***/ }),

/***/ "./src/components/productsComponent/products.js":
/*!******************************************************!*\
  !*** ./src/components/productsComponent/products.js ***!
  \******************************************************/
/***/ (() => {

eval("const slidesContainer = document.getElementById('slides-container');\nconst slide = document.querySelector('.slide');\nconst prevButton = document.getElementById('prev-product');\nconst nextButton = document.getElementById('next-product');\n\nnextButton.addEventListener('click', () => {\n  const slideWidth = slide.clientWidth;\n  slidesContainer.scrollLeft += slideWidth;\n});\n\nprevButton.addEventListener('click', () => {\n  const slideWidth = slide.clientWidth;\n  slidesContainer.scrollLeft -= slideWidth;\n});\n\n\n//# sourceURL=webpack://freshwater/./src/components/productsComponent/products.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _components_heroComponent_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/heroComponent/hero */ \"./src/components/heroComponent/hero.js\");\n/* harmony import */ var _components_heroComponent_hero__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_heroComponent_hero__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_productsComponent_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/productsComponent/products */ \"./src/components/productsComponent/products.js\");\n/* harmony import */ var _components_productsComponent_products__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_productsComponent_products__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_footerComponent_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footerComponent/footer.js */ \"./src/components/footerComponent/footer.js\");\n/* harmony import */ var _components_footerComponent_footer_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_footerComponent_footer_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst BODY = document.body;\n\n// open hamburger menu\nconst hamburgerMenu = document.getElementById('ham-menu');\nhamburgerMenu.addEventListener('click', () => BODY.classList.toggle('open'));\n\n// prevent form submitting\nconst forms = document.querySelectorAll('form');\n[...forms].map((form) => form.addEventListener('submit', (e) => e.preventDefault()));\n\n\n//# sourceURL=webpack://freshwater/./src/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;