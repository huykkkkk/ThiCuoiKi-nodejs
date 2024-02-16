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

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

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

/***/ "(api)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToMongoDB\": () => (/* binding */ connectToMongoDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { MONGODB_URI  } = process.env;\nif (!MONGODB_URI) {\n    throw new Error(\"Invalid environment variable: MONGODB_URI\");\n}\nconst connectToMongoDB = async ()=>{\n    try {\n        const { connection  } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI);\n        if (connection.readyState === 1) {\n            return Promise.resolve(true);\n        }\n    } catch (error) {\n        return Promise.reject(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTSxFQUFFQyxZQUFXLEVBQUUsR0FBR0MsUUFBUUMsR0FBRztBQUVuQyxJQUFJLENBQUNGLGFBQWE7SUFDZCxNQUFNLElBQUlHLE1BQU0sNkNBQTZDO0FBQ2pFLENBQUM7QUFFTSxNQUFNQyxtQkFBbUIsVUFBWTtJQUN4QyxJQUFJO1FBQ0EsTUFBTSxFQUFFQyxXQUFVLEVBQUUsR0FBRyxNQUFNTix1REFBZ0IsQ0FBQ0M7UUFFOUMsSUFBSUssV0FBV0UsVUFBVSxLQUFLLEdBQUc7WUFDN0IsT0FBT0MsUUFBUUMsT0FBTyxDQUFDLElBQUk7UUFDL0IsQ0FBQztJQUVMLEVBQUUsT0FBT0MsT0FBTztRQUNaLE9BQU9GLFFBQVFHLE1BQU0sQ0FBQ0Q7SUFDMUI7QUFDSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWF1dGgtdWkvLi9saWIvbW9uZ29kYi50cz8wNWJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgeyBNT05HT0RCX1VSSSB9ID0gcHJvY2Vzcy5lbnZcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGU6IE1PTkdPREJfVVJJXCIpO1xufVxuXG5leHBvcnQgY29uc3QgY29ubmVjdFRvTW9uZ29EQiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGNvbm5lY3Rpb24gfSA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkkpXG5cbiAgICAgICAgaWYgKGNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKVxuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgfVxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY29ubmVjdFRvTW9uZ29EQiIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwicmVhZHlTdGF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZXJyb3IiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(api)/./models/user.ts":
/*!************************!*\
  !*** ./models/user.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        unique: true,\n        required: [\n            true,\n            \"Email is required\"\n        ],\n        match: [\n            /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/,\n            \"Invalid email address\"\n        ]\n    },\n    fullName: {\n        type: String,\n        required: [\n            true,\n            \"Full name is required\"\n        ],\n        minLength: [\n            4,\n            \"Full name should be atleast 4 characters long\"\n        ],\n        maxLength: [\n            30,\n            \"Full name should be less than 30 characters\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Password is required\"\n        ],\n        select: false\n    }\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFFaEQsTUFBTUcsYUFBYSxJQUFJSCw0Q0FBTUEsQ0FBQztJQUMxQkksT0FBTztRQUNIQyxNQUFNQztRQUNOQyxRQUFRLElBQUk7UUFDWkMsVUFBVTtZQUFDLElBQUk7WUFBRTtTQUFvQjtRQUNyQ0MsT0FBTztZQUFDO1lBQWlEO1NBQXdCO0lBQ3JGO0lBQ0FDLFVBQVU7UUFDTkwsTUFBTUM7UUFDTkUsVUFBVTtZQUFDLElBQUk7WUFBRTtTQUF3QjtRQUN6Q0csV0FBVztZQUFDO1lBQUc7U0FBZ0Q7UUFDL0RDLFdBQVc7WUFBQztZQUFJO1NBQThDO0lBQ2xFO0lBQ0FDLFVBQVU7UUFDTlIsTUFBTUM7UUFDTkUsVUFBVTtZQUFDLElBQUk7WUFBRTtTQUF1QjtRQUN4Q00sUUFBUSxLQUFLO0lBQ2pCO0FBQ0o7QUFFQSxNQUFNQyxPQUFPYixpREFBVyxJQUFJRCwrQ0FBS0EsQ0FBQyxRQUFRRTtBQUUxQyxpRUFBZVksSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1hdXRoLXVpLy4vbW9kZWxzL3VzZXIudHM/NzAwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIlxuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJFbWFpbCBpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgbWF0Y2g6IFsvXlxcdysoW1xcLi1dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvLCBcIkludmFsaWQgZW1haWwgYWRkcmVzc1wiXVxuICAgIH0sXG4gICAgZnVsbE5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiRnVsbCBuYW1lIGlzIHJlcXVpcmVkXCJdLFxuICAgICAgICBtaW5MZW5ndGg6IFs0LCBcIkZ1bGwgbmFtZSBzaG91bGQgYmUgYXRsZWFzdCA0IGNoYXJhY3RlcnMgbG9uZ1wiXSxcbiAgICAgICAgbWF4TGVuZ3RoOiBbMzAsIFwiRnVsbCBuYW1lIHNob3VsZCBiZSBsZXNzIHRoYW4gMzAgY2hhcmFjdGVyc1wiXVxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgIHNlbGVjdDogZmFsc2VcbiAgICB9XG59KVxuXG5jb25zdCBVc2VyID0gbW9kZWxzLlVzZXIgfHwgbW9kZWwoXCJVc2VyXCIsIFVzZXJTY2hlbWEpXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXIiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJVc2VyU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwidW5pcXVlIiwicmVxdWlyZWQiLCJtYXRjaCIsImZ1bGxOYW1lIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwicGFzc3dvcmQiLCJzZWxlY3QiLCJVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/user.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/user */ \"(api)/./models/user.ts\");\n\n\n\n\n\nconst options = {\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__.connectToMongoDB)().catch((err)=>{\n                    throw new Error(err);\n                });\n                const user = await _models_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                    email: credentials?.email\n                }).select(\"+password\");\n                if (!user) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const isPasswordCorrect = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(credentials.password, user.password);\n                if (!isPasswordCorrect) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                return user;\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/login\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        jwt: async ({ token , user  })=>{\n            user && (token.user = user);\n            return token;\n        },\n        session: async ({ session , token  })=>{\n            const user = token.user;\n            session.user = user;\n            return session;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(options));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUNtQjtBQUNZO0FBQ1Y7QUFDaEI7QUFHdkMsTUFBTUssVUFBMkI7SUFDN0JDLFdBQVc7UUFDUEosc0VBQW1CQSxDQUFDO1lBQ2hCSyxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsYUFBYTtnQkFDVEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBTztnQkFDdENDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDcEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXLEVBQUU7Z0JBQ3pCLE1BQU1OLDhEQUFnQkEsR0FBR1ksS0FBSyxDQUFDQyxDQUFBQSxNQUFPO29CQUFFLE1BQU0sSUFBSUMsTUFBTUQsS0FBSTtnQkFBQztnQkFFN0QsTUFBTUUsT0FBTyxNQUFNZCw0REFBWSxDQUFDO29CQUM1Qk0sT0FBT0QsYUFBYUM7Z0JBQ3hCLEdBQUdVLE1BQU0sQ0FBQztnQkFFVixJQUFJLENBQUNGLE1BQU07b0JBQ1AsTUFBTSxJQUFJRCxNQUFNLHVCQUFzQjtnQkFDMUMsQ0FBQztnQkFFRCxNQUFNSSxvQkFBb0IsTUFBTXJCLGlEQUFPQSxDQUFDUyxZQUFhSSxRQUFRLEVBQUVLLEtBQUtMLFFBQVE7Z0JBRTVFLElBQUksQ0FBQ1EsbUJBQW1CO29CQUNwQixNQUFNLElBQUlKLE1BQU0sdUJBQXNCO2dCQUMxQyxDQUFDO2dCQUVELE9BQU9DO1lBQ1g7UUFDSjtLQUNIO0lBQ0RJLE9BQU87UUFDSEMsUUFBUTtJQUNaO0lBQ0FDLFNBQVM7UUFDTEMsVUFBVTtJQUNkO0lBQ0FDLFdBQVc7UUFDUEMsS0FBSyxPQUFPLEVBQUVDLE1BQUssRUFBRVYsS0FBSSxFQUFFLEdBQUs7WUFDNUJBLFFBQVNVLENBQUFBLE1BQU1WLElBQUksR0FBR0EsSUFBRztZQUN6QixPQUFPVTtRQUNYO1FBQ0FKLFNBQVMsT0FBTyxFQUFFQSxRQUFPLEVBQUVJLE1BQUssRUFBRSxHQUFLO1lBQ25DLE1BQU1WLE9BQU9VLE1BQU1WLElBQUk7WUFDdkJNLFFBQVFOLElBQUksR0FBR0E7WUFFZixPQUFPTTtRQUNYO0lBQ0o7QUFDSjtBQUVBLGlFQUFldkIsZ0RBQVFBLENBQUNJLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXV0aC11aS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0anMnXG5pbXBvcnQgTmV4dEF1dGgsIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscydcbmltcG9ydCB7IGNvbm5lY3RUb01vbmdvREIgfSBmcm9tICcuLi8uLi8uLi9saWIvbW9uZ29kYidcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uLy4uL21vZGVscy91c2VyJ1xuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlcydcblxuY29uc3Qgb3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgICAgICAgIGlkOiBcImNyZWRlbnRpYWxzXCIsXG4gICAgICAgICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBjb25uZWN0VG9Nb25nb0RCKCkuY2F0Y2goZXJyID0+IHsgdGhyb3cgbmV3IEVycm9yKGVycikgfSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHM/LmVtYWlsXG4gICAgICAgICAgICAgICAgfSkuc2VsZWN0KFwiK3Bhc3N3b3JkXCIpXG5cbiAgICAgICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjcmVkZW50aWFsc1wiKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGlzUGFzc3dvcmRDb3JyZWN0ID0gYXdhaXQgY29tcGFyZShjcmVkZW50aWFscyEucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzUGFzc3dvcmRDb3JyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY3JlZGVudGlhbHNcIilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlclxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIF0sXG4gICAgcGFnZXM6IHtcbiAgICAgICAgc2lnbkluOiBcIi9sb2dpblwiXG4gICAgfSxcbiAgICBzZXNzaW9uOiB7XG4gICAgICAgIHN0cmF0ZWd5OiBcImp3dFwiXG4gICAgfSxcbiAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgand0OiBhc3luYyAoeyB0b2tlbiwgdXNlciB9KSA9PiB7XG4gICAgICAgICAgICB1c2VyICYmICh0b2tlbi51c2VyID0gdXNlcilcbiAgICAgICAgICAgIHJldHVybiB0b2tlblxuICAgICAgICB9LFxuICAgICAgICBzZXNzaW9uOiBhc3luYyAoeyBzZXNzaW9uLCB0b2tlbiB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gdG9rZW4udXNlciBhcyBJVXNlclxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyID0gdXNlclxuXG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvblxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChvcHRpb25zKSJdLCJuYW1lcyI6WyJjb21wYXJlIiwiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiY29ubmVjdFRvTW9uZ29EQiIsIlVzZXIiLCJvcHRpb25zIiwicHJvdmlkZXJzIiwiaWQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiY2F0Y2giLCJlcnIiLCJFcnJvciIsInVzZXIiLCJmaW5kT25lIiwic2VsZWN0IiwiaXNQYXNzd29yZENvcnJlY3QiLCJwYWdlcyIsInNpZ25JbiIsInNlc3Npb24iLCJzdHJhdGVneSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();