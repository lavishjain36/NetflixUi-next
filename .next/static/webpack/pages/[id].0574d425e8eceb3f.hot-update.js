"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./pages/[id].js":
/*!***********************!*\
  !*** ./pages/[id].js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/movie */ \"./pages/data/movie.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Movie = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // const movie=movies.find((m)=>m.id===router.query.id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: _data_movie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].poster,\n                    alt: _data_movie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title,\n                    width: \"50%\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\next.js\\\\my-project\\\\pages\\\\[id].js\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: _data_movie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title\n                }, void 0, false, {\n                    fileName: \"D:\\\\next.js\\\\my-project\\\\pages\\\\[id].js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: _data_movie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].description\n                }, void 0, false, {\n                    fileName: \"D:\\\\next.js\\\\my-project\\\\pages\\\\[id].js\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\next.js\\\\my-project\\\\pages\\\\[id].js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\next.js\\\\my-project\\\\pages\\\\[id].js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Movie, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Movie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBa0M7QUFDTTtBQUNFO0FBRTFDLE1BQU1HLFFBQU0sSUFBSTs7SUFDWixNQUFNQyxTQUFPSCxzREFBU0E7SUFDdEIsd0RBQXdEO0lBQ3hELHFCQUNJLDhEQUFDQywwREFBTUE7a0JBQ0gsNEVBQUNHOzs4QkFDRyw4REFBQ0M7b0JBQUlDLEtBQUtQLDBEQUFhO29CQUFFUyxLQUFLVCx5REFBWTtvQkFBRVcsT0FBTTs7Ozs7OzhCQUNsRCw4REFBQ0M7OEJBQUlaLHlEQUFZOzs7Ozs7OEJBQ2pCLDhEQUFDYTs4QkFBR2IsK0RBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0QztHQVpNRzs7UUFDV0Ysa0RBQVNBOzs7S0FEcEJFO0FBYU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2lkXS5qcz9hMzA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb3ZpZXMgZnJvbSBcIi4vZGF0YS9tb3ZpZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuXHJcbmNvbnN0IE1vdmllPSgpPT57XHJcbiAgICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XHJcbiAgICAvLyBjb25zdCBtb3ZpZT1tb3ZpZXMuZmluZCgobSk9Pm0uaWQ9PT1yb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e21vdmllcy5wb3N0ZXJ9IGFsdD17bW92aWVzLnRpdGxlfSB3aWR0aD1cIjUwJVwiLz5cclxuICAgICAgICAgICAgICAgIDxoMj57bW92aWVzLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD57bW92aWVzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllOyJdLCJuYW1lcyI6WyJtb3ZpZXMiLCJ1c2VSb3V0ZXIiLCJMYXlvdXQiLCJNb3ZpZSIsInJvdXRlciIsInNlY3Rpb24iLCJpbWciLCJzcmMiLCJwb3N0ZXIiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaDIiLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[id].js\n"));

/***/ })

});