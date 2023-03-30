import React from 'react';
import Link from 'next/link';

export default function ButtonSmall({
  buttonName,
  buttonLink,
  ButtonOnClick = () => {},
}) {
  const name = buttonName || 'placeholder';
  const link = buttonLink || '/';
  return (
    <Link
      href={link}
      onClick={ButtonOnClick}
      className='flex items-center justify-center max-w-xs bg-dim-black font-cursive text-accentcolor2 tracking-widest text-xl bg-accentcolor1 py-1 px-4 rounded-lg hover:bg-white hover:text-accentcolor1'
    >
      {name.toUpperCase()}
    </Link>
  );
}
