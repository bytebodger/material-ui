import React from 'react';
import { Row } from './Row';
import { Column } from './Column';

export const App = () => {
  return (
    <div className="App">
      <Row>
        <Column>Foo</Column>
      </Row>
    </div>
  );
};
