import React from 'react';
import Link from 'next/link';

export default function Button({
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
      className="flex items-center justify-center max-w-xs w-32 bg-dim-black font-cursive text-accentcolor2 tracking-widest text-xl bg-accentcolor1 py-1 px-1 rounded-lg hover:bg-green hover:text-accentcolor1"
    >
      {name.toUpperCase()}
    </Link>
  );
}
