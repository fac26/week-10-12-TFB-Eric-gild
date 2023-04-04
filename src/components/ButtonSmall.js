import React from 'react';
import Link from 'next/link';
import { buttons } from '@styles/index.js';

export default function ButtonSmall({
  buttonName,
  buttonLink,
  ButtonOnClick = () => {},
}) {
  const name = buttonName || 'placeholder';
  const link = buttonLink || '/';
  return (
    <Link href={link} onClick={ButtonOnClick} className={`${buttons.small}`}>
      {name.toUpperCase()}
    </Link>
  );
}
