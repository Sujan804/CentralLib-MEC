import React from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "../../assets/images/profile.jpg";
import AdminSidebar from "./Sidebar/AdminSidebar";
const AdminHome = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // try {
  //   useEffect(
  //     () => async () => {
  //       axios
  //         .get("http://localhost:5000/admin/", {
  //           headers: {
  //             Authorization: token,
  //           },
  //         })
  //         .then((res) => {
  //           console.log(res);
  //           if (res.status === 200) navigate("/admin");
  //         })
  //         .catch((err) => {
  //           console.log(err.message);
  //           const msg = err.message.split(" ");
  //           if (msg.includes("401")) {
  //             navigate("/admin/login");
  //           }
  //           console.log(msg);
  //           // navigate("/admin/login");
  //         });
  //       // if (res) {
  //       //   console.log("::;");
  //       //   console.log(res.data);
  //       //   navigate("/admin");
  //       // } else {
  //       //   console.log(res.data);
  //       //   navigate("admin/login");
  //       // }
  //     },
  //     []
  //   );
  // } catch (error) {
  //   // console.log(error);
  // }

  return (
    <section className="grid grid-cols-12  min-h-screen">
      <div className="col-span-1 md:col-span-2">
        <AdminSidebar />
      </div>
      <div className="col-span-11 md:col-span-10 max-h-screen overflow-auto">
        <h1 className="text-center text-4xl my-10">Admin</h1>
        <div className="mx-auto text-center">
          <img
            src={profilePic}
            alt=""
            className="w-28 h-28 rounded-full outline-double"
          ></img>
          <h1>Mr John Doe</h1>
          <h2 className="text-lg">1819084</h2>
          <p>Session: 2018-19</p>
          <p>Computer Science and Engineering</p>
          <button className="my-2 py-1 px-2 bg-yellow-500 hover:bg-yellow-600">
            Update Profile
          </button>
          <br />
          <hr></hr>
        </div>
      </div>
    </section>
  );
};

export default AdminHome;
