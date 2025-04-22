"use strict";
exports.id = 839;
exports.ids = [839];
exports.modules = {

/***/ 1234:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z"
}), 'Verified'));

/***/ }),

/***/ 7843:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Avatar_Avatar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(5892);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(7701);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(9386);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(3605);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(3608);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(5997);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./node_modules/@mui/material/esm/internal/svg-icons/Person.js
'use client';




/**
 * @ignore - internal component.
 */

/* harmony default export */ const Person = ((0,createSvgIcon/* default */.Z)(/*#__PURE__*/(0,jsx_runtime_.jsx)("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person'));
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(7506);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(2051);
;// CONCATENATED MODULE: ./node_modules/@mui/material/esm/Avatar/avatarClasses.js


function getAvatarUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.ZP)('MuiAvatar', slot);
}
const avatarClasses = (0,generateUtilityClasses/* default */.Z)('MuiAvatar', ['root', 'colorDefault', 'circular', 'rounded', 'square', 'img', 'fallback']);
/* harmony default export */ const Avatar_avatarClasses = ((/* unused pure expression or super */ null && (avatarClasses)));
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/useSlot.js
var useSlot = __webpack_require__(6794);
;// CONCATENATED MODULE: ./node_modules/@mui/material/esm/Avatar/Avatar.js
'use client';












const useUtilityClasses = ownerState => {
  const {
    classes,
    variant,
    colorDefault
  } = ownerState;
  const slots = {
    root: ['root', variant, colorDefault && 'colorDefault'],
    img: ['img'],
    fallback: ['fallback']
  };
  return (0,composeClasses/* default */.Z)(slots, getAvatarUtilityClass, classes);
};
const AvatarRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiAvatar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], ownerState.colorDefault && styles.colorDefault];
  }
})((0,memoTheme/* default */.Z)(({
  theme
}) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: '50%',
  overflow: 'hidden',
  userSelect: 'none',
  variants: [{
    props: {
      variant: 'rounded'
    },
    style: {
      borderRadius: (theme.vars || theme).shape.borderRadius
    }
  }, {
    props: {
      variant: 'square'
    },
    style: {
      borderRadius: 0
    }
  }, {
    props: {
      colorDefault: true
    },
    style: {
      color: (theme.vars || theme).palette.background.default,
      ...(theme.vars ? {
        backgroundColor: theme.vars.palette.Avatar.defaultBg
      } : {
        backgroundColor: theme.palette.grey[400],
        ...theme.applyStyles('dark', {
          backgroundColor: theme.palette.grey[600]
        })
      })
    }
  }]
})));
const AvatarImg = (0,styled/* default */.ZP)('img', {
  name: 'MuiAvatar',
  slot: 'Img',
  overridesResolver: (props, styles) => styles.img
})({
  width: '100%',
  height: '100%',
  textAlign: 'center',
  // Handle non-square image.
  objectFit: 'cover',
  // Hide alt text.
  color: 'transparent',
  // Hide the image broken icon, only works on Chrome.
  textIndent: 10000
});
const AvatarFallback = (0,styled/* default */.ZP)(Person, {
  name: 'MuiAvatar',
  slot: 'Fallback',
  overridesResolver: (props, styles) => styles.fallback
})({
  width: '75%',
  height: '75%'
});
function useLoaded({
  crossOrigin,
  referrerPolicy,
  src,
  srcSet
}) {
  const [loaded, setLoaded] = react_.useState(false);
  react_.useEffect(() => {
    if (!src && !srcSet) {
      return undefined;
    }
    setLoaded(false);
    let active = true;
    const image = new Image();
    image.onload = () => {
      if (!active) {
        return;
      }
      setLoaded('loaded');
    };
    image.onerror = () => {
      if (!active) {
        return;
      }
      setLoaded('error');
    };
    image.crossOrigin = crossOrigin;
    image.referrerPolicy = referrerPolicy;
    image.src = src;
    if (srcSet) {
      image.srcset = srcSet;
    }
    return () => {
      active = false;
    };
  }, [crossOrigin, referrerPolicy, src, srcSet]);
  return loaded;
}
const Avatar = /*#__PURE__*/react_.forwardRef(function Avatar(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.i)({
    props: inProps,
    name: 'MuiAvatar'
  });
  const {
    alt,
    children: childrenProp,
    className,
    component = 'div',
    slots = {},
    slotProps = {},
    imgProps,
    sizes,
    src,
    srcSet,
    variant = 'circular',
    ...other
  } = props;
  let children = null;
  const ownerState = {
    ...props,
    component,
    variant
  };

  // Use a hook instead of onError on the img element to support server-side rendering.
  const loaded = useLoaded({
    ...imgProps,
    ...(typeof slotProps.img === 'function' ? slotProps.img(ownerState) : slotProps.img),
    src,
    srcSet
  });
  const hasImg = src || srcSet;
  const hasImgNotFailing = hasImg && loaded !== 'error';
  ownerState.colorDefault = !hasImgNotFailing;
  // This issue explains why this is required: https://github.com/mui/material-ui/issues/42184
  delete ownerState.ownerState;
  const classes = useUtilityClasses(ownerState);
  const [ImgSlot, imgSlotProps] = (0,useSlot/* default */.Z)('img', {
    className: classes.img,
    elementType: AvatarImg,
    externalForwardedProps: {
      slots,
      slotProps: {
        img: {
          ...imgProps,
          ...slotProps.img
        }
      }
    },
    additionalProps: {
      alt,
      src,
      srcSet,
      sizes
    },
    ownerState
  });
  if (hasImgNotFailing) {
    children = /*#__PURE__*/(0,jsx_runtime_.jsx)(ImgSlot, {
      ...imgSlotProps
    });
    // We only render valid children, non valid children are rendered with a fallback
    // We consider that invalid children are all falsy values, except 0, which is valid.
  } else if (!!childrenProp || childrenProp === 0) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = /*#__PURE__*/(0,jsx_runtime_.jsx)(AvatarFallback, {
      ownerState: ownerState,
      className: classes.fallback
    });
  }
  return /*#__PURE__*/(0,jsx_runtime_.jsx)(AvatarRoot, {
    as: component,
    className: (0,clsx/* default */.Z)(classes.root, className),
    ref: ref,
    ...other,
    ownerState: ownerState,
    children: children
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Avatar_Avatar = (Avatar);

/***/ }),

/***/ 1867:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Rating_Rating)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(5892);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/clamp/clamp.js
var clamp = __webpack_require__(544);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/visuallyHidden/visuallyHidden.js
var visuallyHidden = __webpack_require__(6207);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(7701);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/RtlProvider/index.js
var RtlProvider = __webpack_require__(5640);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js
var isFocusVisible = __webpack_require__(6461);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/capitalize.js
var capitalize = __webpack_require__(1096);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/useId.js
var useId = __webpack_require__(1189);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/useControlled.js
var useControlled = __webpack_require__(863);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(5689);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(5997);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./node_modules/@mui/material/esm/internal/svg-icons/Star.js
'use client';




/**
 * @ignore - internal component.
 */

/* harmony default export */ const Star = ((0,createSvgIcon/* default */.Z)(/*#__PURE__*/(0,jsx_runtime_.jsx)("path", {
  d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
}), 'Star'));
;// CONCATENATED MODULE: ./node_modules/@mui/material/esm/internal/svg-icons/StarBorder.js
'use client';




/**
 * @ignore - internal component.
 */

/* harmony default export */ const StarBorder = ((0,createSvgIcon/* default */.Z)(/*#__PURE__*/(0,jsx_runtime_.jsx)("path", {
  d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
}), 'StarBorder'));
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(9386);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(3605);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(3608);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/styles/slotShouldForwardProp.js
var slotShouldForwardProp = __webpack_require__(6031);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(7506);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(2051);
;// CONCATENATED MODULE: ./node_modules/@mui/material/esm/Rating/ratingClasses.js


function getRatingUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.ZP)('MuiRating', slot);
}
const ratingClasses = (0,generateUtilityClasses/* default */.Z)('MuiRating', ['root', 'sizeSmall', 'sizeMedium', 'sizeLarge', 'readOnly', 'disabled', 'focusVisible', 'visuallyHidden', 'pristine', 'label', 'labelEmptyValueActive', 'icon', 'iconEmpty', 'iconFilled', 'iconHover', 'iconFocus', 'iconActive', 'decimal']);
/* harmony default export */ const Rating_ratingClasses = (ratingClasses);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/useSlot.js
var useSlot = __webpack_require__(6794);
;// CONCATENATED MODULE: ./node_modules/@mui/material/esm/Rating/Rating.js
'use client';





















function getDecimalPrecision(num) {
  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToPrecision(value, precision) {
  if (value == null) {
    return value;
  }
  const nearest = Math.round(value / precision) * precision;
  return Number(nearest.toFixed(getDecimalPrecision(precision)));
}
const useUtilityClasses = ownerState => {
  const {
    classes,
    size,
    readOnly,
    disabled,
    emptyValueFocused,
    focusVisible
  } = ownerState;
  const slots = {
    root: ['root', `size${(0,capitalize/* default */.Z)(size)}`, disabled && 'disabled', focusVisible && 'focusVisible', readOnly && 'readOnly'],
    label: ['label', 'pristine'],
    labelEmptyValue: [emptyValueFocused && 'labelEmptyValueActive'],
    icon: ['icon'],
    iconEmpty: ['iconEmpty'],
    iconFilled: ['iconFilled'],
    iconHover: ['iconHover'],
    iconFocus: ['iconFocus'],
    iconActive: ['iconActive'],
    decimal: ['decimal'],
    visuallyHidden: ['visuallyHidden']
  };
  return (0,composeClasses/* default */.Z)(slots, getRatingUtilityClass, classes);
};
const RatingRoot = (0,styled/* default */.ZP)('span', {
  name: 'MuiRating',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${Rating_ratingClasses.visuallyHidden}`]: styles.visuallyHidden
    }, styles.root, styles[`size${(0,capitalize/* default */.Z)(ownerState.size)}`], ownerState.readOnly && styles.readOnly];
  }
})((0,memoTheme/* default */.Z)(({
  theme
}) => ({
  display: 'inline-flex',
  // Required to position the pristine input absolutely
  position: 'relative',
  fontSize: theme.typography.pxToRem(24),
  color: '#faaf00',
  cursor: 'pointer',
  textAlign: 'left',
  width: 'min-content',
  WebkitTapHighlightColor: 'transparent',
  [`&.${Rating_ratingClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity,
    pointerEvents: 'none'
  },
  [`&.${Rating_ratingClasses.focusVisible} .${Rating_ratingClasses.iconActive}`]: {
    outline: '1px solid #999'
  },
  [`& .${Rating_ratingClasses.visuallyHidden}`]: visuallyHidden/* default */.Z,
  variants: [{
    props: {
      size: 'small'
    },
    style: {
      fontSize: theme.typography.pxToRem(18)
    }
  }, {
    props: {
      size: 'large'
    },
    style: {
      fontSize: theme.typography.pxToRem(30)
    }
  }, {
    // TODO v6: use the .Mui-readOnly global state class
    props: ({
      ownerState
    }) => ownerState.readOnly,
    style: {
      pointerEvents: 'none'
    }
  }]
})));
const RatingLabel = (0,styled/* default */.ZP)('label', {
  name: 'MuiRating',
  slot: 'Label',
  overridesResolver: ({
    ownerState
  }, styles) => [styles.label, ownerState.emptyValueFocused && styles.labelEmptyValueActive]
})({
  cursor: 'inherit',
  variants: [{
    props: ({
      ownerState
    }) => ownerState.emptyValueFocused,
    style: {
      top: 0,
      bottom: 0,
      position: 'absolute',
      outline: '1px solid #999',
      width: '100%'
    }
  }]
});
const RatingIcon = (0,styled/* default */.ZP)('span', {
  name: 'MuiRating',
  slot: 'Icon',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.icon, ownerState.iconEmpty && styles.iconEmpty, ownerState.iconFilled && styles.iconFilled, ownerState.iconHover && styles.iconHover, ownerState.iconFocus && styles.iconFocus, ownerState.iconActive && styles.iconActive];
  }
})((0,memoTheme/* default */.Z)(({
  theme
}) => ({
  // Fit wrapper to actual icon size.
  display: 'flex',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  }),
  // Fix mouseLeave issue.
  // https://github.com/facebook/react/issues/4492
  pointerEvents: 'none',
  variants: [{
    props: ({
      ownerState
    }) => ownerState.iconActive,
    style: {
      transform: 'scale(1.2)'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.iconEmpty,
    style: {
      color: (theme.vars || theme).palette.action.disabled
    }
  }]
})));
const RatingDecimal = (0,styled/* default */.ZP)('span', {
  name: 'MuiRating',
  slot: 'Decimal',
  shouldForwardProp: prop => (0,slotShouldForwardProp/* default */.Z)(prop) && prop !== 'iconActive',
  overridesResolver: (props, styles) => {
    const {
      iconActive
    } = props;
    return [styles.decimal, iconActive && styles.iconActive];
  }
})({
  position: 'relative',
  variants: [{
    props: ({
      iconActive
    }) => iconActive,
    style: {
      transform: 'scale(1.2)'
    }
  }]
});
function IconContainer(props) {
  const {
    value,
    ...other
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
    ...other
  });
}
 false ? 0 : void 0;
function RatingItem(props) {
  const {
    classes,
    disabled,
    emptyIcon,
    focus,
    getLabelText,
    highlightSelectedOnly,
    hover,
    icon,
    IconContainerComponent,
    isActive,
    itemValue,
    labelProps,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    readOnly,
    ownerState,
    ratingValue,
    ratingValueRounded,
    slots = {},
    slotProps = {}
  } = props;
  const isFilled = highlightSelectedOnly ? itemValue === ratingValue : itemValue <= ratingValue;
  const isHovered = itemValue <= hover;
  const isFocused = itemValue <= focus;
  const isChecked = itemValue === ratingValueRounded;

  // "name" ensures unique IDs across different Rating components in React 17,
  // preventing one component from affecting another. React 18's useId already handles this.
  // Update to const id = useId(); when React 17 support is dropped.
  // More details: https://github.com/mui/material-ui/issues/40997
  const id = `${name}-${(0,useId/* default */.Z)()}`;
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [IconSlot, iconSlotProps] = (0,useSlot/* default */.Z)('icon', {
    elementType: RatingIcon,
    className: (0,clsx/* default */.Z)(classes.icon, isFilled ? classes.iconFilled : classes.iconEmpty, isHovered && classes.iconHover, isFocused && classes.iconFocus, isActive && classes.iconActive),
    externalForwardedProps,
    ownerState: {
      ...ownerState,
      iconEmpty: !isFilled,
      iconFilled: isFilled,
      iconHover: isHovered,
      iconFocus: isFocused,
      iconActive: isActive
    },
    additionalProps: {
      value: itemValue
    },
    internalForwardedProps: {
      // TODO: remove this in v7 because `IconContainerComponent` is deprecated
      // only forward if `slots.icon` is NOT provided
      as: IconContainerComponent
    }
  });
  const [LabelSlot, labelSlotProps] = (0,useSlot/* default */.Z)('label', {
    elementType: RatingLabel,
    externalForwardedProps,
    ownerState: {
      ...ownerState,
      emptyValueFocused: undefined
    },
    additionalProps: {
      style: labelProps?.style,
      htmlFor: id
    }
  });
  const container = /*#__PURE__*/(0,jsx_runtime_.jsx)(IconSlot, {
    ...iconSlotProps,
    children: emptyIcon && !isFilled ? emptyIcon : icon
  });
  if (readOnly) {
    return /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
      ...labelProps,
      children: container
    });
  }
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(LabelSlot, {
      ...labelSlotProps,
      children: [container, /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
        className: classes.visuallyHidden,
        children: getLabelText(itemValue)
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
      className: classes.visuallyHidden,
      onFocus: onFocus,
      onBlur: onBlur,
      onChange: onChange,
      onClick: onClick,
      disabled: disabled,
      value: itemValue,
      id: id,
      type: "radio",
      name: name,
      checked: isChecked
    })]
  });
}
 false ? 0 : void 0;
const defaultIcon = /*#__PURE__*/(0,jsx_runtime_.jsx)(Star, {
  fontSize: "inherit"
});
const defaultEmptyIcon = /*#__PURE__*/(0,jsx_runtime_.jsx)(StarBorder, {
  fontSize: "inherit"
});
function defaultLabelText(value) {
  return `${value || '0'} Star${value !== 1 ? 's' : ''}`;
}
const Rating = /*#__PURE__*/react_.forwardRef(function Rating(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.i)({
    name: 'MuiRating',
    props: inProps
  });
  const {
    component = 'span',
    className,
    defaultValue = null,
    disabled = false,
    emptyIcon = defaultEmptyIcon,
    emptyLabelText = 'Empty',
    getLabelText = defaultLabelText,
    highlightSelectedOnly = false,
    icon = defaultIcon,
    IconContainerComponent = IconContainer,
    max = 5,
    name: nameProp,
    onChange,
    onChangeActive,
    onMouseLeave,
    onMouseMove,
    precision = 1,
    readOnly = false,
    size = 'medium',
    value: valueProp,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const name = (0,useId/* default */.Z)(nameProp);
  const [valueDerived, setValueState] = (0,useControlled/* default */.Z)({
    controlled: valueProp,
    default: defaultValue,
    name: 'Rating'
  });
  const valueRounded = roundValueToPrecision(valueDerived, precision);
  const isRtl = (0,RtlProvider/* useRtl */.V)();
  const [{
    hover,
    focus
  }, setState] = react_.useState({
    hover: -1,
    focus: -1
  });
  let value = valueRounded;
  if (hover !== -1) {
    value = hover;
  }
  if (focus !== -1) {
    value = focus;
  }
  const [focusVisible, setFocusVisible] = react_.useState(false);
  const rootRef = react_.useRef();
  const handleRef = (0,useForkRef/* default */.Z)(rootRef, ref);
  const handleMouseMove = event => {
    if (onMouseMove) {
      onMouseMove(event);
    }
    const rootNode = rootRef.current;
    const {
      right,
      left,
      width: containerWidth
    } = rootNode.getBoundingClientRect();
    let percent;
    if (isRtl) {
      percent = (right - event.clientX) / containerWidth;
    } else {
      percent = (event.clientX - left) / containerWidth;
    }
    let newHover = roundValueToPrecision(max * percent + precision / 2, precision);
    newHover = (0,clamp/* default */.Z)(newHover, precision, max);
    setState(prev => prev.hover === newHover && prev.focus === newHover ? prev : {
      hover: newHover,
      focus: newHover
    });
    setFocusVisible(false);
    if (onChangeActive && hover !== newHover) {
      onChangeActive(event, newHover);
    }
  };
  const handleMouseLeave = event => {
    if (onMouseLeave) {
      onMouseLeave(event);
    }
    const newHover = -1;
    setState({
      hover: newHover,
      focus: newHover
    });
    if (onChangeActive && hover !== newHover) {
      onChangeActive(event, newHover);
    }
  };
  const handleChange = event => {
    let newValue = event.target.value === '' ? null : parseFloat(event.target.value);

    // Give mouse priority over keyboard
    // Fix https://github.com/mui/material-ui/issues/22827
    if (hover !== -1) {
      newValue = hover;
    }
    setValueState(newValue);
    if (onChange) {
      onChange(event, newValue);
    }
  };
  const handleClear = event => {
    // Ignore keyboard events
    // https://github.com/facebook/react/issues/7407
    if (event.clientX === 0 && event.clientY === 0) {
      return;
    }
    setState({
      hover: -1,
      focus: -1
    });
    setValueState(null);
    if (onChange && parseFloat(event.target.value) === valueRounded) {
      onChange(event, null);
    }
  };
  const handleFocus = event => {
    if ((0,isFocusVisible/* default */.Z)(event.target)) {
      setFocusVisible(true);
    }
    const newFocus = parseFloat(event.target.value);
    setState(prev => ({
      hover: prev.hover,
      focus: newFocus
    }));
  };
  const handleBlur = event => {
    if (hover !== -1) {
      return;
    }
    if (!(0,isFocusVisible/* default */.Z)(event.target)) {
      setFocusVisible(false);
    }
    const newFocus = -1;
    setState(prev => ({
      hover: prev.hover,
      focus: newFocus
    }));
  };
  const [emptyValueFocused, setEmptyValueFocused] = react_.useState(false);
  const ownerState = {
    ...props,
    component,
    defaultValue,
    disabled,
    emptyIcon,
    emptyLabelText,
    emptyValueFocused,
    focusVisible,
    getLabelText,
    icon,
    IconContainerComponent,
    max,
    precision,
    readOnly,
    size
  };
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [RootSlot, rootSlotProps] = (0,useSlot/* default */.Z)('root', {
    ref: handleRef,
    className: (0,clsx/* default */.Z)(classes.root, className),
    elementType: RatingRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other,
      component
    },
    getSlotProps: handlers => ({
      ...handlers,
      onMouseMove: event => {
        handleMouseMove(event);
        handlers.onMouseMove?.(event);
      },
      onMouseLeave: event => {
        handleMouseLeave(event);
        handlers.onMouseLeave?.(event);
      }
    }),
    ownerState,
    additionalProps: {
      role: readOnly ? 'img' : null,
      'aria-label': readOnly ? getLabelText(value) : null
    }
  });
  const [LabelSlot, labelSlotProps] = (0,useSlot/* default */.Z)('label', {
    className: (0,clsx/* default */.Z)(classes.label, classes.labelEmptyValue),
    elementType: RatingLabel,
    externalForwardedProps,
    ownerState
  });
  const [DecimalSlot, decimalSlotProps] = (0,useSlot/* default */.Z)('decimal', {
    className: classes.decimal,
    elementType: RatingDecimal,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(RootSlot, {
    ...rootSlotProps,
    children: [Array.from(new Array(max)).map((_, index) => {
      const itemValue = index + 1;
      const ratingItemProps = {
        classes,
        disabled,
        emptyIcon,
        focus,
        getLabelText,
        highlightSelectedOnly,
        hover,
        icon,
        IconContainerComponent,
        name,
        onBlur: handleBlur,
        onChange: handleChange,
        onClick: handleClear,
        onFocus: handleFocus,
        ratingValue: value,
        ratingValueRounded: valueRounded,
        readOnly,
        ownerState,
        slots,
        slotProps
      };
      const isActive = itemValue === Math.ceil(value) && (hover !== -1 || focus !== -1);
      if (precision < 1) {
        const items = Array.from(new Array(1 / precision));
        return /*#__PURE__*/(0,react_.createElement)(DecimalSlot, {
          ...decimalSlotProps,
          key: itemValue,
          className: (0,clsx/* default */.Z)(decimalSlotProps.className, isActive && classes.iconActive),
          iconActive: isActive
        }, items.map(($, indexDecimal) => {
          const itemDecimalValue = roundValueToPrecision(itemValue - 1 + (indexDecimal + 1) * precision, precision);
          return /*#__PURE__*/(0,jsx_runtime_.jsx)(RatingItem, {
            ...ratingItemProps,
            // The icon is already displayed as active
            isActive: false,
            itemValue: itemDecimalValue,
            labelProps: {
              style: items.length - 1 === indexDecimal ? {} : {
                width: itemDecimalValue === value ? `${(indexDecimal + 1) * precision * 100}%` : '0%',
                overflow: 'hidden',
                position: 'absolute'
              }
            }
          }, itemDecimalValue);
        }));
      }
      return /*#__PURE__*/(0,jsx_runtime_.jsx)(RatingItem, {
        ...ratingItemProps,
        isActive: isActive,
        itemValue: itemValue
      }, itemValue);
    }), !readOnly && !disabled && /*#__PURE__*/(0,jsx_runtime_.jsxs)(LabelSlot, {
      ...labelSlotProps,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
        className: classes.visuallyHidden,
        value: "",
        id: `${name}-empty`,
        type: "radio",
        name: name,
        checked: valueRounded == null,
        onFocus: () => setEmptyValueFocused(true),
        onBlur: () => setEmptyValueFocused(false),
        onChange: handleChange
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
        className: classes.visuallyHidden,
        children: emptyLabelText
      })]
    })]
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Rating_Rating = (Rating);

/***/ })

};
;