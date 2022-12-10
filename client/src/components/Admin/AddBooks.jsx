import React from "react";
import AdminSidebar from "./Sidebar/AdminSidebar";

const AddBooks = () => {
  return (
    <section className="grid grid-cols-12  min-h-screen bg-yellow-50">
      <div className="col-span-1 md:col-span-2">
        <AdminSidebar />
      </div>
      <div className="col-span-11 md:col-span-10 max-h-screen overflow-auto my-2">
        <div>
          <h1 className="text-center">Add New Books</h1>
        </div>
        <div className="mr-6 mt-4 text-center">
          <form>
            <div className="mb-4">
              <label htmlFor="title" className="uppercase font-bold block">
                Book title
              </label>
              <input
                type="text"
                placeholder="Data Structure And Algorithm"
                name="title"
                className="m-2 w-64 h-6 md:w-96"
                required
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="uppercase font-bold block">
                Author
              </label>
              <input
                type="text"
                placeholder="Harverd Shield"
                name="reg"
                className="m-2 w-64 h-6 md:w-96"
                required
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="stock" className="uppercase font-bold block">
                Stock
              </label>
              <input
                type="number"
                placeholder="20"
                name="stock"
                className="m-2 w-64 h-6 md:w-96"
                required
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="isbn" className="uppercase font-bold block">
                ISBN
              </label>
              <input
                type="text"
                placeholder=" 978-3-16-148410-0"
                name="isbn"
                className="m-2 w-64 h-6 md:w-96"
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="decription" className="uppercase font-bold block">
                Description
              </label>
              <textarea
                type="textaria"
                placeholder="A data structure is a named location that can be used to store and organize data..."
                name="description"
                className="m-2 w-64  h-10 md:h-20 md:w-96"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="uppercase font-bold block">
                Upload a photo
              </label>
              <input
                type="file"
                name="file"
                className="m-2 w-64 h-20 md:w-96"
              ></input>
            </div>
            <input
              type="submit"
              value="Add Books"
              className="w-64 md:w-96 bg-blue-900 text-white rounded p-2 text-center"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddBooks;
