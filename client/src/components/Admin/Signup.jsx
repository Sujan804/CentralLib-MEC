import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [refId, setRefId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    const collegeId = id;
    const isAdmin = true;
    e.preventDefault();
    await axios
      .post("http://localhost:5000/admin/signup", {
        name,
        collegeId,
        password,
        isAdmin,
      })
      .then((res) => {
        if (res.data.success) {
          navigate("/admin/login");
          setError("ADDED Successfully");
          console.log("Successfully created");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src={`https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp`}
              className="w-full"
              alt=""
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={onSubmitHandler}>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-4 mr-4 text-3xl">Admin Signup</p>
              </div>
              <p>{error}</p>
              <div className="mb-6">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="collegeId"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-6">
                <label>Make a Id(Please remember it)</label>
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="collegeId"
                  placeholder="ex: 1819084"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="mb-6">
                <label>Confirm password</label>
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="confirm Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </div>
              <div className="mb-6">
                <label>Refference Id(Any existing Admin Id)</label>
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="collegeId"
                  placeholder="ex: 1819084"
                  value={refId}
                  onChange={(e) => {
                    setRefId(e.target.value);
                  }}
                />
              </div>
              <div className="text-center lg:text-left">
                <input
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  type="submit"
                  value="SignUp"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
