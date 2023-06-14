"use client";

import Image from "next/image";

export default function SecondaryImages({ img }) {
  return (
    <>
      <a
        data-fslightbox="mygalley"
        className="border mx-1 rounded-2"
        target="_blank"
        data-type="image"
        href={img}
      >
        <Image
          alt="secondary image"
          width={60}
          height={60}
          className="rounded-2"
          src={img}
        />
      </a>
    </>
  );
}
