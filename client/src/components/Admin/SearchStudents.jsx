import React from "react";
import { BsSearch } from "react-icons/bs";
import profilePic from "../../assets/images/profile.jpg";
import AdminSidebar from "./Sidebar/AdminSidebar";
const SearchStudents = () => {
  return (
    <section className="grid grid-cols-12  min-h-screen">
      <div className="col-span-1 md:col-span-2">
        <AdminSidebar />
      </div>
      <div className="col-span-11 md:col-span-10 max-h-screen overflow-auto">
        <div>
          <div className="py-10">
            <h1 className="text-center mb-4">Search Students</h1>
            <div className="rounded-md flex justify-center">
              <div className="m-0 p-0">
                <select className="py-2.5 md:py-3 left-10 block w-16  text-sm md:text-lg md:mx-auto md:w-24 rounded-l-md ">
                  <option>Name</option>
                  <option>Student Id</option>
                  <option>Registration</option>
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
        <div>
          <div className="flex gap-3 md:gap-8 m-4 md:m-24 outline-double p-2">
            <div className="items-center flex">
              <img
                src={profilePic}
                alt=""
                className="w-24 h-24 rounded-full outline-double"
              />
            </div>
            <div>
              <p className="text-xl font-bold">John Doe(1819084)</p>
              <p>Computer Science and Engineering</p>
              <p>Session: 2018-19</p>
              <p>Class Rol: 2204</p>
              <p>Reg No: 804</p>
            </div>
            <div className="items-end flex">
              <button className="bg-blue-800 hover:bg-blue-900 text-white p-2 items-center flex">
                View Student
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchStudents;
