import React from "react";
import profilePic from "../assets/images/profile.jpg";
export const About = () => {
  return (
    <section>
      <div className="min-h-screen p-10">
        <h1>Librarian</h1>
        <hr></hr>
        <div className="grid grid-cols-1 md:grid-cols-2 m-5">
          <div className="text-left grid grid-cols-3 h-24 md:h-32 my-4 ">
            <img
              src={profilePic}
              alt=""
              className="rounded-md w-16 h-24 md:h-32 md:w-32"
            ></img>
            <div className="col-span-2">
              <h1 className="text-xl">Mr Jonk Kuk</h1>
              <h2 className="text-lg">Assistitant Librarian</h2>
              <email>mrjungkuk@gmail.com</email>
              <p>Phone: 019********</p>
            </div>
          </div>
          <div className="text-left grid grid-cols-3 h-24 md:h-32 my-4">
            <img
              src={profilePic}
              alt=""
              className="rounded-md w-16 h-24 md:h-32 md:w-32"
            ></img>
            <div className="col-span-2">
              <h1 className="text-xl">Mr Jonk Kuk</h1>
              <h2 className="text-lg">Assistitant Librarian</h2>
              <email>mrjungkuk@gmail.com</email>
              <p>Phone: 019********</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};
