import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./Sidebar/AdminSidebar";
const AdminHome = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  try {
    useEffect(
      () => async () => {
        axios
          .get("http://localhost:5000/admin/", {
            headers: {
              Authorization: token,
            },
          })
          .then((res) => {
            console.log(res);
            if (res.status === 200) navigate("/admin");
          })
          .catch((err) => {
            console.log(err.message);
            const msg = err.message.split(" ");
            if (msg.includes("401")) {
              navigate("/admin/login");
            }
            console.log(msg);
            // navigate("/admin/login");
          });
        // if (res) {
        //   console.log("::;");
        //   console.log(res.data);
        //   navigate("/admin");
        // } else {
        //   console.log(res.data);
        //   navigate("admin/login");
        // }
      },
      [token]
    );
  } catch (error) {
    // console.log(error);
  }

  return (
    <section className="grid grid-cols-12  min-h-screen">
      <div className="col-span-1 md:col-span-2">
        <AdminSidebar />
      </div>
      <div className="col-span-11 md:col-span-10 max-h-screen overflow-auto">
        <h1>Home</h1>
      </div>
    </section>
  );
};

export default AdminHome;
