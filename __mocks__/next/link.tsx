import React from "react";

type NextLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

export default function MockLink({
  href,
  children,
  onClick,
  ...props
}: NextLinkProps) {
  return (
    <a
      href={href}
      {...props}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
