import React from 'react';

export default function ButtonSmall(props) {
  const title = props.buttonName || 'placeholder';
  return (
    <button
      className={`flex items-center justify-center max-w-xs bg-dim-black font-cursive text-accentcolor2 tracking-widest text-xl bg-accentcolor1 py-1 px-4 rounded-lg hover:bg-cream hover:text-accentcolor1 ${
        props.quantity === 0 &&
        props.buttonName === '-' &&
        'opacity-50 cursor-not-allowed'
      }`}
      onClick={props.onClick}
      disabled={props.quantity === 0 && props.buttonName === '-'}
    >
      {title.toUpperCase()}
    </button>
  );
}
