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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var keywords = {
    "factors": {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "ten": 10,
        "eleven": 11,
        "twelve": 12,
        "thirteen": 13,
        "fourteen": 14,
        "fifteen": 15,
        "sixteen": 16,
        "seventeen": 17,
        "eighteen": 18,
        "nineteen": 19,
        "twenty": 20,
        "thirty": 30,
        "forty": 40,
        "fifty": 50,
        "sixty": 60,
        "seventy": 70,
        "eighty": 80,
        "ninety": 90,
        "hundred": 100
    },
    "multipliers": {
        "thousand": 1000,
        "million": 1000000,
        "billion": 1000000000,
        "trillion": 1000000000000,
        "quadrillion": 1000000000000000,
        "quintillion": 1000000000000000000
    },
    "Ty": {
        "2": "twenty",
        "3": "thirty",
        "4": "forty",
        "5": "fifty",
        "6": "sixty",
        "7": "seventy",
        "8": "eighty",
        "9": "ninety"
    },
    "append": {
        "3": "thousand",
        "6": "million",
        "9": "billion",
        "12": "trillion",
        "15": "quadrillion",
        "18": "quintillion"
    },
    "pluralMultipliers": {
        "hundreds": "100s",
        "thousands": "1000s",
        "millions": "1000000s",
        "billion": "1000000000s",
        "trillion": "1000000000000s",
        "quadrillion": "1000000000000000s",
        "quintillion": "1000000000000000000s"
    }
};

exports.default = function (num) {
    var text = "",
        indexing = [];
    var splitStr = num.split("");
    for (var i = splitStr.length - 1; i >= 0; i--) {
        indexing.push(i);
    }
    for (var i = 0; i < splitStr.length; i++) {
        if (indexing[i] % 3 == 2) {
            for (var keys in keywords.factors) {
                if (keywords.factors[keys] == splitStr[i]) {
                    text += keys + " hundred ";
                }
            }
        } else if (indexing[i] % 3 == 1) {
            if (splitStr[i] != 1) {
                for (var keys in keywords.Ty) {
                    if (keys == splitStr[i]) {
                        if (text.split(" ").slice(-2, -1) == "hundred" || text.split(" ").slice(-2, -1) == "thousand") {
                            text += "and " + keywords.Ty[keys] + " ";
                        } else {
                            text += keywords.Ty[keys] + " ";
                        }
                    }
                }
            } else {
                if (splitStr[i + 1] != 0) {
                    for (var keys in keywords.factors) {
                        if (keywords.factors[keys] == splitStr[i] + splitStr[i + 1]) {
                            if (text.split(" ").slice(-2, -1) == "hundred" || text.split(" ").slice(-2, -1) == "thousand") {
                                text += "and " + keys + " ";
                                splitStr[i + 1] = 0;
                            } else {
                                text += keys + " ";
                                splitStr[i + 1] = 0;
                            }
                        }
                    }
                } else {
                    if (text.split(" ").slice(-2, -1) == "hundred" || text.split(" ").slice(-2, -1) == "thousand") {
                        text += "and ten ";
                    } else {
                        text += "ten ";
                    }
                }
            }
        } else {
            if (splitStr[i] != 0) {
                for (var keys in keywords.factors) {
                    if (keywords.factors[keys] == splitStr[i]) {
                        if (text.split(" ").slice(-2, -1) == "hundred" || text.split(" ").slice(-2, -1) == "thousand") {
                            text += "and " + keys + " ";
                        } else {
                            text += keys + " ";
                        }
                    }
                }
            } else if (splitStr[i] === "0" && splitStr.length === 1) {
                text += "zero ";
            }
            for (var keys in keywords.append) {
                if (indexing[i] == keys) {
                    if (splitStr[i] != 0 || splitStr[i - 1] != 0 || splitStr[i - 2] != 0) text += keywords.append[keys] + " ";
                }
            }
        }
    }
    if (text.slice(-1) == " ") {
        text = text.slice(0, text.length - 1);
    }
    return text;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Identifier = __webpack_require__(2);

var _Identifier2 = _interopRequireDefault(_Identifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chunk = function chunk(str) {
        var main_arr = str.split(" ");
        var identifierObj = new _Identifier2.default(str, main_arr);
        identifierObj.getParsed();
};
document.getElementById("convert").addEventListener("click", function () {
        var text = document.getElementById("input").value;
        chunk(text);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Decider = __webpack_require__(3);

var _Decider2 = _interopRequireDefault(_Decider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Identifier = function () {
    function Identifier(str, main_arr) {
        _classCallCheck(this, Identifier);

        this.toParse = str;
        this.main_arr = main_arr;
    }

    _createClass(Identifier, [{
        key: "getParsed",
        value: function getParsed() {
            var pattern = /[0-9]/;
            var splittedText = this.toParse.split(" "),
                index = 0;
            var parsedArray = [];
            for (var i = 0; i < splittedText.length; i++) {
                if (pattern.test(splittedText[i])) {
                    parsedArray[index++] = [splittedText[i], i, 0];
                }
            }
            (function (main_arr) {
                var checkForDirtyBits = setInterval(function () {
                    var flag = 1;
                    for (var i = 0; i < parsedArray.length; i++) {
                        flag = flag && parsedArray[i][2];
                    }
                    if (flag) {
                        document.getElementById("output").innerHTML = main_arr.join(" ").toString();
                        clearTimeout(checkForDirtyBits);
                    }
                }, 1);
            })(this.main_arr);
            var deciderObj = new _Decider2.default(parsedArray);
            deciderObj.decider(this.main_arr);
        }
    }]);

    return Identifier;
}();

exports.default = Identifier;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Cardinal = __webpack_require__(4);

var _Cardinal2 = _interopRequireDefault(_Cardinal);

var _Phone_Number = __webpack_require__(5);

var _Phone_Number2 = _interopRequireDefault(_Phone_Number);

var _Time = __webpack_require__(6);

var _Time2 = _interopRequireDefault(_Time);

var _SuffixPrefix = __webpack_require__(7);

var _SuffixPrefix2 = _interopRequireDefault(_SuffixPrefix);

var _Date = __webpack_require__(8);

var _Date2 = _interopRequireDefault(_Date);

var _Decimal_Fraction = __webpack_require__(9);

var _Decimal_Fraction2 = _interopRequireDefault(_Decimal_Fraction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

String.prototype.contains = function (toCheck) {
    var splitStr = this.split("");
    for (var i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === toCheck) {
            return true;
        }
    }
    return false;
};

var Decider = function () {
    function Decider(arr) {
        _classCallCheck(this, Decider);

        this.deciderArray = arr;
    }

    _createClass(Decider, [{
        key: 'callbackToUpdate',
        value: function callbackToUpdate(index, value, parsing, main_arr) {
            main_arr[index] = value;
        }
    }, {
        key: 'decider',
        value: function decider(arr) {
            for (var i = 0; i < this.deciderArray.length; i++) {
                if (isNaN(this.deciderArray[i][0]) === false && this.deciderArray[i][0].contains('.') === false) {
                    var deciderArr = this.deciderArray;
                    (function (j, deciderArray, that, arr) {
                        var parsing = setTimeout(function (callbackToUpdate) {
                            var cardinalObj = new _Cardinal2.default(deciderArray[j][0]);
                            deciderArray[j][2] = 1;
                            var convertedValue = cardinalObj.converter();
                            that.callbackToUpdate(deciderArray[j][1], convertedValue, parsing, arr);
                        }, 0);
                    })(i, deciderArr, this, arr);
                } else if (this.deciderArray[i][0].contains(':') || this.deciderArray[i][0].contains('.') || this.deciderArray[i][0].contains('-') || this.deciderArray[i][0].contains('+') || this.deciderArray[i][0].contains('/')) {
                    if (this.deciderArray[i][0].contains(':')) {
                        var deciderArr = this.deciderArray;
                        (function (j, deciderArray, that, arr) {
                            var parsing = setTimeout(function (callbackToUpdate) {
                                var timeObj = new _Time2.default(deciderArray[j][0]);
                                deciderArray[j][2] = 1;
                                var convertedValue = timeObj.convertTime();
                                that.callbackToUpdate(deciderArray[j][1], convertedValue, parsing, arr);
                            }, 0);
                        })(i, deciderArr, this, arr);
                    } else if (this.deciderArray[i][0].contains('-') && this.deciderArray[i][0].split("-").length === 3 || this.deciderArray[i][0].contains('/') && this.deciderArray[i][0].split("/").length === 3) {
                        var deciderArr = this.deciderArray;
                        (function (j, deciderArray, that, arr) {
                            var parsing = setTimeout(function (callbackToUpdate) {
                                var dateobj = new _Date2.default(deciderArray[j][0]);
                                deciderArray[j][2] = 1;
                                var convertedValue = dateobj.convert();
                                that.callbackToUpdate(deciderArray[j][1], convertedValue, parsing, arr);
                            }, 0);
                        })(i, deciderArr, this, arr);
                    } else if (this.deciderArray[i][0].contains('+') || this.deciderArray[i][0].contains('-') && this.deciderArray[i][0].split("-").length === 2 && (this.deciderArray[i][0].split("-")[0].contains('+') || this.deciderArray[i][0].split("-")[0] === '0')) {
                        var deciderArr = this.deciderArray;
                        (function (j, deciderArray, that, arr) {
                            var parsing = setTimeout(function (callbackToUpdate) {
                                var phnNumObj = new _Phone_Number2.default(deciderArray[j][0]);
                                deciderArray[j][2] = 1;
                                var convertedValue = phnNumObj.converter();
                                that.callbackToUpdate(deciderArray[j][1], convertedValue, parsing, arr);
                            }, 0);
                        })(i, deciderArr, this, arr);
                    } else if (this.deciderArray[i][0].contains('.') || this.deciderArray[i][0].contains('-') && this.deciderArray[i][0].split('-').length === 2 || this.deciderArray[i][0].contains('/') && this.deciderArray[i][0].split('/').length === 2) {
                        var deciderArr = this.deciderArray;
                        (function (j, deciderArray, that, arr) {
                            var parsing = setTimeout(function (callbackToUpdate) {
                                var decFracObj = new _Decimal_Fraction2.default(deciderArray[j][0]);
                                deciderArray[j][2] = 1;
                                var convertedValue = decFracObj.convert();
                                that.callbackToUpdate(deciderArray[j][1], convertedValue, parsing, arr);
                            }, 0);
                        })(i, deciderArr, this, arr);
                    }
                } else {
                    var deciderArr = this.deciderArray;
                    (function (j, deciderArray, that, arr) {
                        var parsing = setTimeout(function (callbackToUpdate) {
                            var sufpreObj = new _SuffixPrefix2.default(deciderArray[j][0]);
                            deciderArray[j][2] = 1;
                            var convertedValue = sufpreObj.convert();
                            that.callbackToUpdate(deciderArray[j][1], convertedValue, parsing, arr);
                        }, 0);
                    })(i, deciderArr, this, arr);
                }
            }
        }
    }]);

    return Decider;
}();

exports.default = Decider;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _n2w = __webpack_require__(0);

var _n2w2 = _interopRequireDefault(_n2w);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cardinal = function () {
    function Cardinal(str) {
        _classCallCheck(this, Cardinal);

        this.toBeConverted = str;
    }

    _createClass(Cardinal, [{
        key: 'converter',
        value: function converter() {
            return (0, _n2w2.default)(this.toBeConverted);
        }
    }]);

    return Cardinal;
}();

exports.default = Cardinal;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _n2w = __webpack_require__(0);

var _n2w2 = _interopRequireDefault(_n2w);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PhoneNumber = function () {
    function PhoneNumber(num) {
        _classCallCheck(this, PhoneNumber);

        this.num = num;
    }

    _createClass(PhoneNumber, [{
        key: "converter",
        value: function converter() {
            var splittedNum = this.num.split(""),
                parsedNum = "";
            for (var i = 0; i < splittedNum.length; i++) {
                if (isNaN(splittedNum[i]) === false) {
                    parsedNum += (0, _n2w2.default)(splittedNum[i]) + " ";
                } else {
                    parsedNum += splittedNum[i] + " ";
                }
            }
            parsedNum = parsedNum.slice(0, parsedNum.length - 1);
            return parsedNum;
        }
    }]);

    return PhoneNumber;
}();

exports.default = PhoneNumber;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _n2w = __webpack_require__(0);

var _n2w2 = _interopRequireDefault(_n2w);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Array.prototype.contains = function (toCheck) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === toCheck) {
            return true;
        }
    }
    return false;
};
String.prototype.validTime = function () {
    var separators = [',', ':'];
    var splittedStr = this.split(""),
        count = 0,
        flag = 0,
        lastSeparator,
        separator;
    for (var i = 0; i < splittedStr.length; i++) {
        if (separators.contains(splittedStr[i])) {
            separator = splittedStr[i];
            if (lastSeparator === undefined || lastSeparator === splittedStr[i]) {
                flag = 1;
                lastSeparator = splittedStr[i];
                count++;
            } else {
                flag = 0;
                break;
            }
        }
    }
    if (flag) {
        return {
            "isValid": true,
            "count": count,
            "separator": separator
        };
    } else {
        return {
            "isValid": false
        };
    }
};

var Time = function () {
    function Time(str) {
        _classCallCheck(this, Time);

        this.time = str;
    }

    _createClass(Time, [{
        key: 'convertTime',
        value: function convertTime() {
            if (this.time.validTime().isValid) {
                var splittedTime = this.time.split(this.time.validTime().separator),
                    parsedTime = "",
                    count = this.time.validTime().count;
                var timeAppends = {
                    "2": "hour",
                    "1": "minute",
                    "0": "second"
                };
                if (count === 2) {
                    for (var i = 0; i < splittedTime.length; i++) {
                        if (splittedTime[i] === "00") {
                            count--;
                            continue;
                        } else {
                            parsedTime += (0, _n2w2.default)(splittedTime[i]) + " " + timeAppends[count] + this.time.validTime().separator;
                            count--;
                        }
                    }
                } else {
                    for (var i = 0; i < splittedTime.length; i++) {
                        if (splittedTime[i] === "00") {
                            continue;
                        } else {
                            parsedTime += (0, _n2w2.default)(splittedTime[i]) + this.time.validTime().separator;
                        }
                    }
                }
                return parsedTime.slice(0, parsedTime.length - 1);
            } else {
                return this.time;
            }
        }
    }]);

    return Time;
}();

exports.default = Time;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _n2w = __webpack_require__(0);

var _n2w2 = _interopRequireDefault(_n2w);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var keywords = {
    "cardinal": {
        "first": [1, "st"],
        "second": [2, "nd"],
        "third": [3, "rd"],
        "fourth": [4, "th"],
        "fifth": [5, "th"],
        "sixth": [6, "th"],
        "seventh": [7, "th"],
        "eigth": [8, "th"],
        "ninth": [9, "th"],
        "tenth": [10, "th"],
        "eleventh": [11, "th"],
        "twelfth": [12, "th"],
        "thirteenth": [13, "th"],
        "fourteenth": [14, "th"],
        "fifteenth": [15, "th"],
        "sixteenth": [16, "th"],
        "seventeenth": [17, "th"],
        "eighteenth": [18, "th"],
        "nineteenth": [19, "th"],
        "twentyth": [20, "th"]
    }
};

var SuffixPrefix = function () {
    function SuffixPrefix(str) {
        _classCallCheck(this, SuffixPrefix);

        this.str = str;
    }

    _createClass(SuffixPrefix, [{
        key: "convert",
        value: function convert() {
            var parsedStr = "";
            if ((this.str.slice(-2) === "st" || this.str.slice(-2) === "th" || this.str.slice(-2) === "rd" || this.str.slice(-2) === "nd") && isNaN(this.str.slice(0, this.length - 2)) === false) {
                if (this.str.slice(-4, -3) !== "1") {
                    if (this.str.slice(0, this.str.length - 3) !== "") {
                        parsedStr += (0, _n2w2.default)(this.str.slice(0, this.str.length - 3) + "0") + " ";
                    }
                    for (var keys in keywords.cardinal) {
                        if (keywords.cardinal[keys][0] + keywords.cardinal[keys][1] === this.str.slice(-3)) {
                            parsedStr += keys;
                        }
                    }
                } else {
                    if (this.str.slice(0, this.str.length - 4) !== "") {
                        parsedStr += (0, _n2w2.default)(this.str.slice(0, this.str.length - 4) + "00") + " ";
                    }
                    for (var keys in keywords.cardinal) {
                        if (keywords.cardinal[keys][0] + keywords.cardinal[keys][1] === this.str.slice(-4)) {
                            parsedStr += keys;
                        }
                    }
                }
            } else {
                var splitStr = this.str.split(""),
                    toBeParsed = "";
                for (var i = 0; i < splitStr.length; i++) {
                    if (isNaN(splitStr[i]) === false) {
                        toBeParsed += splitStr[i];
                        if (i === splitStr.length - 1) {
                            parsedStr += (0, _n2w2.default)(toBeParsed);
                        }
                    } else {
                        if (toBeParsed === "") {
                            parsedStr += splitStr[i];
                        } else if (toBeParsed !== "" && i === splitStr.length) {
                            parsedStr = (0, _n2w2.default)(toBeParsed) + splitStr[i];
                            toBeParsed = "";
                        } else {
                            parsedStr = (0, _n2w2.default)(toBeParsed) + splitStr[i];
                            toBeParsed = "";
                        }
                    }
                }
            }
            return parsedStr;
        }
    }]);

    return SuffixPrefix;
}();

exports.default = SuffixPrefix;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _n2w = __webpack_require__(0);

var _n2w2 = _interopRequireDefault(_n2w);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var date = {
    "1": "january",
    "2": "february",
    "3": "march",
    "4": "april",
    "5": "may",
    "6": "june",
    "7": "july",
    "8": "august",
    "9": "september",
    "10": "october",
    "11": "november",
    "12": "december"
};
var ordinals = {
    "first": [1, "st"],
    "second": [2, "nd"],
    "third": [3, "rd"],
    "fourth": [4, "th"],
    "fifth": [5, "th"],
    "sixth": [6, "th"],
    "seventh": [7, "th"],
    "eigth": [8, "th"],
    "ninth": [9, "th"],
    "tenth": [10, "th"],
    "eleventh": [11, "th"],
    "twelfth": [12, "th"],
    "thirteenth": [13, "th"],
    "fourteenth": [14, "th"],
    "fifteenth": [15, "th"],
    "sixteenth": [16, "th"],
    "seventeenth": [17, "th"],
    "eighteenth": [18, "th"],
    "nineteenth": [19, "th"],
    "twentyth": [20, "th"]
};
String.prototype.contains = function (toCheck) {
    var splitStr = this.split("");
    for (var i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === toCheck) {
            return true;
        }
    }
    return false;
};

var Date = function () {
    function Date(str) {
        _classCallCheck(this, Date);

        this.date = str;
    }

    _createClass(Date, [{
        key: "convert",
        value: function convert() {
            var parsedStr = "",
                tobeParsed = "";
            if (this.date.contains('/')) {
                var splitStr = this.date.split("/");
                if (splitStr[0].slice(0, 1) === '0') {
                    splitStr[0] = splitStr[0].slice(1);
                }
                if (splitStr[0].length === 2) {
                    if (splitStr[0].slice(0, 1) === '1') {
                        tobeParsed = splitStr[0];
                    } else {
                        parsedStr += (0, _n2w2.default)(splitStr[0].slice(0, 1) + '0') + " ";
                        tobeParsed = splitStr[0].slice(-1);
                    }
                } else {
                    tobeParsed += splitStr[0];
                }
                for (var keys in ordinals) {
                    if (ordinals[keys][0] === Number(tobeParsed)) {
                        parsedStr += keys + " ";
                        tobeParsed = "";
                    }
                }

                if (splitStr[1].slice(0, 1) === '0') {
                    splitStr[1] = splitStr[1].slice(1);
                }
                for (var keys in date) {
                    if (keys === splitStr[1]) {
                        parsedStr += date[keys] + " ";
                    }
                }
                parsedStr += (0, _n2w2.default)(splitStr[2]);
            } else if (this.date.contains('-')) {
                var splitStr = this.date.split("-");
                if (splitStr[0].slice(0, 1) === '0') {
                    splitStr[0] = splitStr[0].slice(1);
                }
                if (splitStr[0].length === 2) {
                    if (splitStr[0].slice(0, 1) === '1') {
                        tobeParsed = splitStr[0];
                    } else {
                        parsedStr += (0, _n2w2.default)(splitStr[0].slice(0, 1) + '0') + " ";
                        tobeParsed = splitStr[0].slice(-1);
                    }
                } else {
                    tobeParsed += splitStr[0];
                }
                for (var keys in ordinals) {
                    if (ordinals[keys][0] === Number(tobeParsed)) {
                        parsedStr += keys + " ";
                        tobeParsed = "";
                    }
                }

                if (splitStr[1].slice(0, 1) === '0') {
                    splitStr[1] = splitStr[1].slice(1);
                }
                for (var keys in date) {
                    if (keys === splitStr[1]) {
                        parsedStr += date[keys] + " ";
                    }
                }
                parsedStr += (0, _n2w2.default)(splitStr[2]);
            }
            return parsedStr;
        }
    }]);

    return Date;
}();

exports.default = Date;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _n2w = __webpack_require__(0);

var _n2w2 = _interopRequireDefault(_n2w);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ordinals = {
    "first": [1, "st"],
    "second": [2, "nd"],
    "third": [3, "rd"],
    "fourth": [4, "th"],
    "fifth": [5, "th"],
    "sixth": [6, "th"],
    "seventh": [7, "th"],
    "eigth": [8, "th"],
    "ninth": [9, "th"],
    "tenth": [10, "th"],
    "eleventh": [11, "th"],
    "twelfth": [12, "th"],
    "thirteenth": [13, "th"],
    "fourteenth": [14, "th"],
    "fifteenth": [15, "th"],
    "sixteenth": [16, "th"],
    "seventeenth": [17, "th"],
    "eighteenth": [18, "th"],
    "nineteenth": [19, "th"],
    "twentyth": [20, "th"]
};
String.prototype.contains = function (toCheck) {
    var splitStr = this.split("");
    for (var i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === toCheck) {
            return true;
        }
    }
    return false;
};

var DecimalFracton = function () {
    function DecimalFracton(str) {
        _classCallCheck(this, DecimalFracton);

        this.str = str;
    }

    _createClass(DecimalFracton, [{
        key: "convert",
        value: function convert() {
            var parsedStr = "";
            if (this.str.contains('.')) {
                var splitStr = this.str.split('.');
                parsedStr += (0, _n2w2.default)(splitStr[0]) + " point " + (0, _n2w2.default)(splitStr[1]);
                return parsedStr;
            } else if (this.str.contains('/')) {
                var splitStr = this.str.split('/'),
                    tobeParsed = "";
                parsedStr += (0, _n2w2.default)(splitStr[0]) + " ";
                if (splitStr[1].length >= 2) {
                    if (splitStr[1].length === 2) {
                        if (splitStr[1].slice(0, 1) === '1') {
                            tobeParsed = splitStr[1];
                        } else {
                            parsedStr += (0, _n2w2.default)(splitStr[1].slice(0, 1) + '0') + " ";
                            tobeParsed = splitStr[1].slice(-1);
                        }
                    } else {
                        if (splitStr[1].slice(-2, -1) === '1') {
                            tobeParsed = splitStr[1].slice(-2);
                            parsedStr += (0, _n2w2.default)(splitStr[1].slice(0, splitStr[1].length - 2) + '00') + " ";
                        } else {
                            parsedStr += (0, _n2w2.default)(splitStr[1].slice(0, splitStr[1].length - 1) + '0') + " ";
                            tobeParsed = splitStr[1].slice(-1);
                        }
                    }
                } else {
                    tobeParsed += splitStr[1];
                }
                for (var keys in ordinals) {
                    if (ordinals[keys][0] === Number(tobeParsed)) {
                        parsedStr += keys;
                    }
                }
                return parsedStr;
            } else if (this.str.contains('-')) {
                var splitStr = this.str.split('-'),
                    parsedStr = "";
                parsedStr += (0, _n2w2.default)(splitStr[0]) + " ";
                for (var keys in ordinals) {
                    if (ordinals[keys][0] + ordinals[keys][1] === splitStr[1]) {
                        parsedStr += keys;
                    }
                }
                return parsedStr;
            }
        }
    }]);

    return DecimalFracton;
}();

exports.default = DecimalFracton;

/***/ })
/******/ ]);