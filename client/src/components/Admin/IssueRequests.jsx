import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "../../assets/images/profile.jpg";
import { Store } from "../../Store";
import AdminSidebar from "./Sidebar/AdminSidebar";
const IssueRequests = () => {
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
      <div className="col-span-11 md:col-span-10 max-h-screen overflow-auto">
        <div>
          <h1 className="text-center pt-8">Issue Requests </h1>
        </div>

        <div>
          <div className="flex gap-3 md:gap-5 m-4 md:m-24 outline-double p-2">
            <div>
              <img
                src={profilePic}
                alt=""
                className="w-24 h-24 rounded-full outline-double"
              />
            </div>
            <div>
              <h2 className="text-lg">
                <a href="/admin">John Doe(18190804)</a> sent a request to issue
                Data <a href="/admin"> Structure and Algorithm...</a>
              </h2>
              <p>Request Time: {Date()}</p>\
              <div className="text-right">
                <button className="bg-green-800 hover:bg-green-900 text-white mr-2 px-4 py-2 rounded-md font-bold">
                  Accept
                </button>
                <button className="bg-red-800 hover:bg-red-900 text-white mr-2 px-4 py-2 rounded-md font-bold">
                  Reject
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 m-4 md:m-24 outline-double p-2">
            <div>
              <img
                src={profilePic}
                alt=""
                className="w-24 h-24 rounded-full outline-double"
              />
            </div>
            <div>
              <h2 className="text-lg">
                <a href="/admin">John Doe(18190804)</a> sent a request to issue
                Data <a href="/admin"> Structure and Algorithm...</a>
              </h2>
              <p>Request Time: {Date()}</p>\
              <div className="text-right">
                <button className="bg-green-800 hover:bg-green-900 text-white mr-2 px-4 py-2 rounded-md font-bold">
                  Accept
                </button>
                <button className="bg-red-800 hover:bg-red-900 text-white mr-2 px-4 py-2 rounded-md font-bold">
                  Reject
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 m-4 md:m-24 outline-double p-2">
            <div>
              <img
                src={profilePic}
                alt=""
                className="w-24 h-24 rounded-full outline-double"
              />
            </div>
            <div>
              <h2 className="text-lg">
                <a href="/admin">John Doe(18190804)</a> sent a request to issue
                Data <a href="/admin"> Structure and Algorithm...</a>
              </h2>
              <p>Request Time: {Date()}</p>\
              <div className="text-right">
                <button className="bg-green-800 hover:bg-green-900 text-white mr-2 px-4 py-2 rounded-md font-bold">
                  Accept
                </button>
                <button className="bg-red-800 hover:bg-red-900 text-white mr-2 px-4 py-2 rounded-md font-bold">
                  Reject
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 m-4 md:m-24 outline-double p-2">
            <div>
              <img
                src={profilePic}
                alt=""
                className="w-24 h-24 rounded-full outline-double"
              />
            </div>
            <div>
              <h2 className="text-lg">
                <a href="/admin">John Doe(18190804)</a> sent a request to issue
                Data <a href="/admin"> Structure and Algorithm...</a>
              </h2>
              <p>Request Time: {Date()}</p>\
              <div className="text-right">
                <button className="bg-green-800 hover:bg-green-900 text-white mr-2 px-4 py-2 rounded-md font-bold">
                  Accept
                </button>
                <button className="bg-red-800 hover:bg-red-900 text-white mr-2 px-4 py-2 rounded-md font-bold">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IssueRequests;
