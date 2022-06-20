import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Test from 'components/Test';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <Test isTest />
  </StrictMode>,
  document.getElementById('root')
);
