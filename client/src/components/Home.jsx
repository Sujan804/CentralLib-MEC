import React from "react";

const Home = () => {
  return (
    <section className="items-center text-center p-12 ">
      <h1 className="text-center text-2xl">Library Catalog</h1>
      <div className="flex flex-row items-center">
        <div className="d-flex  items-center">
          <select className="text-1xl py-2">
            <option>Author</option>
            <option>Subject</option>
            <option>Department</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Data Sturcture and Algo."
            className="text-1xl py-2"
          />
        </div>
      </div>
      <div className="flex"></div>
    </section>
  );
};

export default Home;
