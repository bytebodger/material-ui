import * as PropTypes from 'prop-types';
import React from 'react';
import { Grid } from '@mui/material';

export const Column = props => {
   return <>
      <Grid
         item={true}
         {...props}
      >
         {props.children}
      </Grid>
   </>;
};

const columnOptions = [false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
Column.propTypes = {
   lg: PropTypes.oneOf(columnOptions),
   md: PropTypes.oneOf(columnOptions),
   sm: PropTypes.oneOf(columnOptions),
   xl: PropTypes.oneOf(columnOptions),
   xs: PropTypes.oneOf(columnOptions),
   zeroMinWidth: PropTypes.bool,
};
Column.defaultProps = {
   lg: false,
   md: false,
   sm: false,
   xl: false,
   xs: false,
   zeroMinWidth: false,
};
