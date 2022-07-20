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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("zod");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _server_db_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../server/db/client */ \"(api)/./src/server/db/client.ts\");\n\n\n// Prisma adapter for NextAuth, optional and can be removed\n\n\nconst authOptions = {\n    // Include user.id on session\n    callbacks: {\n        session ({ session , user  }) {\n            if (session.user) {\n                session.user.id = user.id;\n            }\n            return session;\n        }\n    },\n    // Configure one or more authentication providers\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_server_db_client__WEBPACK_IMPORTED_MODULE_3__.prisma),\n    providers: [\n        // ...add more providers here\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"Credentials\",\n            credentials: {\n                name: {\n                    label: \"Name\",\n                    type: \"text\",\n                    placeholder: \"Enter your name\"\n                }\n            },\n            async authorize (credentials, _req) {\n                const user = {\n                    id: 1,\n                    name: (credentials === null || credentials === void 0 ? void 0 : credentials.name) ?? \"J Smith\"\n                };\n                return user;\n            }\n        }), \n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    session: {\n        strategy: \"jwt\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMkQ7QUFFTztBQUVsRSwyREFBMkQ7QUFDRDtBQUNQO0FBRzVDLE1BQU1JLFdBQVcsR0FBb0I7SUFDMUMsNkJBQTZCO0lBQzdCQyxTQUFTLEVBQUU7UUFDVEMsT0FBTyxFQUFDLEVBQUVBLE9BQU8sR0FBRUMsSUFBSSxHQUFFLEVBQUU7WUFDekIsSUFBSUQsT0FBTyxDQUFDQyxJQUFJLEVBQUU7Z0JBQ2hCRCxPQUFPLENBQUNDLElBQUksQ0FBQ0MsRUFBRSxHQUFHRCxJQUFJLENBQUNDLEVBQUUsQ0FBQzthQUMzQjtZQUNELE9BQU9GLE9BQU8sQ0FBQztTQUNoQjtLQUNGO0lBQ0QsaURBQWlEO0lBQ2pERyxPQUFPLEVBQUVQLHdFQUFhLENBQUNDLHFEQUFNLENBQUM7SUFDOUJPLFNBQVMsRUFBRTtRQUVULDZCQUE2QjtRQUM3QlQsc0VBQW1CLENBQUM7WUFDbEJVLElBQUksRUFBRSxhQUFhO1lBQ25CQyxXQUFXLEVBQUU7Z0JBQ1hELElBQUksRUFBRTtvQkFDSkUsS0FBSyxFQUFFLE1BQU07b0JBQ2JDLElBQUksRUFBRSxNQUFNO29CQUNaQyxXQUFXLEVBQUUsaUJBQWlCO2lCQUMvQjthQUNGO1lBQ0QsTUFBTUMsU0FBUyxFQUFDSixXQUFXLEVBQUVLLElBQUksRUFBRTtnQkFDakMsTUFBTVYsSUFBSSxHQUFHO29CQUFFQyxFQUFFLEVBQUUsQ0FBQztvQkFBRUcsSUFBSSxFQUFFQyxDQUFBQSxXQUFXLGFBQVhBLFdBQVcsV0FBTSxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLFdBQVcsQ0FBRUQsSUFBSSxLQUFJLFNBQVM7aUJBQUU7Z0JBQzVELE9BQU9KLElBQUksQ0FBQzthQUNiO1NBQ0YsQ0FBQztLQUNIO0lBQ0RXLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGVBQWU7SUFDbkNmLE9BQU8sRUFBQztRQUNOZ0IsUUFBUSxFQUFDLEtBQUs7S0FDZjtDQUNGLENBQUM7QUFFRixpRUFBZXRCLGdEQUFRLENBQUNJLFdBQVcsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdDMtY2hhdC8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzUwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IHR5cGUgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IERpc2NvcmRQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9kaXNjb3JkXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuXG4vLyBQcmlzbWEgYWRhcHRlciBmb3IgTmV4dEF1dGgsIG9wdGlvbmFsIGFuZCBjYW4gYmUgcmVtb3ZlZFxuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL2RiL2NsaWVudFwiO1xuaW1wb3J0IHsgZW52IH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9lbnZcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIC8vIEluY2x1ZGUgdXNlci5pZCBvbiBzZXNzaW9uXG4gIGNhbGxiYWNrczoge1xuICAgIHNlc3Npb24oeyBzZXNzaW9uLCB1c2VyIH0pIHtcbiAgICAgIGlmIChzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdXNlci5pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICBwcm92aWRlcnM6IFtcbiAgIFxuICAgIC8vIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgbGFiZWw6IFwiTmFtZVwiLFxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIHlvdXIgbmFtZVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgX3JlcSkge1xuICAgICAgICBjb25zdCB1c2VyID0geyBpZDogMSwgbmFtZTogY3JlZGVudGlhbHM/Lm5hbWUgPz8gXCJKIFNtaXRoXCIgfTtcbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbiAgc2Vzc2lvbjp7XG4gICAgc3RyYXRlZ3k6J2p3dCdcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ1c2VyIiwiaWQiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhdXRob3JpemUiLCJfcmVxIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsInN0cmF0ZWd5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/server/db/client.ts":
/*!*********************************!*\
  !*** ./src/server/db/client.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../env */ \"(api)/./src/server/env.js\");\n// src/server/db/client.ts\n\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (_env__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV !== \"production\") {\n    global.prisma = prisma;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2RiL2NsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsMEJBQTBCO0FBQ29CO0FBQ2pCO0FBTXRCLE1BQU1FLE1BQU0sR0FDakJDLE1BQU0sQ0FBQ0QsTUFBTSxJQUNiLElBQUlGLHdEQUFZLENBQUM7SUFDZkksR0FBRyxFQUFFO1FBQUMsT0FBTztLQUFDO0NBQ2YsQ0FBQyxDQUFDO0FBRUwsSUFBSUgsOENBQVksS0FBSyxZQUFZLEVBQUU7SUFDakNFLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNLENBQUM7Q0FDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90My1jaGF0Ly4vc3JjL3NlcnZlci9kYi9jbGllbnQudHM/MjcyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2VydmVyL2RiL2NsaWVudC50c1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBlbnYgfSBmcm9tIFwiLi4vZW52XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsLnByaXNtYSB8fFxuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IFtcInF1ZXJ5XCJdLFxuICB9KTtcblxuaWYgKGVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTtcbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJlbnYiLCJwcmlzbWEiLCJnbG9iYWwiLCJsb2ciLCJOT0RFX0VOViJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/server/db/client.ts\n");

/***/ }),

/***/ "(api)/./src/server/env-schema.js":
/*!**********************************!*\
  !*** ./src/server/env-schema.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { z  } = __webpack_require__(/*! zod */ \"zod\");\nconst envSchema = z.object({\n    DATABASE_URL: z.string().url(),\n    NODE_ENV: z.enum([\n        \"development\",\n        \"test\",\n        \"production\"\n    ]),\n    NEXTAUTH_SECRET: z.string(),\n    NEXTAUTH_URL: z.string().url(),\n    DISCORD_CLIENT_ID: z.string(),\n    DISCORD_CLIENT_SECRET: z.string()\n});\nmodule.exports.envSchema = envSchema;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2Vudi1zY2hlbWEuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNLEVBQUVBLENBQUMsR0FBRSxHQUFHQyxtQkFBTyxDQUFDLGdCQUFLLENBQUM7QUFFNUIsTUFBTUMsU0FBUyxHQUFHRixDQUFDLENBQUNHLE1BQU0sQ0FBQztJQUN6QkMsWUFBWSxFQUFFSixDQUFDLENBQUNLLE1BQU0sRUFBRSxDQUFDQyxHQUFHLEVBQUU7SUFDOUJDLFFBQVEsRUFBRVAsQ0FBQyxDQUFDUSxJQUFJLENBQUM7UUFBQyxhQUFhO1FBQUUsTUFBTTtRQUFFLFlBQVk7S0FBQyxDQUFDO0lBQ3ZEQyxlQUFlLEVBQUVULENBQUMsQ0FBQ0ssTUFBTSxFQUFFO0lBQzNCSyxZQUFZLEVBQUVWLENBQUMsQ0FBQ0ssTUFBTSxFQUFFLENBQUNDLEdBQUcsRUFBRTtJQUM5QkssaUJBQWlCLEVBQUVYLENBQUMsQ0FBQ0ssTUFBTSxFQUFFO0lBQzdCTyxxQkFBcUIsRUFBRVosQ0FBQyxDQUFDSyxNQUFNLEVBQUU7Q0FDbEMsQ0FBQztBQUVGUSx3QkFBd0IsR0FBR1gsU0FBUyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdDMtY2hhdC8uL3NyYy9zZXJ2ZXIvZW52LXNjaGVtYS5qcz84YWMzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgeiB9ID0gcmVxdWlyZShcInpvZFwiKTtcblxuY29uc3QgZW52U2NoZW1hID0gei5vYmplY3Qoe1xuICBEQVRBQkFTRV9VUkw6IHouc3RyaW5nKCkudXJsKCksXG4gIE5PREVfRU5WOiB6LmVudW0oW1wiZGV2ZWxvcG1lbnRcIiwgXCJ0ZXN0XCIsIFwicHJvZHVjdGlvblwiXSksXG4gIE5FWFRBVVRIX1NFQ1JFVDogei5zdHJpbmcoKSxcbiAgTkVYVEFVVEhfVVJMOiB6LnN0cmluZygpLnVybCgpLFxuICBESVNDT1JEX0NMSUVOVF9JRDogei5zdHJpbmcoKSxcbiAgRElTQ09SRF9DTElFTlRfU0VDUkVUOiB6LnN0cmluZygpLFxufSk7XG5cbm1vZHVsZS5leHBvcnRzLmVudlNjaGVtYSA9IGVudlNjaGVtYTtcbiJdLCJuYW1lcyI6WyJ6IiwicmVxdWlyZSIsImVudlNjaGVtYSIsIm9iamVjdCIsIkRBVEFCQVNFX1VSTCIsInN0cmluZyIsInVybCIsIk5PREVfRU5WIiwiZW51bSIsIk5FWFRBVVRIX1NFQ1JFVCIsIk5FWFRBVVRIX1VSTCIsIkRJU0NPUkRfQ0xJRU5UX0lEIiwiRElTQ09SRF9DTElFTlRfU0VDUkVUIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/server/env-schema.js\n");

/***/ }),

/***/ "(api)/./src/server/env.js":
/*!***************************!*\
  !*** ./src/server/env.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// @ts-check\n/**\n * This file is included in `/next.config.js` which ensures the app isn't built with invalid env vars.\n * It has to be a `.js`-file to be imported there.\n */ const { envSchema  } = __webpack_require__(/*! ./env-schema */ \"(api)/./src/server/env-schema.js\");\nconst env = envSchema.safeParse(process.env);\nconst formatErrors = (/** @type {import('zod').ZodFormattedError<Map<string,string>,string>} */ errors)=>Object.entries(errors).map(([name, value])=>{\n        if (value && \"_errors\" in value) return `${name}: ${value._errors.join(\", \")}\\n`;\n    }).filter(Boolean);\nif (!env.success) {\n    console.error(\"\\u274C Invalid environment variables:\\n\", ...formatErrors(env.error.format()));\n    process.exit(1);\n}\nmodule.exports.env = env.data;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2Vudi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFLQTtBQUxBLFlBQVk7QUFDWjs7O0dBR0csQ0FDSCxNQUFNLEVBQUVBLFNBQVMsR0FBRSxHQUFHQyxtQkFBTyxDQUFDLHNEQUFjLENBQUM7QUFFN0MsTUFBTUMsR0FBRyxHQUFHRixTQUFTLENBQUNHLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDRixHQUFHLENBQUM7QUFFNUMsTUFBTUcsWUFBWSxHQUFHLENBQ25CLHlFQUF5RSxDQUN6RUMsTUFBTSxHQUVOQyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDLENBQ25CRyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUVDLEtBQUssQ0FBQyxHQUFLO1FBQ3RCLElBQUlBLEtBQUssSUFBSSxTQUFTLElBQUlBLEtBQUssRUFDN0IsT0FBTyxDQUFDLEVBQUVELElBQUksQ0FBQyxFQUFFLEVBQUVDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbkQsQ0FBQyxDQUNEQyxNQUFNLENBQUNDLE9BQU8sQ0FBQztBQUVwQixJQUFJLENBQUNiLEdBQUcsQ0FBQ2MsT0FBTyxFQUFFO0lBQ2hCQyxPQUFPLENBQUNDLEtBQUssQ0FDWCx5Q0FBb0MsS0FDakNiLFlBQVksQ0FBQ0gsR0FBRyxDQUFDZ0IsS0FBSyxDQUFDQyxNQUFNLEVBQUUsQ0FBQyxDQUNwQyxDQUFDO0lBQ0ZmLE9BQU8sQ0FBQ2dCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNqQjtBQUVEQyxrQkFBa0IsR0FBR25CLEdBQUcsQ0FBQ3FCLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3QzLWNoYXQvLi9zcmMvc2VydmVyL2Vudi5qcz9lMjZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1jaGVja1xuLyoqXG4gKiBUaGlzIGZpbGUgaXMgaW5jbHVkZWQgaW4gYC9uZXh0LmNvbmZpZy5qc2Agd2hpY2ggZW5zdXJlcyB0aGUgYXBwIGlzbid0IGJ1aWx0IHdpdGggaW52YWxpZCBlbnYgdmFycy5cbiAqIEl0IGhhcyB0byBiZSBhIGAuanNgLWZpbGUgdG8gYmUgaW1wb3J0ZWQgdGhlcmUuXG4gKi9cbmNvbnN0IHsgZW52U2NoZW1hIH0gPSByZXF1aXJlKFwiLi9lbnYtc2NoZW1hXCIpO1xuXG5jb25zdCBlbnYgPSBlbnZTY2hlbWEuc2FmZVBhcnNlKHByb2Nlc3MuZW52KTtcblxuY29uc3QgZm9ybWF0RXJyb3JzID0gKFxuICAvKiogQHR5cGUge2ltcG9ydCgnem9kJykuWm9kRm9ybWF0dGVkRXJyb3I8TWFwPHN0cmluZyxzdHJpbmc+LHN0cmluZz59ICovXG4gIGVycm9ycyxcbikgPT5cbiAgT2JqZWN0LmVudHJpZXMoZXJyb3JzKVxuICAgIC5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcbiAgICAgIGlmICh2YWx1ZSAmJiBcIl9lcnJvcnNcIiBpbiB2YWx1ZSlcbiAgICAgICAgcmV0dXJuIGAke25hbWV9OiAke3ZhbHVlLl9lcnJvcnMuam9pbihcIiwgXCIpfVxcbmA7XG4gICAgfSlcbiAgICAuZmlsdGVyKEJvb2xlYW4pO1xuXG5pZiAoIWVudi5zdWNjZXNzKSB7XG4gIGNvbnNvbGUuZXJyb3IoXG4gICAgXCLinYwgSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZXM6XFxuXCIsXG4gICAgLi4uZm9ybWF0RXJyb3JzKGVudi5lcnJvci5mb3JtYXQoKSksXG4gICk7XG4gIHByb2Nlc3MuZXhpdCgxKTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZW52ID0gZW52LmRhdGE7XG4iXSwibmFtZXMiOlsiZW52U2NoZW1hIiwicmVxdWlyZSIsImVudiIsInNhZmVQYXJzZSIsInByb2Nlc3MiLCJmb3JtYXRFcnJvcnMiLCJlcnJvcnMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwibmFtZSIsInZhbHVlIiwiX2Vycm9ycyIsImpvaW4iLCJmaWx0ZXIiLCJCb29sZWFuIiwic3VjY2VzcyIsImNvbnNvbGUiLCJlcnJvciIsImZvcm1hdCIsImV4aXQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/server/env.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();