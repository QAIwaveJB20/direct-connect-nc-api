"use strict";
exports.id = 350;
exports.ids = [350];
exports.modules = {

/***/ 6350:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Chip_Chip)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(5892);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(7701);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator/colorManipulator.js
var colorManipulator = __webpack_require__(4386);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(5997);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./node_modules/@mui/material/esm/internal/svg-icons/Cancel.js
'use client';




/**
 * @ignore - internal component.
 */

/* harmony default export */ const Cancel = ((0,createSvgIcon/* default */.Z)(/*#__PURE__*/(0,jsx_runtime_.jsx)("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(5689);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/capitalize.js
var capitalize = __webpack_require__(1096);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/ButtonBase/ButtonBase.js + 5 modules
var ButtonBase = __webpack_require__(1015);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(9386);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(3605);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(2649);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(3608);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(7506);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(2051);
;// CONCATENATED MODULE: ./node_modules/@mui/material/esm/Chip/chipClasses.js


function getChipUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.ZP)('MuiChip', slot);
}
const chipClasses = (0,generateUtilityClasses/* default */.Z)('MuiChip', ['root', 'sizeSmall', 'sizeMedium', 'colorDefault', 'colorError', 'colorInfo', 'colorPrimary', 'colorSecondary', 'colorSuccess', 'colorWarning', 'disabled', 'clickable', 'clickableColorPrimary', 'clickableColorSecondary', 'deletable', 'deletableColorPrimary', 'deletableColorSecondary', 'outlined', 'filled', 'outlinedPrimary', 'outlinedSecondary', 'filledPrimary', 'filledSecondary', 'avatar', 'avatarSmall', 'avatarMedium', 'avatarColorPrimary', 'avatarColorSecondary', 'icon', 'iconSmall', 'iconMedium', 'iconColorPrimary', 'iconColorSecondary', 'label', 'labelSmall', 'labelMedium', 'deleteIcon', 'deleteIconSmall', 'deleteIconMedium', 'deleteIconColorPrimary', 'deleteIconColorSecondary', 'deleteIconOutlinedColorPrimary', 'deleteIconOutlinedColorSecondary', 'deleteIconFilledColorPrimary', 'deleteIconFilledColorSecondary', 'focusVisible']);
/* harmony default export */ const Chip_chipClasses = (chipClasses);
;// CONCATENATED MODULE: ./node_modules/@mui/material/esm/Chip/Chip.js
'use client';

















const useUtilityClasses = ownerState => {
  const {
    classes,
    disabled,
    size,
    color,
    iconColor,
    onDelete,
    clickable,
    variant
  } = ownerState;
  const slots = {
    root: ['root', variant, disabled && 'disabled', `size${(0,capitalize/* default */.Z)(size)}`, `color${(0,capitalize/* default */.Z)(color)}`, clickable && 'clickable', clickable && `clickableColor${(0,capitalize/* default */.Z)(color)}`, onDelete && 'deletable', onDelete && `deletableColor${(0,capitalize/* default */.Z)(color)}`, `${variant}${(0,capitalize/* default */.Z)(color)}`],
    label: ['label', `label${(0,capitalize/* default */.Z)(size)}`],
    avatar: ['avatar', `avatar${(0,capitalize/* default */.Z)(size)}`, `avatarColor${(0,capitalize/* default */.Z)(color)}`],
    icon: ['icon', `icon${(0,capitalize/* default */.Z)(size)}`, `iconColor${(0,capitalize/* default */.Z)(iconColor)}`],
    deleteIcon: ['deleteIcon', `deleteIcon${(0,capitalize/* default */.Z)(size)}`, `deleteIconColor${(0,capitalize/* default */.Z)(color)}`, `deleteIcon${(0,capitalize/* default */.Z)(variant)}Color${(0,capitalize/* default */.Z)(color)}`]
  };
  return (0,composeClasses/* default */.Z)(slots, getChipUtilityClass, classes);
};
const ChipRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiChip',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    const {
      color,
      iconColor,
      clickable,
      onDelete,
      size,
      variant
    } = ownerState;
    return [{
      [`& .${Chip_chipClasses.avatar}`]: styles.avatar
    }, {
      [`& .${Chip_chipClasses.avatar}`]: styles[`avatar${(0,capitalize/* default */.Z)(size)}`]
    }, {
      [`& .${Chip_chipClasses.avatar}`]: styles[`avatarColor${(0,capitalize/* default */.Z)(color)}`]
    }, {
      [`& .${Chip_chipClasses.icon}`]: styles.icon
    }, {
      [`& .${Chip_chipClasses.icon}`]: styles[`icon${(0,capitalize/* default */.Z)(size)}`]
    }, {
      [`& .${Chip_chipClasses.icon}`]: styles[`iconColor${(0,capitalize/* default */.Z)(iconColor)}`]
    }, {
      [`& .${Chip_chipClasses.deleteIcon}`]: styles.deleteIcon
    }, {
      [`& .${Chip_chipClasses.deleteIcon}`]: styles[`deleteIcon${(0,capitalize/* default */.Z)(size)}`]
    }, {
      [`& .${Chip_chipClasses.deleteIcon}`]: styles[`deleteIconColor${(0,capitalize/* default */.Z)(color)}`]
    }, {
      [`& .${Chip_chipClasses.deleteIcon}`]: styles[`deleteIcon${(0,capitalize/* default */.Z)(variant)}Color${(0,capitalize/* default */.Z)(color)}`]
    }, styles.root, styles[`size${(0,capitalize/* default */.Z)(size)}`], styles[`color${(0,capitalize/* default */.Z)(color)}`], clickable && styles.clickable, clickable && color !== 'default' && styles[`clickableColor${(0,capitalize/* default */.Z)(color)})`], onDelete && styles.deletable, onDelete && color !== 'default' && styles[`deletableColor${(0,capitalize/* default */.Z)(color)}`], styles[variant], styles[`${variant}${(0,capitalize/* default */.Z)(color)}`]];
  }
})((0,memoTheme/* default */.Z)(({
  theme
}) => {
  const textColor = theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.grey[300];
  return {
    maxWidth: '100%',
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(13),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    color: (theme.vars || theme).palette.text.primary,
    backgroundColor: (theme.vars || theme).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: 'nowrap',
    transition: theme.transitions.create(['background-color', 'box-shadow']),
    // reset cursor explicitly in case ButtonBase is used
    cursor: 'unset',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: 'none',
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    [`&.${Chip_chipClasses.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity,
      pointerEvents: 'none'
    },
    [`& .${Chip_chipClasses.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
      fontSize: theme.typography.pxToRem(12)
    },
    [`& .${Chip_chipClasses.avatarColorPrimary}`]: {
      color: (theme.vars || theme).palette.primary.contrastText,
      backgroundColor: (theme.vars || theme).palette.primary.dark
    },
    [`& .${Chip_chipClasses.avatarColorSecondary}`]: {
      color: (theme.vars || theme).palette.secondary.contrastText,
      backgroundColor: (theme.vars || theme).palette.secondary.dark
    },
    [`& .${Chip_chipClasses.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: theme.typography.pxToRem(10)
    },
    [`& .${Chip_chipClasses.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${Chip_chipClasses.deleteIcon}`]: {
      WebkitTapHighlightColor: 'transparent',
      color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.26)` : (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: 'pointer',
      margin: '0 5px 0 -6px',
      '&:hover': {
        color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.4)` : (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: 'small'
      },
      style: {
        height: 24,
        [`& .${Chip_chipClasses.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${Chip_chipClasses.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.Z)(['contrastText'])).map(([color]) => {
      return {
        props: {
          color
        },
        style: {
          backgroundColor: (theme.vars || theme).palette[color].main,
          color: (theme.vars || theme).palette[color].contrastText,
          [`& .${Chip_chipClasses.deleteIcon}`]: {
            color: theme.vars ? `rgba(${theme.vars.palette[color].contrastTextChannel} / 0.7)` : (0,colorManipulator/* alpha */.Fq)(theme.palette[color].contrastText, 0.7),
            '&:hover, &:active': {
              color: (theme.vars || theme).palette[color].contrastText
            }
          }
        }
      };
    }), {
      props: props => props.iconColor === props.color,
      style: {
        [`& .${Chip_chipClasses.icon}`]: {
          color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor
        }
      }
    }, {
      props: props => props.iconColor === props.color && props.color !== 'default',
      style: {
        [`& .${Chip_chipClasses.icon}`]: {
          color: 'inherit'
        }
      }
    }, {
      props: {
        onDelete: true
      },
      style: {
        [`&.${Chip_chipClasses.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,colorManipulator/* alpha */.Fq)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.Z)(['dark'])).map(([color]) => {
      return {
        props: {
          color,
          onDelete: true
        },
        style: {
          [`&.${Chip_chipClasses.focusVisible}`]: {
            background: (theme.vars || theme).palette[color].dark
          }
        }
      };
    }), {
      props: {
        clickable: true
      },
      style: {
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : (0,colorManipulator/* alpha */.Fq)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
        },
        [`&.${Chip_chipClasses.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,colorManipulator/* alpha */.Fq)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
        },
        '&:active': {
          boxShadow: (theme.vars || theme).shadows[1]
        }
      }
    }, ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.Z)(['dark'])).map(([color]) => ({
      props: {
        color,
        clickable: true
      },
      style: {
        [`&:hover, &.${Chip_chipClasses.focusVisible}`]: {
          backgroundColor: (theme.vars || theme).palette[color].dark
        }
      }
    })), {
      props: {
        variant: 'outlined'
      },
      style: {
        backgroundColor: 'transparent',
        border: theme.vars ? `1px solid ${theme.vars.palette.Chip.defaultBorder}` : `1px solid ${theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[700]}`,
        [`&.${Chip_chipClasses.clickable}:hover`]: {
          backgroundColor: (theme.vars || theme).palette.action.hover
        },
        [`&.${Chip_chipClasses.focusVisible}`]: {
          backgroundColor: (theme.vars || theme).palette.action.focus
        },
        [`& .${Chip_chipClasses.avatar}`]: {
          marginLeft: 4
        },
        [`& .${Chip_chipClasses.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${Chip_chipClasses.icon}`]: {
          marginLeft: 4
        },
        [`& .${Chip_chipClasses.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${Chip_chipClasses.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${Chip_chipClasses.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.Z)()) // no need to check for mainChannel as it's calculated from main
    .map(([color]) => ({
      props: {
        variant: 'outlined',
        color
      },
      style: {
        color: (theme.vars || theme).palette[color].main,
        border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.7)` : (0,colorManipulator/* alpha */.Fq)(theme.palette[color].main, 0.7)}`,
        [`&.${Chip_chipClasses.clickable}:hover`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette[color].main, theme.palette.action.hoverOpacity)
        },
        [`&.${Chip_chipClasses.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.focusOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette[color].main, theme.palette.action.focusOpacity)
        },
        [`& .${Chip_chipClasses.deleteIcon}`]: {
          color: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.7)` : (0,colorManipulator/* alpha */.Fq)(theme.palette[color].main, 0.7),
          '&:hover, &:active': {
            color: (theme.vars || theme).palette[color].main
          }
        }
      }
    }))]
  };
}));
const ChipLabel = (0,styled/* default */.ZP)('span', {
  name: 'MuiChip',
  slot: 'Label',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    const {
      size
    } = ownerState;
    return [styles.label, styles[`label${(0,capitalize/* default */.Z)(size)}`]];
  }
})({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: 'nowrap',
  variants: [{
    props: {
      variant: 'outlined'
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: 'small'
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: 'small',
      variant: 'outlined'
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}

/**
 * Chips represent complex entities in small blocks, such as a contact.
 */
const Chip = /*#__PURE__*/react_.forwardRef(function Chip(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.i)({
    props: inProps,
    name: 'MuiChip'
  });
  const {
    avatar: avatarProp,
    className,
    clickable: clickableProp,
    color = 'default',
    component: ComponentProp,
    deleteIcon: deleteIconProp,
    disabled = false,
    icon: iconProp,
    label,
    onClick,
    onDelete,
    onKeyDown,
    onKeyUp,
    size = 'medium',
    variant = 'filled',
    tabIndex,
    skipFocusWhenDisabled = false,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...other
  } = props;
  const chipRef = react_.useRef(null);
  const handleRef = (0,useForkRef/* default */.Z)(chipRef, ref);
  const handleDeleteIconClick = event => {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();
    if (onDelete) {
      onDelete(event);
    }
  };
  const handleKeyDown = event => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // Will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleKeyUp = event => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      }
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
  };
  const clickable = clickableProp !== false && onClick ? true : clickableProp;
  const component = clickable || onDelete ? ButtonBase/* default */.Z : ComponentProp || 'div';
  const ownerState = {
    ...props,
    component,
    disabled,
    size,
    color,
    iconColor: /*#__PURE__*/react_.isValidElement(iconProp) ? iconProp.props.color || color : color,
    onDelete: !!onDelete,
    clickable,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  const moreProps = component === ButtonBase/* default */.Z ? {
    component: ComponentProp || 'div',
    focusVisibleClassName: classes.focusVisible,
    ...(onDelete && {
      disableRipple: true
    })
  } : {};
  let deleteIcon = null;
  if (onDelete) {
    deleteIcon = deleteIconProp && /*#__PURE__*/react_.isValidElement(deleteIconProp) ? (/*#__PURE__*/react_.cloneElement(deleteIconProp, {
      className: (0,clsx/* default */.Z)(deleteIconProp.props.className, classes.deleteIcon),
      onClick: handleDeleteIconClick
    })) : /*#__PURE__*/(0,jsx_runtime_.jsx)(Cancel, {
      className: (0,clsx/* default */.Z)(classes.deleteIcon),
      onClick: handleDeleteIconClick
    });
  }
  let avatar = null;
  if (avatarProp && /*#__PURE__*/react_.isValidElement(avatarProp)) {
    avatar = /*#__PURE__*/react_.cloneElement(avatarProp, {
      className: (0,clsx/* default */.Z)(classes.avatar, avatarProp.props.className)
    });
  }
  let icon = null;
  if (iconProp && /*#__PURE__*/react_.isValidElement(iconProp)) {
    icon = /*#__PURE__*/react_.cloneElement(iconProp, {
      className: (0,clsx/* default */.Z)(classes.icon, iconProp.props.className)
    });
  }
  if (false) {}
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ChipRoot, {
    as: component,
    className: (0,clsx/* default */.Z)(classes.root, className),
    disabled: clickable && disabled ? true : undefined,
    onClick: onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef,
    tabIndex: skipFocusWhenDisabled && disabled ? -1 : tabIndex,
    ownerState: ownerState,
    ...moreProps,
    ...other,
    children: [avatar || icon, /*#__PURE__*/(0,jsx_runtime_.jsx)(ChipLabel, {
      className: (0,clsx/* default */.Z)(classes.label),
      ownerState: ownerState,
      children: label
    }), deleteIcon]
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Chip_Chip = (Chip);

/***/ })

};
;