"use strict";
exports.id = 841;
exports.ids = [841];
exports.modules = {

/***/ 6086:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3627);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils_debounce__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 9032:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8365);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 3117:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7202);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 8657:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4888);
'use client';


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 5640:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useRtl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6786);
'use client';




const RtlContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();
function RtlProvider({
  value,
  ...props
}) {
  return /*#__PURE__*/_jsx(RtlContext.Provider, {
    value: value ?? true,
    ...props
  });
}
 false ? 0 : void 0;
const useRtl = () => {
  const value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RtlContext);
  return value ?? false;
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (RtlProvider)));

/***/ }),

/***/ 3627:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ debounce)
/* harmony export */ });
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      // @ts-ignore
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}

/***/ }),

/***/ 8365:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ownerDocument)
/* harmony export */ });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),

/***/ 7202:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ownerWindow)
/* harmony export */ });
/* harmony import */ var _ownerDocument_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8365);

function ownerWindow(node) {
  const doc = (0,_ownerDocument_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(node);
  return doc.defaultView || window;
}

/***/ }),

/***/ 9225:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useForkRef_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9136);
/* harmony import */ var _appendOwnerState_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4072);
/* harmony import */ var _mergeSlotProps_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6719);
/* harmony import */ var _resolveComponentProps_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2276);
'use client';





/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false,
    ...other
  } = parameters;
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : (0,_resolveComponentProps_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = (0,_mergeSlotProps_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
    ...other,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = (0,_useForkRef_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(internalRef, resolvedComponentsProps?.ref, parameters.additionalProps?.ref);
  const props = (0,_appendOwnerState_index_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(elementType, {
    ...mergedProps,
    ref
  }, ownerState);
  return props;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSlotProps);

/***/ })

};
;