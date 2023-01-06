import axios from "axios";
import React, { useState } from "react";
import AdminSidebar from "./Sidebar/AdminSidebar";

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [stock, setStock] = useState(0);
  const [department, setDepartment] = useState("CSE");
  const [isbn, setIsbn] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("stock", stock);
    formData.append("department", department);
    formData.append("isbn", isbn);
    formData.append("description", description);
    formData.append("image", image);
    console.log(formData);
    try {
      axios
        .post("http://localhost:5000/book/books", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      console.log("added scuic");
    } catch (error) {
      console.log(error.message);
    }
  };

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
          <form onSubmit={handleSubmit}>
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="uppercase font-bold block">
                Department
              </label>
              <select name="dept" className="w-64 h-6 md:w-96 " required>
                <option
                  defaultChecked
                  value="CSE"
                  onSelect={(e) => setDepartment(e.target.value)}
                >
                  CSE
                </option>
                <option
                  value="EEE"
                  onSelect={(e) => setDepartment(e.target.value)}
                >
                  EEE
                </option>
                <option
                  value="CIVIL"
                  onSelect={(e) => setDepartment(e.target.value)}
                >
                  CIVIL
                </option>
              </select>
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
                value={stock}
                onChange={(e) => setStock(e.target.value)}
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
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
              className="w-64 md:w-96 bg-blue-800 hover:bg-blue-900 text-white rounded p-2 text-center"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddBooks;
