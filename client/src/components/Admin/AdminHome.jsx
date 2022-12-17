import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./Sidebar/AdminSidebar";
const AdminHome = () => {
  const navigate = useNavigate();
  try {
    useEffect(
      () => async () => {
        axios
          .get("http://localhost:5000/admin/")
          .then((res) => {
            navigate("/admin");
          })
          .catch((err) => {
            navigate("/admin/login");
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
      []
    );
  } catch (error) {
    console.log(error);
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
