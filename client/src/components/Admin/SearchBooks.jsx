import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
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
        <div className="text-right m-4">
          <Link to="">
            <h1>View all books</h1>
          </Link>
        </div>
        <div className="m-2 md:m-16">
          <div className="flex gap-1 md:gap-4 outline-double">
            <img
              src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
              className="h-36 md:h-40 w-28"
              alt=""
            />
            <div>
              <h1 className="text-2xl">Data Structure and Algo</h1>
              <h2 className="text-lg">Harved Shidlt</h2>
              <p className="hidden md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
                consectetur adipisicing elit.
              </p>
              <p className="hidden md:block">Last updated: {Date()}</p>
              <p className="font-bold">Total Stock: 20</p>
              <p className="font-bold text-red-900">Available Stock: 10</p>
              <div className="text-right">
                <Link to="/admin/book/1">
                  <button className=" bg-yellow-700 hover:bg-yellow-800  text-white mr-2 px-4 py-1 rounded-md font-bold ">
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="m-2 md:m-16">
          <div className="flex gap-1 md:gap-4 outline-double">
            <img
              src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
              className="h-36 md:h-40 w-28"
              alt=""
            />
            <div>
              <h1 className="text-2xl">Data Structure and Algo</h1>
              <h2 className="text-lg">Harved Shidlt</h2>
              <p className="hidden md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
                consectetur adipisicing elit.
              </p>
              <p className="hidden md:block">Last updated: {Date()}</p>
              <p className="font-bold">Total Stock: 20</p>
              <p className="font-bold text-red-900">Available Stock: 10</p>
              <div className="text-right">
                <Link to="/admin/book/1">
                  <button className=" bg-yellow-700 hover:bg-yellow-800  text-white mr-2 px-4 py-1 rounded-md font-bold ">
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="m-2 md:m-16">
          <div className="flex gap-1 md:gap-4 outline-double">
            <img
              src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
              className="h-36 md:h-40 w-28"
              alt=""
            />
            <div>
              <h1 className="text-2xl">Data Structure and Algo</h1>
              <h2 className="text-lg">Harved Shidlt</h2>
              <p className="hidden md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
                consectetur adipisicing elit.
              </p>
              <p className="hidden md:block">Last updated: {Date()}</p>
              <p className="font-bold">Total Stock: 20</p>
              <p className="font-bold text-red-900">Available Stock: 10</p>
              <div className="text-right">
                <Link to="/admin/book/1">
                  <button className=" bg-yellow-700 hover:bg-yellow-800  text-white mr-2 px-4 py-1 rounded-md font-bold ">
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBooks;
