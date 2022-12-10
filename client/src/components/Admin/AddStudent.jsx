import React from "react";
import AdminSidebar from "./Sidebar/AdminSidebar";

const AddStudent = () => {
  return (
    <section className="grid grid-cols-12  min-h-screen bg-yellow-50">
      <div className="col-span-1 md:col-span-2">
        <AdminSidebar />
      </div>
      <div className="col-span-11 md:col-span-10 max-h-screen overflow-auto my-2">
        <div>
          <h1 className="text-center">Add New Student</h1>
        </div>
        <div className="mr-6 mt-4 text-center">
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
              <label htmlFor="name" className="uppercase font-bold block">
                Registration
              </label>
              <input
                type="text"
                placeholder="804"
                name="reg"
                className="m-2 w-64 h-6 md:w-96"
                required
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="uppercase font-bold block">
                Class Roll
              </label>
              <input
                type="text"
                placeholder="2204"
                name="roll"
                className="m-2 w-64 h-6 md:w-96"
                required
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="uppercase font-bold block">
                College Id
              </label>
              <input
                type="text"
                placeholder="ex: 1819084"
                name="id"
                className="m-2 w-64 h-6 md:w-96"
                required
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="batch" className="uppercase font-bold block">
                Batch No
              </label>
              <input
                type="text"
                name="batch"
                placeholder="11th"
                className="m-2 w-64 h-6 md:w-96"
                required
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="uppercase font-bold block">
                Department:
              </label>
              <select name="dept" className="w-64 h-6 md:w-96 " required>
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
                <option value="CIVIL">CIVIL</option>
              </select>
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
              value="Add Student"
              className="w-64 md:w-96 bg-blue-900 text-white rounded p-2 text-center"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddStudent;
