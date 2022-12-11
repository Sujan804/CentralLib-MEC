import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../../assets/images/profile.jpg";
import AdminSidebar from "./Sidebar/AdminSidebar";
const Settings = () => {
  return (
    <section className="grid grid-cols-12  min-h-screen">
      <div className="col-span-1 md:col-span-2">
        <AdminSidebar />
      </div>
      <div className="col-span-11 md:col-span-10 max-h-screen overflow-auto">
        <div className="mr-6 mt-8 text-center">
          <h1>Add new Admin</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="uppercase font-bold block">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                name="name"
                className="m-2 w-64 h-6 md:w-96"
                required
              ></input>
            </div>

            <div className="mb-4">
              <label htmlFor="batch" className="uppercase font-bold block">
                Create A Password
              </label>
              <input
                type="pass"
                name="password"
                placeholder="****"
                className="m-2 w-64 h-6 md:w-96"
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="batch" className="uppercase font-bold block">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="johndoe@gmail.com"
                className="m-2 w-64 h-6 md:w-96"
                required
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="batch" className="uppercase font-bold block">
                Phone No
              </label>
              <input
                type="phone"
                name="phone"
                placeholder="019********"
                className="m-2 w-64 h-6 md:w-96"
              ></input>
            </div>
            <input
              type="submit"
              value="Add Admin"
              className="w-64 md:w-96 bg-blue-900 text-white rounded p-2 text-center"
            />
          </form>
        </div>
        <div className="mr-6 mt-8 text-center">
          <h1>Admin(s)</h1>
          <div>
            <div className="outline-double m-2 md:m-16 p-2">
              <div className="flex gap-3 md:gap-8 m-4   p-2">
                <div className=" flex">
                  <img
                    src={profilePic}
                    alt=""
                    className="w-24 h-24 rounded-full outline-double"
                  />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold">John Doe</p>
                  <p>Password: *******</p>
                </div>
              </div>
              <div className="items-end flex text-left">
                <Link to="">
                  <button className="bg-red-800 hover:bg-red-900 text-white p-2 items-center flex">
                    Delete Admin
                  </button>
                </Link>
                <Link className="ml-4" to="">
                  <button className="bg-yellow-800 hover:bg-yellow-900 text-white p-2 items-center flex">
                    Edit Admin
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

export default Settings;
