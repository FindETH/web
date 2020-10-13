import React, { FunctionComponent } from 'react';
import { FlowComponentProps } from '../Flow';

export const FirstComponent: FunctionComponent<FlowComponentProps> = ({ onNext }) => (
  <p>
    First component
    <button id="next-button" onClick={onNext}>
      Next
    </button>
  </p>
);

export const SecondComponent: FunctionComponent<FlowComponentProps> = ({ onNext, onReset }) => (
  <p>
    Second component
    <button id="next-button" onClick={onNext}>
      Next
    </button>
    <button id="reset-button" onClick={onReset}>
      Reset
    </button>
  </p>
);
