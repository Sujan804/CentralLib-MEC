import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Store } from "../../Store";
import AdminSidebar from "./Sidebar/AdminSidebar";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "FETCH_FAIL":
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
const ViewStudent = () => {
  const params = useParams();
  const { student_id } = params;
  console.log(student_id);
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: true,
  });
  const found = false;
  const [student, setStudent] = useState([]);
  useEffect(() => {
    if (!userInfo) {
      navigate("login");
    }
    dispatch({ type: "FETCH_REQUEST" });
    const fetchBook = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/user/63e48660a89bf9854f0ae463"
      );
      console.log("data", data);
      setStudent(data);
      dispatch({ type: "FETCH_SUCCESS" });
    };
    fetchBook();
  }, [userInfo, navigate]);
  console.log(student);
  // if (student.length === 0) {
  //   return (
  //     <h1 className="text-red-700 min-h-screen text-center mt-16">
  //       Student not Found 404!
  //     </h1>
  //   );
  // }
  return (
    <section className="grid grid-cols-12  min-h-screen">
      <div className="col-span-1 md:col-span-2">
        <AdminSidebar />
      </div>
      <div className=" mt-4 col-span-11 md:col-span-10 max-h-screen overflow-auto">
        <div className="mx-auto text-center">
          <img
            src={`http://localhost:5000/images/${student.image}`}
            alt=""
            className="w-28 h-28 rounded-full outline-double"
          ></img>
          <h1>{student.name}</h1>
          <h2 className="text-lg">{student.registration}</h2>
          <p>{student.department}</p>
          <p>
            <a href="mailto:johndoew@gmail.com">{student.email}</a>
          </p>
          <p className="mb-3">
            {" "}
            <a href="tel:1101010">{student.phone}</a>
          </p>
          <button className=" my-2 py-1  text-white px-2 bg-yellow-700 hover:bg-yellow-800">
            Send Notifications
          </button>
          <button className="ml-5 my-2 py-1  text-white px-2 bg-red-700 hover:bg-red-800">
            Delete Profile
          </button>
          <br />
          <hr></hr>
        </div>
        <div className="mx-3 my-3">
          <h1>Issued Book</h1>
          <div className="md:grid grid-cols-2 gap-x-2 md:p-4">
            <div className="grid grid-cols-4 my-2 bg-yellow-200 rounded-sm h-24 md:p-4">
              <div className="grids-cols-1 ">
                <img
                  src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
                  alt=""
                  className="w-20 h-24"
                ></img>
              </div>
              <div className="col-span-3">
                <h1 className="text-lg text-left">
                  Data Structure and Algorithm
                </h1>
                <p className="text-base">Harved Schidt</p>
                <div className="text-right mt-3"></div>
              </div>
            </div>
            <div className="grid grid-cols-4 my-2 bg-yellow-200 rounded-sm h-24 md:p-4">
              <div className="grids-cols-1 ">
                <img
                  src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
                  alt=""
                  className="w-20 h-24"
                ></img>
              </div>
              <div className="col-span-3">
                <h1 className="text-lg text-left">
                  Data Structure and Algorithm
                </h1>
                <p className="text-base">Harved Schidt</p>
                <div className="text-right mt-3"></div>
              </div>
            </div>
            <div className="grid grid-cols-4 my-2 bg-yellow-200 rounded-sm h-24 md:p-4">
              <div className="grids-cols-1 ">
                <img
                  src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
                  alt=""
                  className="w-20 h-24"
                ></img>
              </div>
              <div className="col-span-3">
                <h1 className="text-lg text-left">
                  Data Structure and Algorithm
                </h1>
                <p className="text-base">Harved Schidt</p>
                <div className="text-right mt-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-3">
          <h1>Activity</h1>
          <div className="md:grid grid-cols-3 gap-x-1 md:p-3">
            <div>
              <div className="grid grid-cols-4 my-2 bg-green-200 rounded-sm h-24 md:p-3">
                <div className="grids-cols-1 ">
                  <img
                    src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
                    alt=""
                    className="w-20 h-24"
                  ></img>
                </div>
                <div className="col-span-3">
                  <h1 className="text-lg text-left">
                    Data Structure and Algorithm
                  </h1>
                  <p className="text-base">Harved Schidt</p>
                  <div className="text-right m-3"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-4 my-2 bg-green-200 rounded-sm h-24 md:p-3">
                <div className="grids-cols-1 ">
                  <img
                    src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
                    alt=""
                    className="w-20 h-24"
                  ></img>
                </div>
                <div className="col-span-3">
                  <h1 className="text-lg text-left">
                    Data Structure and Algorithm
                  </h1>
                  <p className="text-base">Harved Schidt</p>
                  <div className="text-right m-3"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-4 my-2 bg-green-200 rounded-sm h-24 md:p-3">
                <div className="grids-cols-1 ">
                  <img
                    src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
                    alt=""
                    className="w-20 h-24"
                  ></img>
                </div>
                <div className="col-span-3">
                  <h1 className="text-lg text-left">
                    Data Structure and Algorithm
                  </h1>
                  <p className="text-base">Harved Schidt</p>
                  <div className="text-right m-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewStudent;
