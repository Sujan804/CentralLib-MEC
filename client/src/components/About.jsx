import React from "react";
import profilePic from "../assets/images/profile.jpg";
export const About = () => {
  return (
    <section className="min-h-screen p-2">
      <div className=" m-4">
        <h1>Librarian</h1>
        <hr></hr>
        <div className="grid grid-cols-1 md:grid-cols-2 m-5">
          <div className="text-left grid grid-cols-3 h-24 md:h-32 my-4 ">
            <div className="md:text-right md:mr-2">
              <img
                src={profilePic}
                alt=""
                className="rounded-md w-16 h-24 md:h-32 md:w-32 text-right outline-double"
              ></img>
            </div>

            <div className="col-span-2">
              <h1 className="text-xl">Mr Jonk Kuk</h1>
              <h2 className="text-lg">Assistitant Librarian</h2>
              <email>mrjungkuk@gmail.com</email>
              <p>Phone: 019********</p>
            </div>
          </div>
          <div className="text-left grid grid-cols-3 h-24 md:h-32 my-4 ">
            <div className="md:text-right md:mr-2">
              <img
                src={profilePic}
                alt=""
                className="rounded-md w-16 h-24 md:h-32 md:w-32 text-right outline-double"
              ></img>
            </div>

            <div className="col-span-2">
              <h1 className="text-xl">Mr Jonk Kuk</h1>
              <h2 className="text-lg">Assistitant Librarian</h2>
              <email>mrjungkuk@gmail.com</email>
              <p>Phone: 019********</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-lg">
        <h1>Facilities</h1>
        <hr />
        <br />
        <p>
          The Library, unique in character in the country provides the following
          educational and research facilities to the students and teachers of
          this university:
        </p>
        <div>
          <ul>
            <li>
              <span className="text-xl text-red-700">1. Reading Facility:</span>
              The reading room can accommodate 200 students at a time to provide
              reading facilities of rare and out of print books, ready reference
              and prescribed textbooks.
            </li>
            <li>
              <span className="text-xl text-red-700">
                2. Reference, Periodicals and Research Facility:
              </span>{" "}
              The facilities available here include inter alias document
              delivery, current awareness service, preparation of directories,
              indexes and abstracts, and bibliographies of various types, user
              orientation, literature searches, guide and preparation of report
              for researchers and advice and problem solving of individual
              inquires.
            </li>
            <li>
              <span className="text-xl text-red-700">
                3. Reprographic Facility:
              </span>{" "}
              The library provides reproduction facilities of articles, part of
              rare and out of print textbooks and other published materials at a
              very nominal fees to meet the research and educational needs of
              both the students & teachers.
            </li>
            <li>
              <span className="text-xl text-red-700">4. Rental Facility:</span>{" "}
              The Rental library provides textbooks of foreign origin to the
              students for one academic session on rental basis through payment
              of nominal fees at the rate of 10% of the total cost of the
              original price of the book. This helps the students in gaining
              access to the textbooks of all types.
            </li>
            <li>
              <span className="text-xl text-red-700">5. Lending Facility:</span>{" "}
              Borrowing facilities are extended to all members of the university
              including students of both graduate and post-graduate levels.
              Inter-library loan facilities are also available.
            </li>
            <li>
              <span className="text-xl text-red-700">
                6. Browsing Facility:
              </span>{" "}
              Both undergraduate and post-graduate students are eligible to use
              internet for two hours at a time on production of their valid ID
              cards along with user name and password obtainable from IICT.
              There are 42 PCs available for this purpose.
            </li>
          </ul>
          <br />
          <p>
            <span className="text-xl text-red-800 font-bold">
              Library hours:
            </span>
            <br></br>
            <span className="text-xl text-red-700"> 1. General library: </span>
            Saturday-Wednesday (9:00am to 5:00pm)
            <br></br>
            <span className="text-xl text-red-700"> 2. Reading Room </span>:
            Saturday-Wednesday (9:00am to 10:00pm) and Thursday (9:00am to
            9:00pm)
            <br />{" "}
            <span className="text-xl text-red-700">
              {" "}
              3. Browsing Room:{" "}
            </span>{" "}
            Saturday - Thursday (9:00am to 9:00pm)
          </p>
        </div>
      </div>
    </section>
  );
};
