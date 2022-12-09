import React from "react";
import AdminSidebar from "./Sidebar/AdminSidebar";
const IssueRequests = () => {
  return (
    <section className="grid grid-cols-12  min-h-screen">
      <div className="col-span-1 md:col-span-2">
        <AdminSidebar />
      </div>
      <div className="col-span-11 md:col-span-10 max-h-screen overflow-auto">
        <h1>Issue Requests</h1>
      </div>
    </section>
  );
};

export default IssueRequests;
