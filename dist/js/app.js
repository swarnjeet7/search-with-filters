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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { FILTER_MAP } = __webpack_require__(/*! ./constant */ \"./src/js/constant.js\");\r\nconst { fetchData } = __webpack_require__(/*! ./http */ \"./src/js/http.js\");\r\nconst { printCards } = __webpack_require__(/*! ./util */ \"./src/js/util.js\");\r\n\r\nconst searchInit = () => {\r\n    let url = \"https://raw.githubusercontent.com/swarnjeet7/search-with-filters/master/data.json?version=11122019\";\r\n\r\n    fetchData(url).then(data => {\r\n        if(Array.isArray(data) && data.length) {\r\n            printCards(data);\r\n        } else {\r\n            console.error(\"Something Went Wrong\");\r\n        }\r\n    });\r\n}\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    searchInit()\r\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/constant.js":
/*!****************************!*\
  !*** ./src/js/constant.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const FILTER_MAP = {\r\n    'rel': 1,\r\n    'popular': 2,\r\n    'lowPrice': 3,\r\n    'highPrice': 4,\r\n    'new': 5,\r\n}\r\nlet dataJson = null; // we store data in variable to save the request;\r\nlet filteredData = null; // we store data after as per user input.\r\n\r\nexports.FILTER_MAP = FILTER_MAP;\r\nexports.dataJson = dataJson;\r\nexports.filteredData = filteredData;\n\n//# sourceURL=webpack:///./src/js/constant.js?");

/***/ }),

/***/ "./src/js/http.js":
/*!************************!*\
  !*** ./src/js/http.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const fetchData = (url) => {\r\n    return fetch(url).then(response => response.json()).then(data => {\r\n        return data;\r\n    }).catch(function(error) {\r\n        return error;\r\n    });\r\n}\r\n\r\nexports.fetchData = fetchData;\n\n//# sourceURL=webpack:///./src/js/http.js?");

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let { dataJson, filteredData, FILTER_MAP } = __webpack_require__(/*! ./constant */ \"./src/js/constant.js\"); \r\n\r\nconst eventBindings = () => {\r\n    const searchInput = document.getElementById('searchProduct');\r\n    if(searchInput) {\r\n        searchInput.addEventListener('keyup', event => {\r\n            const userInputVal = event.target.value;\r\n            printCards(filterData(dataJson, userInputVal))\r\n        });\r\n    }\r\n    \r\n    const radioInputs = document.querySelectorAll('.filter-list input');\r\n    if(radioInputs) {\r\n        radioInputs.forEach(input => {\r\n            input.addEventListener('change', (event) => {\r\n                const type = event.target.value;\r\n                applyFilter(type);\r\n            });\r\n        });\r\n    }\r\n}\r\n\r\nconst printCards = (data) => {\r\n    if(!data) return false;\r\n    if(dataJson === null) { dataJson = data; }\r\n    const length = data.length;\r\n    let cards = '';\r\n    const box = document.getElementById('productList');\r\n    for(let i=0; i <length; i++) {\r\n        const product = data[i];\r\n        cards += `\r\n            <div class=\"card\">\r\n                <div class=\"card__header\">\r\n                    <div class=\"card__title\">${product.product_name}</div>\r\n                    <div class=\"card__image\">\r\n                        <img src=\"${product.product_image}\" alt=\"${product.product_name}\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"card__body\">\r\n                    <div class=\"card__ratings\">\r\n                        <div class=\"d-flex\">\r\n                            <div class=\"flex100px\">\r\n                                <div class=\"ratings\"></div>\r\n                                <div class=\"ratings-fill\" style=\"width: ${product.star/5*100}%\"></div>\r\n                            </div>\r\n                            <div class=\"flex1\">\r\n                                (${product.ratings} Ratings) >\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card__price-box\">\r\n                        <div class=\"card__price\">Rs. ${product.price}</div>\r\n                        <div class=\"card__emi-price\">EMI from Rs. ${product.emi_price}</div>\r\n                    </div>\r\n                    <div class=\"card__desc\">\r\n                        <ul class=\"card__desc-list\">\r\n                            <li>Lorem ipsum dolor sit amet</li>\r\n                            <li>adipisicing elit Voluptates</li>\r\n                            <li>quod provident quaerat</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>`;\r\n    }\r\n    box.innerHTML = cards;\r\n}\r\n\r\nconst sortData = (data, type) => {\r\n    if(type == FILTER_MAP.rel) return data;\r\n    data.sort((a, b) => {\r\n        if(type == FILTER_MAP.popular) {\r\n            return b.star - a.star;\r\n        }\r\n        if(type == FILTER_MAP.lowPrice) {\r\n            return a.price - b.price;\r\n        }\r\n        if(type == FILTER_MAP.highPrice) {\r\n            return b.price - a.price;\r\n        }\r\n        if(type == FILTER_MAP.new) {\r\n            return new Date(b.date).getTime() - new Date(a.date).getTime();\r\n        } else {\r\n            return a - b;\r\n        }\r\n    });\r\n    return data;\r\n}\r\n\r\nconst applyFilter = (type) => {\r\n    if(type == FILTER_MAP.rel) {\r\n        printCards(dataJson);\r\n        return;\r\n    }\r\n    let newData = sortData(filteredData || dataJson, type);\r\n    printCards(newData);\r\n}\r\n\r\nconst filterData = (data, query) => {\r\n    filteredData = data.filter(product => {\r\n        if(product.product_name) {\r\n            const productName = product.product_name.toLowerCase();\r\n            return productName.includes(query.toLowerCase());\r\n        } else {\r\n            return product;\r\n        }\r\n    });\r\n    return filteredData;\r\n}\r\n\r\neventBindings();\r\n\r\nexports.filterData = filterData;\r\nexports.printCards = printCards;\r\nexports.sortData = sortData;\n\n//# sourceURL=webpack:///./src/js/util.js?");

/***/ })

/******/ });