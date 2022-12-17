import axios from "axios";

import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import AdminSidebar from "./Sidebar/AdminSidebar";
const AdminHome = () => {
  const navigate = useNavigate();
  useEffect(
    () => async () => {
      const res = await axios.get("http://localhost:5000/admin");
      console.log(res);
      if (res.data.success) {
        console.log(res.data.message);
        navigate("/admin");
      } else {
        navigate("/admin/login");
      }
    },
    // eslint-disable-next-line
    []
  );
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
