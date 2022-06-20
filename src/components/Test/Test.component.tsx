import React from 'react';
import 'index.css';

export interface ITestComponent {
  isTest: boolean;
  optionalText?: string;
}

function TestComponent(props: ITestComponent) {
  const { isTest, optionalText } = props;
  return (
    <h1 className={`text-3xl font-bold ${isTest ? 'underline' : ''}`}>
      {optionalText || 'Hello world!'}
    </h1>
  );
}

export default TestComponent;
