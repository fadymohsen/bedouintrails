"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { getLocalFallbackImage } from "@/lib/image-fallback";

export default function SafeImage({ src, alt, ...props }: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (typeof src === "string") {
          setImgSrc(getLocalFallbackImage(src));
        }
      }}
    />
  );
}
