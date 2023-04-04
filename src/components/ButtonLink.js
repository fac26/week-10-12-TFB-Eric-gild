import React from 'react';
import Link from 'next/link';
import { buttons } from '@styles/index.js';
import Loading from 'pages/loading';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ButtonLink({
  whiteBackground,
  buttonName,
  buttonLink,
  ButtonOnClick = () => {},
}) {
  const name = buttonName || 'placeholder';
  const link = buttonLink || '/loading';
  // const router = useRouter();

  // console.log(router.asPath);
  // console.log(link);

  // if (router.asPath == link) {
  //   return <Loading />;
  // }
  // //this doesnt work?

  return (
    <Link
      href={link}
      onClick={ButtonOnClick}
      className={`${!whiteBackground && buttons.standard}
      ${whiteBackground && buttons.whiteBackground}`}
    >
      {name.toUpperCase()}
    </Link>
  );
}
