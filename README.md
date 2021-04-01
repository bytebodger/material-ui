# material-ui

`material-ui` is just a few simple (borderline-silly, they're so _simple_) wrapper components for Material UI. Specifically, the package provides `<Row>` and `<Column>`, which are meant to provide a more intuitive interface to Material UI's `<Grid>` component.

Most paradigms for responsive design work off a concept of having _rows_, with each of those rows containing _columns_. But for some reason, the folks who designed Material UI decided that rows and columns should both be controlled by a single component - `<Grid>`. This can lead to React code that looks like this:

```jsx
export const SomeComponent = () => {
   return <>
      <Grid container={true}>
         <Grid item={true} xs={12}>
            <Grid container={true}>
               <Grid item={true} xs={6}>
                  Some content
               </Grid>
               <Grid item={true} xs={6}>
                  Some more content
               </Grid>
            </Grid>
         </Grid>
      </Grid>>
   </>
}
```

In the example above, there is one _row_, that contains a _column_, that spans the entire _row_. Inside that _column_, there's another _row_. The inner _row_ contains two _columns_, each spanning half the length of the _row_. Despite this, the code contains no references to "rows" or "columns".  _Every_ component is a "Grid". The _rows_ are grids - with the `container` attribute set to `true`. The _columns_ are grids - with the `item` attribute set to `true`.

This is very counterintuitive for anyone who's accustomed to dealing with "traditional" responsive design systems. It's difficult to mentally parse the successive layers of nested `<Grid>`s. It's also difficult to quickly peruse the code and determien which `<Grid>`s represent _rows_, and which ones represent _columns_. It just looks like a big pile of `<Grid>` components (which... it _is_).

This package provides two simple wrapper components that will transform the above code as such:

```jsx
import { Column } from './Column';

export const SomeComponent = () => {
   return <>
      <Row>
         <Column xs={12}>
            <Row>
               <Column xs={6}>
                  Some content
               </Column>
               <Column xs={6}>
                  Some more content
               </Column>
            </Row>
         </Column>
      </Row>
   </>
}
```

## Usage

After installation, import the components:

```jsx
import { Column, Row } from '@toolz/material-ui';
```

## Components

### `<Row>`

A `<Row>` is a responsive container designed to hold `<Column>` components.

```javascript
const props = {
   alignContent: {
      optional,
      format: oneOf[
         'center',
            'flex-end',
            'flex-start',
            'space-around',
            'space-between',
            'stretch',
         ],
      defaultValue: 'stretch',
   },
   alignItems: {
      optional,
      format: oneOf[
         'baseline',
            'center',
            'flex-end',
            'flex-start',
            'stretch',
         ],
      defaultValue: 'stretch',
   },
   direction: {
      optional,
      format: oneOf[
         'column',
            'column-reverse',
            'row',
            'row-reverse',
         ],
      defaultValue: 'row',
   },
   justify: {
      optional,
      format: oneOf[
         'center',
            'flex-end',
            'flex-start',
            'space-around',
            'space-between',
            'space-evenly',
         ],
      defaultValue: 'flex-start',
   },
   spacing: {
      optional,
      format: oneOf[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      defaultValue: 0,
   },
   wrap: {
      optional,
      format: oneOf[
         'nowrap',
            'wrap',
            'wrap-reverse',
         ],
      defaultValue: 'wrap',
   },
}
```

### `<Column>`

A `<Column>` is a wrapper component that denotes a responsive column of content, residing inside a `<Row>` component.

```javascript
const props = {
   alignContent: {
      optional,
      format: oneOf[
         'center',
            'flex-end',
            'flex-start',
            'space-around',
            'space-between',
            'stretch',
         ],
      defaultValue: 'stretch',
   },
   alignItems: {
      optional,
      format: oneOf[
         'baseline',
            'center',
            'flex-end',
            'flex-start',
            'stretch',
         ],
      defaultValue: 'stretch',
   },
   direction: {
      optional,
      format: oneOf[
         'column',
            'column-reverse',
            'row',
            'row-reverse',
         ],
      defaultValue: 'row',
   },
   justify: {
      optional,
      format: oneOf[
         'center',
            'flex-end',
            'flex-start',
            'space-around',
            'space-between',
            'space-evenly',
         ],
      defaultValue: 'flex-start',
   },
   lg: {
      optional,
      format: oneOf[false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      defaultValue: false,
   },
   md: {
      optional,
      format: oneOf[false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      defaultValue: false,
   },
   sm: {
      optional,
      format: oneOf[false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      defaultValue: false,
   },
   wrap: {
      optional,
      format: oneOf[
         'nowrap',
            'wrap',
            'wrap-reverse',
         ],
      defaultValue: 'wrap',
   },
   xl: {
      optional,
      format: oneOf[false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      defaultValue: false,
   },
   xs: {
      optional,
      format: oneOf[false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      defaultValue: false,
   },
   zeroMinWidth: {
      optional,
      format: Boolean,
      defaultValue: false,
   },
}
```
