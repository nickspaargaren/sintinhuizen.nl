import { Link } from "gatsby";
import React from "react";

type ButtonProps = {
  title: string;
  url: string;
};

export const Button = ({ title, url }: ButtonProps) => (
  <Link
    to={url}
    className="block drop-shadow-line p-3 leading-none rounded font-alfaSlabOne lg:inline-block bg-red hover:bg-yellow transition text-white text-center tracking-wider mr-2 mb-2"
  >
    {title}
  </Link>
);
