import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import AdminSidebar from "./Sidebar/AdminSidebar";
const AddStudent = () => {
  const [name, setName] = useState("");
  const [registration, setRegistration] = useState("");
  const [collegeId, setCollegeId] = useState("");
  const [batchNo, setBatchNo] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("registration", registration);
    formData.append("batchNo", batchNo);
    formData.append("department", department);
    formData.append("collegeId", collegeId);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("image", image);
    formData.append("isAdmin", false);
    console.log(formData);
    try {
      const result = await axios.post("http://localhost:5000/user", formData, {
        "Content-Type": "multipart/form-data",
      });
      setName("");
      setBatchNo("");
      setDepartment("CSE");
      setEmail("");
      setPassword("");
      setPhone("");
      setImage(null);
      setRegistration("");
      setCollegeId("");
      console.log(result.data);
      toast.success("Student Added");
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };
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
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="uppercase font-bold block">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="m-2 w-64 h-9 md:w-96 text-lg"
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
                value={registration}
                onChange={(e) => setRegistration(e.target.value)}
                className="m-2 w-64 h-9 md:w-96 text-lg"
                required
              ></input>
            </div>
            {/* <div className="mb-4">
              <label htmlFor="name" className="uppercase font-bold block">
                Class Roll
              </label>
              <input
                type="text"
                placeholder="2204"
                value={cla}
                className="m-2 w-64 h-9 md:w-96 text-lg"
                required
              ></input>
            </div> */}
            <div className="mb-4">
              <label htmlFor="name" className="uppercase font-bold block">
                College Id
              </label>
              <input
                type="text"
                placeholder="ex: 1819084"
                value={collegeId}
                onChange={(e) => setCollegeId(e.target.value)}
                className="m-2 w-64 h-9 md:w-96 text-lg"
                required
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="batch" className="uppercase font-bold block">
                Batch No
              </label>
              <input
                type="text"
                value={batchNo}
                onChange={(e) => setBatchNo(e.target.value)}
                placeholder="11th"
                className="m-2 w-64 h-9 md:w-96 text-lg"
                required
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="uppercase font-bold block">
                Department:
              </label>
              <select
                name="dept"
                className="m-2 w-64 h-9 md:w-96 text-lg"
                onChange={(e) => setDepartment(e.target.value)}
                required
              >
                <option name="dept" value="CSE">
                  CSE
                </option>
                <option name="dept" value="EEE">
                  EEE
                </option>
                <option name="dept" value="CIVIL">
                  CIVIL
                </option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="batch" className="uppercase font-bold block">
                Create A Password
              </label>
              <input
                type="pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="****"
                className="m-2 w-64 h-9 md:w-96 text-lg"
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="batch" className="uppercase font-bold block">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe@gmail.com"
                className="m-2 w-64 h-9 md:w-96 text-lg"
                required
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="batch" className="uppercase font-bold block">
                Phone No
              </label>
              <input
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="019********"
                className="m-2 w-64 h-9 md:w-96 text-lg"
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="uppercase font-bold block">
                Upload a photo
              </label>
              <input
                type="file"
                className=" w-94 h-9 md:w-96 text-lg"
                onChange={(e) => setImage(e.target.files[0])}
              ></input>
            </div>
            <input
              type="submit"
              value="Add Student"
              className="w-64 md:w-96 text-lg bg-blue-500 text-white rounded p-2 text-center hover:bg-blue-900"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddStudent;
