import React from "react";
import { Link } from "react-router-dom";
export const Links = () => {
  return (
    <>
      <li>
        <Link
          to="/"
          className="py-7 px-2 inline-block no-underline text-black font-bold hover:font-extrabold"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="py-7 px-2 inline-block  no-underline text-black font-bold"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/e-books"
          className="py-7 px-2 inline-block no-underline text-black font-bold"
        >
          E-Books
        </Link>
      </li>
      <li>
        <Link
          to="/e-journals"
          className="py-7 px-2 inline-block no-underline text-black font-bold"
        >
          E-Journals
        </Link>
      </li>
      <li>
        <Link
          to="/institutional-repository"
          className="py-7 px-2 inline-block no-underline text-black font-bold"
        >
          Institutional Repository
        </Link>
      </li>
    </>
  );
};
