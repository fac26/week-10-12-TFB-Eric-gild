import React from 'react';
import Link from 'next/link';
import Loading from 'pages/loading';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ButtonLink({
  buttonName,
  buttonLink,
  ButtonOnClick = () => {},
}) {
  const name = buttonName || 'placeholder';
  const link = buttonLink || '/loading';
  const router = useRouter();

  console.log(router.asPath);
  console.log(link);

  if (router.asPath == link) {
    return <Loading />;
  }
  //this doesnt work?

  return (
    <Link
      href={link}
      onClick={ButtonOnClick}
      className='flex items-center justify-center max-w-xs w-40 bg-dim-black font-cursive text-accentcolor3 tracking-widest text-3xl bg-accentcolor1 py-2 px-2 rounded-lg hover:bg-accentcolor3 hover:text-accentcolor1'
    >
      {name.toUpperCase()}
    </Link>
  );
}
