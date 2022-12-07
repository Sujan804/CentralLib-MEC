import React from "react";

const Footer = () => {
  return (
    <footer className="p-4  sm:p-6 bg-slate-600 text-white">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <p className="text-4xl">Central Library</p>
          <p className="text-3xl">Mymensingh Engineering College</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <h11>Google Map</h11>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 text-gray-500" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-300 sm:text-center">
          © 2022 .{" "}
          <a
            href="http://www.mec.ac.bd/"
            className="text-gray-300 no-underline"
          >
            {" "}
            All Rights Reserved Mymensingh Engineering College.
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
