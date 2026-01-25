import React from "react";

export default function MockImage({
  src,
  alt,
  width,
  height,
  priority,
  unoptimized,
  ...props
}: React.ComponentProps<"img"> & {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  unoptimized?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={width} height={height} {...props} />
  );
}
