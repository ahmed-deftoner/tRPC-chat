"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/rooms/[roomId]";
exports.ids = ["pages/rooms/[roomId]"];
exports.modules = {

/***/ "./src/pages/rooms/[roomId].tsx":
/*!**************************************!*\
  !*** ./src/pages/rooms/[roomId].tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction RoomPage() {\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const roomId = query.roomId;\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    if (!session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(),\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"E:\\\\tRPC-chat\\\\t3-chat\\\\src\\\\pages\\\\rooms\\\\[roomId].tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\tRPC-chat\\\\t3-chat\\\\src\\\\pages\\\\rooms\\\\[roomId].tsx\",\n            lineNumber: 11,\n            columnNumber: 11\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"welcome to room \",\n            roomId\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\tRPC-chat\\\\t3-chat\\\\src\\\\pages\\\\rooms\\\\[roomId].tsx\",\n        lineNumber: 17,\n        columnNumber: 12\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcm9vbXMvW3Jvb21JZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFxRDtBQUNiO0FBRXhDLFNBQVNHLFFBQVEsR0FBRTtJQUNmLE1BQU0sRUFBRUMsS0FBSyxHQUFFLEdBQUdGLHNEQUFTLEVBQUU7SUFDN0IsTUFBTUcsTUFBTSxHQUFHRCxLQUFLLENBQUNDLE1BQU07SUFDM0IsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sR0FBRSxHQUFHTiwyREFBVSxFQUFFO0lBRXRDLElBQUksQ0FBQ00sT0FBTyxFQUFFO1FBQ1YscUJBQ0UsOERBQUNDLEtBQUc7c0JBQ0YsNEVBQUNDLFFBQU07Z0JBQUNDLE9BQU8sRUFBRSxJQUFNVix1REFBTSxFQUFFOzBCQUFFLE9BQUs7Ozs7O29CQUFTOzs7OztnQkFDM0MsQ0FDTjtLQUNIO0lBRUgscUJBQU8sOERBQUNRLEtBQUc7O1lBQUMsa0JBQWdCO1lBQUNILE1BQU07Ozs7OztZQUFPO0NBRTdDO0FBRUQsaUVBQWVGLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3QzLWNoYXQvLi9zcmMvcGFnZXMvcm9vbXMvW3Jvb21JZF0udHN4PzAyMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2lnbkluLCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFJvb21QYWdlKCl7XHJcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHJvb21JZCA9IHF1ZXJ5LnJvb21JZCBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuXHJcbiAgICBpZiAoIXNlc3Npb24pIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGRpdj53ZWxjb21lIHRvIHJvb20ge3Jvb21JZH08L2Rpdj5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb21QYWdlOyJdLCJuYW1lcyI6WyJzaWduSW4iLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwiUm9vbVBhZ2UiLCJxdWVyeSIsInJvb21JZCIsImRhdGEiLCJzZXNzaW9uIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/rooms/[roomId].tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/rooms/[roomId].tsx"));
module.exports = __webpack_exports__;

})();