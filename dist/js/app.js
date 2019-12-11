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
/***/ (function(module, exports) {

eval("const searchFilter = (() => {\r\n    let productData = null, filteredData = null;\r\n    const filterMap = {\r\n        1: 'relevance',\r\n        2: 'popular',\r\n        3: 'lowPrice',\r\n        4: 'highPrice',\r\n        5: 'new'\r\n    }\r\n\r\n    const getJsonData = () => {\r\n        let url = \"https://raw.githubusercontent.com/swarnjeet7/search-with-filters/master/db.json\";\r\n        fetch(url)\r\n            .then(response => response.json())\r\n            .then(res => {\r\n                printData(res);\r\n                eventBindings();\r\n            });\r\n    }\r\n    \r\n    const sortData = (data, type) => {\r\n        data.sort((a, b) => {\r\n            if(type == 2) {\r\n                return b.ratings - a.ratings;\r\n            }\r\n            if(type == 3) {\r\n                return a.price - b.price;\r\n            }\r\n            if(type == 4) {\r\n                return b.price - a.price;\r\n            }\r\n            if(type == 5) {\r\n                return new Date(b.date).getTime() - new Date(a.date).getTime();\r\n            }\r\n        });\r\n        return data;\r\n    }\r\n    const searchProducts = (query) => {\r\n        filteredData = productData.filter(product => {\r\n            const productName = product.product_name.toLowerCase();\r\n            return productName.includes(query);\r\n        });\r\n        printData(filteredData);\r\n    }\r\n    const applyFilter = (type) => {\r\n        let data = filteredData || productData, newData;\r\n        if(type != 1) {\r\n            newData = sortData(data, type);\r\n        }\r\n        switch (type) {\r\n            case 1:\r\n                printData(productData);\r\n                break;\r\n            default:\r\n                printData(newData);\r\n                break;\r\n        }\r\n    }\r\n    const eventBindings = () => {\r\n        const searchInput = document.getElementById('searchProduct');\r\n        if(searchInput) {\r\n            searchInput.addEventListener('keyup', event => {\r\n                searchProducts(this.value.toLowerCase());\r\n            });\r\n        }\r\n        \r\n        const radioInputs = document.querySelectorAll('.filter-list input');\r\n        if(radioInputs) {\r\n            radioInputs.forEach(input => {\r\n                input.addEventListener('change', () => {\r\n                    const type = this.value;\r\n                    applyFilter(type);\r\n                });\r\n            });\r\n        }\r\n        \r\n    }\r\n    const printData = (data) => {\r\n        if(productData === null) {\r\n            productData = data;\r\n        }\r\n        const length = data.length;\r\n        let cards = '';\r\n        const box = document.getElementById('productList');\r\n        for(let i=0; i <length; i++) {\r\n            const product = data[i];\r\n            cards += `\r\n                <div class=\"card\">\r\n                    <div class=\"card__header\">\r\n                        <div class=\"card__title\">${product.product_name}</div>\r\n                        <div class=\"card__image\">\r\n                            <img src=\"${product.product_image}\" alt=\"${product.product_name}\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card__body\">\r\n                        <div class=\"card__ratings\">\r\n                            <div class=\"d-flex\">\r\n                                <div class=\"flex100px\">\r\n                                    <div class=\"ratings\"></div>\r\n                                    <div class=\"ratings-fill\" style=\"width: ${product.ratings/5*100}%\"></div>\r\n                                </div>\r\n                                <div class=\"flex1\">\r\n                                    (243 Ratings) >\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card__price-box\">\r\n                            <div class=\"card__price\">Rs. ${product.price}</div>\r\n                            <div class=\"card__emi-price\">EMI from Rs. ${product.emi_price}</div>\r\n                        </div>\r\n                        <div class=\"card__desc\">\r\n                            <ul class=\"card__desc-list\">\r\n                                <li>Lorem ipsum dolor sit amet</li>\r\n                                <li>adipisicing elit Voluptates</li>\r\n                                <li>quod provident quaerat</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>`;\r\n        }\r\n        box.innerHTML = cards;\r\n    }\r\n\r\n    return {\r\n        getJsonData,\r\n    }\r\n})();\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    searchFilter.getJsonData();\r\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ });