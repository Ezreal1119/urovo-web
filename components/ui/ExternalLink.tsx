import Link from "next/link";
import React from "react";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        text-inherit
        underline underline-offset-2
        decoration-transparent
        transition-colors
            hover:text-pink-400
          "
    >
      {children}
    </Link>
  );
}

export default ExternalLink;
