import React, { useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../Store";
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
const StudentDash = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: true,
  });
  const found = false;
  useEffect(() => {
    if (!userInfo) {
      navigate("login");
    }
  }, [userInfo, navigate]);
  console.log(userInfo);
  const deptMap = {
    CSE: "Computer Science and Engineering",
    EEE: "Electrical and Electronics Engineering",
    CIVIL: "Civil Engineering",
  };
  return (
    <section className="mt-10 min-h-screen">
      <div className="mx-auto text-center">
        <img
          src={`http://localhost:5000/images/${userInfo.user.image}`}
          alt="ProfilePic"
          className="w-28 h-28 rounded-full outline-double"
        ></img>
        <h1>{userInfo.user.name}</h1>
        <h2 className="text-lg">{userInfo.user.registration}</h2>
        <p>Session: 2018-19</p>
        <p>Department: {deptMap[userInfo.user.department]}</p>
        <button className="my-2 py-1 px-2 bg-yellow-500 hover:bg-yellow-600">
          Update Profile
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
              <div className="text-right mt-3">
                <button className="px-3 py-1 bg-green-400 font-bold mr-3">
                  Reissue
                </button>
                <button className="px-3 py-1 bg-red-400 font-bold mr-2">
                  Return
                </button>
              </div>
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
              <div className="text-right mt-3">
                <button className="px-3 py-1 bg-green-400 font-bold mr-3">
                  Reissue
                </button>
                <button className="px-3 py-1 bg-red-400 font-bold mr-2">
                  Return
                </button>
              </div>
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
              <div className="text-right mt-3">
                <button className="px-3 py-1 bg-green-400 font-bold mr-3">
                  Reissue
                </button>
                <button className="px-3 py-1 bg-red-400 font-bold mr-2">
                  Return
                </button>
              </div>
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
                <div className="text-right m-3">
                  <button className="px-3 py-1 bg-green-400 font-bold ">
                    Issue again
                  </button>
                </div>
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
                <div className="text-right m-3">
                  <button className="px-3 py-1 bg-green-400 font-bold ">
                    Issue again
                  </button>
                </div>
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
                <div className="text-right m-3">
                  <button className="px-3 py-1 bg-green-400 font-bold ">
                    Issue again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentDash;
