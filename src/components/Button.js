import React from 'react';
import { buttons } from '@styles/index.js';

export default function Button(props) {
  const { whiteBackground, quantity, buttonName } = props;
  const title = props.buttonName || 'placeholder';
  return (
    <button
      className={`${!whiteBackground && buttons.standard}
      ${whiteBackground && buttons.whiteBackground}
      ${quantity === 0 && buttonName === '-' && buttons.disabled}`}
      onClick={props.onClick}
      disabled={quantity === 0 && buttonName === '-'}
    >
      {title.toUpperCase()}
    </button>
  );
}
