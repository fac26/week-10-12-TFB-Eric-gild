import React from 'react';
import Link from 'next/link';
import { buttons } from '@styles/index.js';

export default function ButtonLinkSmall({
  whiteBackground,
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
      className={`${!whiteBackground && buttons.small}
    ${whiteBackground && buttons.whiteBackgroundSmall}`}
    >
      {name.toUpperCase()}
    </Link>
  );
}
