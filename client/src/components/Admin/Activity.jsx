import React, { useContext, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/images/profile.jpg";
import { Store } from "../../Store";
import AdminSidebar from "./Sidebar/AdminSidebar";
const Activity = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (!userInfo) {
      navigate("login");
    }
  }, [userInfo, navigate]);
  return (
    <section className="grid grid-cols-12  min-h-screen">
      <div className="col-span-1 md:col-span-2">
        <AdminSidebar />
      </div>
      <div className="col-span-11 md:col-span-10 max-h-screen overflow-auto m-2 md:m-16">
        <div>
          <div className="py-10">
            <h1 className="text-center mt-4">Recent Activity</h1>
            <div className="rounded-md flex justify-center">
              <div className="m-0 p-0">
                <select className="py-2.5 md:py-3 left-10 block w-16  text-sm md:text-lg md:mx-auto md:w-24 rounded-l-md ">
                  <option>Book</option>
                  <option>Student</option>
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
          <div className="bg-green-600 flex gap-2 p-2 rounded-md mb-2">
            <div>
              <img src={profile} alt="" className="w-12 h-12 rounded-full" />
            </div>
            <div className=" text-white">
              <p className="text-lg">
                <Link className="no-underline text-red-300 italic">
                  John Doe(18190804)
                </Link>{" "}
                returned{" "}
                <Link className="no-underline text-red-300 italic">
                  Data Structure and algorithm
                </Link>
              </p>
              <p>{Date()}</p>
            </div>
            <div className="text-right items-center">
              <IoMdArrowRoundBack className="text-white w-10 h-10" />
            </div>
          </div>
          <div className="bg-green-600 flex gap-2 p-2 rounded-md mb-2">
            <div>
              <img src={profile} alt="" className="w-12 h-12 rounded-full" />
            </div>
            <div className=" text-white">
              <p className="text-lg">
                <Link className="no-underline text-red-300 italic">
                  John Doe(18190804)
                </Link>{" "}
                returned{" "}
                <Link className="no-underline text-red-300 italic">
                  Data Structure and algorithm
                </Link>
              </p>
              <p>{Date()}</p>
            </div>
            <div className="text-right items-center">
              <IoMdArrowRoundBack className="text-white w-10 h-10" />
            </div>
          </div>
          <div className="bg-red-600 flex gap-2 p-2 rounded-md mb-2">
            <div>
              <img src={profile} alt="" className="w-12 h-12 rounded-full" />
            </div>
            <div className=" text-white">
              <p className="text-lg">
                <Link className="no-underline text-red-200 italic">
                  John Doe(18190804)
                </Link>{" "}
                returned{" "}
                <Link className="no-underline text-red-200 italic">
                  Data Structure and algorithm
                </Link>
              </p>
              <p>{Date()}</p>
            </div>
            <div>
              <IoMdArrowRoundForward className="text-white w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
