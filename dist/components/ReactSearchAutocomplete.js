"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_RESULTS = exports.DEFAULT_INPUT_DEBOUNCE = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var fuse_js_1 = __importDefault(require("fuse.js"));
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var config_1 = require("../config/config");
var utils_1 = require("../utils/utils");
var Results_1 = __importDefault(require("./Results"));
var SearchInput_1 = __importDefault(require("./SearchInput"));
exports.DEFAULT_INPUT_DEBOUNCE = 200;
exports.MAX_RESULTS = 10;
function ReactSearchAutocomplete(_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.fuseOptions, fuseOptions = _c === void 0 ? config_1.defaultFuseOptions : _c, _d = _a.inputDebounce, inputDebounce = _d === void 0 ? exports.DEFAULT_INPUT_DEBOUNCE : _d, _e = _a.onSearch, onSearch = _e === void 0 ? function () { } : _e, _f = _a.onHover, onHover = _f === void 0 ? function () { } : _f, _g = _a.onSelect, onSelect = _g === void 0 ? function () { } : _g, _h = _a.onFocus, onFocus = _h === void 0 ? function () { } : _h, _j = _a.onBlur, onBlur = _j === void 0 ? function () { } : _j, _k = _a.onMouseLeave, onMouseLeave = _k === void 0 ? function () { } : _k, _l = _a.onClear, onClear = _l === void 0 ? function () { } : _l, _m = _a.showIcon, showIcon = _m === void 0 ? true : _m, _o = _a.hoverShadow, hoverShadow = _o === void 0 ? true : _o, _p = _a.showClear, showClear = _p === void 0 ? true : _p, _q = _a.maxResults, maxResults = _q === void 0 ? exports.MAX_RESULTS : _q, _r = _a.placeholder, placeholder = _r === void 0 ? '' : _r, _s = _a.autoFocus, autoFocus = _s === void 0 ? false : _s, _t = _a.styling, styling = _t === void 0 ? {} : _t, _u = _a.resultStringKeyName, resultStringKeyName = _u === void 0 ? 'name' : _u, _v = _a.inputSearchString, inputSearchString = _v === void 0 ? '' : _v, formatResult = _a.formatResult, _w = _a.showNoResults, showNoResults = _w === void 0 ? true : _w, _x = _a.showNoResultsText, showNoResultsText = _x === void 0 ? 'No results' : _x, _y = _a.showItemsOnFocus, showItemsOnFocus = _y === void 0 ? false : _y, _z = _a.showLine, showLine = _z === void 0 ? true : _z, _0 = _a.enableEraseResults, enableEraseResults = _0 === void 0 ? true : _0, rest = __rest(_a, ["items", "fuseOptions", "inputDebounce", "onSearch", "onHover", "onSelect", "onFocus", "onBlur", "onMouseLeave", "onClear", "showIcon", "hoverShadow", "showClear", "maxResults", "placeholder", "autoFocus", "styling", "resultStringKeyName", "inputSearchString", "formatResult", "showNoResults", "showNoResultsText", "showItemsOnFocus", "showLine", "enableEraseResults"]);
    var theme = __assign(__assign({}, config_1.defaultTheme), styling);
    var options = __assign(__assign({}, config_1.defaultFuseOptions), fuseOptions);
    var fuse = new fuse_js_1.default(items, options);
    fuse.setCollection(items);
    var _1 = (0, react_1.useState)(inputSearchString), searchString = _1[0], setSearchString = _1[1];
    var _2 = (0, react_1.useState)([]), results = _2[0], setResults = _2[1];
    var _3 = (0, react_1.useState)(-1), highlightedItem = _3[0], setHighlightedItem = _3[1];
    var _4 = (0, react_1.useState)(false), isSearchComplete = _4[0], setIsSearchComplete = _4[1];
    var _5 = (0, react_1.useState)(false), isTyping = _5[0], setIsTyping = _5[1];
    var _6 = (0, react_1.useState)(false), showNoResultsFlag = _6[0], setShowNoResultsFlag = _6[1];
    var _7 = (0, react_1.useState)(false), hasFocus = _7[0], setHasFocus = _7[1];
    (0, react_1.useEffect)(function () {
        setSearchString(inputSearchString);
        var timeoutId = setTimeout(function () { return setResults(fuseResults(inputSearchString)); }, 0);
        return function () { return clearTimeout(timeoutId); };
    }, [inputSearchString]);
    (0, react_1.useEffect)(function () {
        (searchString === null || searchString === void 0 ? void 0 : searchString.length) > 0 &&
            results &&
            (results === null || results === void 0 ? void 0 : results.length) > 0 &&
            setResults(fuseResults(searchString));
    }, [items]);
    (0, react_1.useEffect)(function () {
        if (showNoResults &&
            searchString.length > 0 &&
            !isTyping &&
            results.length === 0 &&
            !isSearchComplete) {
            setShowNoResultsFlag(true);
        }
        else {
            setShowNoResultsFlag(false);
        }
    }, [isTyping, showNoResults, isSearchComplete, searchString, results]);
    (0, react_1.useEffect)(function () {
        if (showItemsOnFocus && results.length === 0 && searchString.length === 0 && hasFocus) {
            setResults(items.slice(0, maxResults));
        }
    }, [showItemsOnFocus, results, searchString, hasFocus]);
    (0, react_1.useEffect)(function () {
        var handleDocumentClick = function () {
            if (enableEraseResults) {
                eraseResults();
            }
            setHasFocus(false);
        };
        document.addEventListener('click', handleDocumentClick);
        return function () { return document.removeEventListener('click', handleDocumentClick); };
    }, []);
    var handleOnFocus = function (event) {
        onFocus(event);
        setHasFocus(true);
    };
    var callOnSearch = function (keyword) {
        var newResults = [];
        (keyword === null || keyword === void 0 ? void 0 : keyword.length) > 0 && (newResults = fuseResults(keyword));
        setResults(newResults);
        onSearch(keyword, newResults);
        setIsTyping(false);
    };
    var handleOnSearch = react_1.default.useCallback(inputDebounce > 0
        ? (0, utils_1.debounce)(function (keyword) { return callOnSearch(keyword); }, inputDebounce)
        : function (keyword) { return callOnSearch(keyword); }, [items]);
    var handleOnClick = function (result) {
        if (enableEraseResults) {
            eraseResults();
        }
        onSelect(result);
        setSearchString(result[resultStringKeyName]);
        setHighlightedItem(0);
    };
    var fuseResults = function (keyword) {
        return fuse
            .search(keyword, { limit: maxResults })
            .map(function (result) { return (__assign({}, result.item)); })
            .slice(0, maxResults);
    };
    var handleSetSearchString = function (_a) {
        var target = _a.target;
        var keyword = target.value;
        setSearchString(keyword);
        handleOnSearch(keyword);
        setIsTyping(true);
        if (isSearchComplete) {
            setIsSearchComplete(false);
        }
    };
    var eraseResults = function () {
        setResults([]);
        setIsSearchComplete(true);
    };
    var handleSetHighlightedItem = function (_a) {
        var index = _a.index, event = _a.event;
        var itemIndex = -1;
        var setValues = function (index) {
            setHighlightedItem(index);
            (results === null || results === void 0 ? void 0 : results[index]) && onHover(results[index]);
        };
        if (index !== undefined) {
            setHighlightedItem(index);
            (results === null || results === void 0 ? void 0 : results[index]) && onHover(results[index]);
        }
        else if (event) {
            switch (event.key) {
                case 'Enter':
                    if (results.length > 0 && results[highlightedItem]) {
                        event.preventDefault();
                        onSelect(results[highlightedItem]);
                        setSearchString(results[highlightedItem][resultStringKeyName]);
                        onSearch(results[highlightedItem][resultStringKeyName], results);
                    }
                    else {
                        onSearch(searchString, results);
                    }
                    setHighlightedItem(-1);
                    if (enableEraseResults) {
                        eraseResults();
                    }
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    itemIndex = highlightedItem > -1 ? highlightedItem - 1 : results.length - 1;
                    setValues(itemIndex);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    itemIndex = highlightedItem < results.length - 1 ? highlightedItem + 1 : -1;
                    setValues(itemIndex);
                    break;
                default:
                    break;
            }
        }
    };
    return ((0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, __assign({ theme: theme }, { children: (0, jsx_runtime_1.jsx)(StyledReactSearchAutocomplete, __assign({ hoverShadow: hoverShadow }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "wrapper", onMouseLeave: onMouseLeave }, { children: [(0, jsx_runtime_1.jsx)(SearchInput_1.default, { searchString: searchString, setSearchString: handleSetSearchString, autoFocus: autoFocus, onFocus: handleOnFocus, onBlur: onBlur, onClear: onClear, placeholder: placeholder, showIcon: showIcon, showClear: showClear, setHighlightedItem: handleSetHighlightedItem }), (0, jsx_runtime_1.jsx)(Results_1.default, { results: results, onClick: handleOnClick, setSearchString: setSearchString, showIcon: showIcon, maxResults: maxResults, resultStringKeyName: resultStringKeyName, formatResult: formatResult, highlightedItem: highlightedItem, setHighlightedItem: handleSetHighlightedItem, showNoResultsFlag: showNoResultsFlag, showNoResultsText: showNoResultsText, showLine: showLine })] })) })) })));
}
exports.default = ReactSearchAutocomplete;
var StyledReactSearchAutocomplete = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  height: ", ";\n\n  > .wrapper {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: ", ";\n\n    border: ", ";\n    border-radius: ", ";\n\n    background-color: ", ";\n    color: ", ";\n\n    font-size: ", ";\n    font-family: ", ";\n\n    z-index: ", ";\n    ", "\n\n    .result-item {\n      cursor: pointer;\n    }\n  }\n"], ["\n  position: relative;\n\n  height: ", ";\n\n  > .wrapper {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: ", ";\n\n    border: ", ";\n    border-radius: ", ";\n\n    background-color: ", ";\n    color: ", ";\n\n    font-size: ", ";\n    font-family: ", ";\n\n    z-index: ", ";\n    ", "\n\n    .result-item {\n      cursor: pointer;\n    }\n  }\n"])), function (props) { var _a; return parseInt((_a = props.theme.height) !== null && _a !== void 0 ? _a : '44') + 2 + 'px'; }, function (props) { return props.theme.alignItems; }, function (props) { return props.theme.border; }, function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.backgroundColor; }, function (props) { return props.theme.color; }, function (props) { return props.theme.fontSize; }, function (props) { return props.theme.fontFamily; }, function (props) { return props.theme.zIndex; }, function (props) {
    return props.hoverShadow
        ? "&:hover {\n            box-shadow: ".concat(function (props) { return props.theme.boxShadow; }, ";\n          }\n          &:active {\n            box-shadow: ").concat(function (props) { return props.theme.boxShadow; }, ";\n          }\n          &:focus-within {\n            box-shadow: ").concat(function (props) { return props.theme.boxShadow; }, ";\n          }")
        : "";
});
var templateObject_1;
