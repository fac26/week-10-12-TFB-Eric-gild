import React from 'react';
import { buttons } from '@styles/index.js';

export default function ButtonSmall(props) {
  const { whiteBackground, quantity, buttonName } = props;
  const title = props.buttonName || 'placeholder';
  return (
    <button
      className={`${!whiteBackground && buttons.small}
      ${whiteBackground && buttons.whiteBackgroundSmall} ${
        quantity === 0 && buttonName === '-' && buttons.disabled
      }`}
      onClick={props.onClick}
      disabled={quantity === 0 && buttonName === '-'}
    >
      {title.toUpperCase()}
    </button>
  );
}
