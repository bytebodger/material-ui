function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

import * as PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import React from 'react';

export const Column = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, _extends({
    item: true
  }, props), props.children));
};
const columnOptions = [false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
Column.propTypes = {
  lg: PropTypes.oneOf(columnOptions),
  md: PropTypes.oneOf(columnOptions),
  sm: PropTypes.oneOf(columnOptions),
  xl: PropTypes.oneOf(columnOptions),
  xs: PropTypes.oneOf(columnOptions),
  zeroMinWidth: PropTypes.bool
};
Column.defaultProps = {
  lg: false,
  md: false,
  sm: false,
  xl: false,
  xs: false,
  zeroMinWidth: false
};
