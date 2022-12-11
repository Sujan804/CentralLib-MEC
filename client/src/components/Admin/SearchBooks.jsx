import React from "react";
import { BsSearch } from "react-icons/bs";
import AdminSidebar from "./Sidebar/AdminSidebar";
const SearchBooks = () => {
  return (
    <section className="grid grid-cols-12  min-h-screen">
      <div className="col-span-1 md:col-span-2">
        <AdminSidebar />
      </div>
      <div className="col-span-11 md:col-span-10 max-h-screen overflow-auto">
        <div>
          <div className="py-10">
            <h1 className="text-center mb-4">Search Books</h1>
            <div className="rounded-md flex justify-center">
              <div className="m-0 p-0">
                <select className="py-2.5 md:py-3 left-10 block w-16  text-sm md:text-lg md:mx-auto md:w-24 rounded-l-md ">
                  <option>Titile</option>
                  <option>Author</option>
                  <option>Department</option>
                </select>
              </div>
              <div className="m-0 p-0">
                <input
                  type="text"
                  name="query"
                  id="query"
                  className="pl-2 py-2 left-10  block w-40  text-sm md:text-lg md:mx-auto md:w-96 "
                  placeholder="Search"
                />
              </div>
              <div>
                <BsSearch className="bg-blue-600 text-3xl text-white py-1.5 px-4 rounded-r-md md:py-2.5 hover:bg-blue-700 md:w-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBooks;
