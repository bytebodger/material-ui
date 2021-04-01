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

export const Column = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, _extends({
    item: true
  }, props), props.children));
};
const columnOptions = [false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
Column.propTypes = {
  alignContent: PropTypes.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'stretch']),
  alignItems: PropTypes.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  direction: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),
  justify: PropTypes.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'space-evenly']),
  lg: PropTypes.oneOf(columnOptions),
  md: PropTypes.oneOf(columnOptions),
  sm: PropTypes.oneOf(columnOptions),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  xl: PropTypes.oneOf(columnOptions),
  xs: PropTypes.oneOf(columnOptions),
  zeroMinWidth: PropTypes.bool
};
Column.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  direction: 'row',
  justify: 'flex-start',
  lg: false,
  md: false,
  sm: false,
  wrap: 'wrap',
  xl: false,
  xs: false,
  zeroMinWidth: false
};
