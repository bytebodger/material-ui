import * as PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import React from 'react';

export const Row = props => {
   return [
      <Grid
         container={true}
         {...props}
      >
         {props.children}
      </Grid>
   ];
};

Row.propTypes = {
   alignContent: PropTypes.oneOf([
      'center',
      'flex-end',
      'flex-start',
      'space-around',
      'space-between',
      'stretch',
   ]),
   alignItems: PropTypes.oneOf([
      'baseline',
      'center',
      'flex-end',
      'flex-start',
      'stretch',
   ]),
   direction: PropTypes.oneOf([
      'column',
      'column-reverse',
      'row',
      'row-reverse',
   ]),
   justify: PropTypes.oneOf([
      'center',
      'flex-end',
      'flex-start',
      'space-around',
      'space-between',
      'space-evenly',
   ]),
   spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
   wrap: PropTypes.oneOf([
      'nowrap',
      'wrap',
      'wrap-reverse',
   ]),
};
Row.defaultProps = {
   alignContent: 'stretch',
   alignItems: 'stretch',
   direction: 'row',
   justify: 'flex-start',
   spacing: 0,
   wrap: 'wrap',
};
