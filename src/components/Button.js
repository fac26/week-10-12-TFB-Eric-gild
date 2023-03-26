import React from "react";
import Link from "next/link";

export default function Button({
  buttonName,
  buttonLink,
  ButtonOnClick = () => {},
}) {
  return (
    <Link
      href={buttonLink}
      onClick={ButtonOnClick}
      className="flex items-center justify-center max-w-xs bg-dim-black text-white tracking-widest text-3xl bg-purple py-2 px-2 rounded-lg hover:bg-green hover:text-purple"
    >
      {buttonName.toUpperCase()}
    </Link>
  );
}
