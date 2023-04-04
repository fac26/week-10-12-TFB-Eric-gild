import React from 'react';
import { buttons } from '@styles/index.js';

export default function Button(props) {
  const title = props.buttonName || 'placeholder';
  return (
    <button
      className={`${!props.whiteBackground && buttons.standard}
      ${props.whiteBackground && buttons.whiteBackground}  ${
        props.quantity === 0 && props.buttonName === '-' && buttons.disabled
      }`}
      onClick={props.onClick}
      disabled={props.quantity === 0 && props.buttonName === '-'}

    >
      {title.toUpperCase()}
    </button>
  );
}
