"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/properties/[id]",{

/***/ "./pages/properties/[id].tsx":
/*!***********************************!*\
  !*** ./pages/properties/[id].tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n// pages/properties/[id].tsx\n\nvar _s = $RefreshSig$();\n\n\nconst PropertyDetails = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id } = router.query;\n    const [property, setProperty] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"PropertyDetails.useEffect\": ()=>{\n            if (!id) return;\n            const fetchProperty = {\n                \"PropertyDetails.useEffect.fetchProperty\": async ()=>{\n                    try {\n                        const res = await fetch(\"/api/properties/\".concat(id));\n                        const data = await res.json();\n                        setProperty(data);\n                    } catch (error) {\n                        console.error('Error fetching property:', error);\n                    }\n                }\n            }[\"PropertyDetails.useEffect.fetchProperty\"];\n            fetchProperty();\n        }\n    }[\"PropertyDetails.useEffect\"], [\n        id\n    ]);\n    console.log(\"HI\", property);\n    if (!property) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/pratikbhattarai/Documents/GitHub/Real-Estate-Listings-with-Filters-Sorting/pages/properties/[id].tsx\",\n            lineNumber: 30,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Property Details\"\n            }, void 0, false, {\n                fileName: \"/Users/pratikbhattarai/Documents/GitHub/Real-Estate-Listings-with-Filters-Sorting/pages/properties/[id].tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: property.image,\n                alt: property.address\n            }, void 0, false, {\n                fileName: \"/Users/pratikbhattarai/Documents/GitHub/Real-Estate-Listings-with-Filters-Sorting/pages/properties/[id].tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: property.address\n            }, void 0, false, {\n                fileName: \"/Users/pratikbhattarai/Documents/GitHub/Real-Estate-Listings-with-Filters-Sorting/pages/properties/[id].tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: property.size\n            }, void 0, false, {\n                fileName: \"/Users/pratikbhattarai/Documents/GitHub/Real-Estate-Listings-with-Filters-Sorting/pages/properties/[id].tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    property.bedrooms,\n                    \" Bedrooms\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pratikbhattarai/Documents/GitHub/Real-Estate-Listings-with-Filters-Sorting/pages/properties/[id].tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Price: $\",\n                    property.price\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pratikbhattarai/Documents/GitHub/Real-Estate-Listings-with-Filters-Sorting/pages/properties/[id].tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Added on: \",\n                    property.added\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pratikbhattarai/Documents/GitHub/Real-Estate-Listings-with-Filters-Sorting/pages/properties/[id].tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pratikbhattarai/Documents/GitHub/Real-Estate-Listings-with-Filters-Sorting/pages/properties/[id].tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PropertyDetails, \"9lb0dHMfOoQjz1YTTYzm8uIpO3o=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PropertyDetails;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PropertyDetails);\nvar _c;\n$RefreshReg$(_c, \"PropertyDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9wZXJ0aWVzL1tpZF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw0QkFBNEI7OztBQUNZO0FBQ0k7QUFHNUMsTUFBTUcsa0JBQWtCOztJQUN0QixNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxFQUFFSyxFQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUMzQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQWtCO0lBRTFERCxnREFBU0E7cUNBQUM7WUFDUixJQUFJLENBQUNJLElBQUk7WUFFVCxNQUFNSTsyREFBZ0I7b0JBQ3BCLElBQUk7d0JBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLG1CQUFzQixPQUFITjt3QkFDM0MsTUFBTU8sT0FBTyxNQUFNRixJQUFJRyxJQUFJO3dCQUMzQkwsWUFBWUk7b0JBQ2QsRUFBRSxPQUFPRSxPQUFPO3dCQUNkQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTtvQkFDNUM7Z0JBQ0Y7O1lBRUFMO1FBQ0Y7b0NBQUc7UUFBQ0o7S0FBRztJQUVQVSxRQUFRQyxHQUFHLENBQUMsTUFBS1Q7SUFFakIsSUFBSSxDQUFDQSxVQUFVO1FBQ2IscUJBQU8sOERBQUNVO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFJQyxLQUFLZCxTQUFTZSxLQUFLO2dCQUFFQyxLQUFLaEIsU0FBU2lCLE9BQU87Ozs7OzswQkFDL0MsOERBQUNDOzBCQUFJbEIsU0FBU2lCLE9BQU87Ozs7OzswQkFDckIsOERBQUNQOzBCQUFHVixTQUFTbUIsSUFBSTs7Ozs7OzBCQUNqQiw4REFBQ1Q7O29CQUFHVixTQUFTb0IsUUFBUTtvQkFBQzs7Ozs7OzswQkFDdEIsOERBQUNWOztvQkFBRTtvQkFBU1YsU0FBU3FCLEtBQUs7Ozs7Ozs7MEJBQzFCLDhEQUFDWDs7b0JBQUU7b0JBQVdWLFNBQVNzQixLQUFLOzs7Ozs7Ozs7Ozs7O0FBR2xDO0dBdENNMUI7O1FBQ1dILGtEQUFTQTs7O0tBRHBCRztBQXdDTixpRUFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3ByYXRpa2JoYXR0YXJhaS9Eb2N1bWVudHMvR2l0SHViL1JlYWwtRXN0YXRlLUxpc3RpbmdzLXdpdGgtRmlsdGVycy1Tb3J0aW5nL3BhZ2VzL3Byb3BlcnRpZXMvW2lkXS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvcHJvcGVydGllcy9baWRdLnRzeFxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BlcnR5IH0gZnJvbSAnLi4vLi4vdHlwZXMvcHJvcGVydHknO1xuXG5jb25zdCBQcm9wZXJ0eURldGFpbHMgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtwcm9wZXJ0eSwgc2V0UHJvcGVydHldID0gdXNlU3RhdGU8UHJvcGVydHkgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaWQpIHJldHVybjtcblxuICAgIGNvbnN0IGZldGNoUHJvcGVydHkgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9wcm9wZXJ0aWVzLyR7aWR9YCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBzZXRQcm9wZXJ0eShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb3BlcnR5OicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hQcm9wZXJ0eSgpO1xuICB9LCBbaWRdKTtcblxuICBjb25zb2xlLmxvZyhcIkhJXCIscHJvcGVydHkpO1xuXG4gIGlmICghcHJvcGVydHkpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+UHJvcGVydHkgRGV0YWlsczwvaDE+XG4gICAgICA8aW1nIHNyYz17cHJvcGVydHkuaW1hZ2V9IGFsdD17cHJvcGVydHkuYWRkcmVzc30gLz5cbiAgICAgIDxoMj57cHJvcGVydHkuYWRkcmVzc308L2gyPlxuICAgICAgPHA+e3Byb3BlcnR5LnNpemV9PC9wPlxuICAgICAgPHA+e3Byb3BlcnR5LmJlZHJvb21zfSBCZWRyb29tczwvcD5cbiAgICAgIDxwPlByaWNlOiAke3Byb3BlcnR5LnByaWNlfTwvcD5cbiAgICAgIDxwPkFkZGVkIG9uOiB7cHJvcGVydHkuYWRkZWR9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvcGVydHlEZXRhaWxzO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvcGVydHlEZXRhaWxzIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJmZXRjaFByb3BlcnR5IiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInAiLCJkaXYiLCJoMSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiYWRkcmVzcyIsImgyIiwic2l6ZSIsImJlZHJvb21zIiwicHJpY2UiLCJhZGRlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/properties/[id].tsx\n"));

/***/ })

});