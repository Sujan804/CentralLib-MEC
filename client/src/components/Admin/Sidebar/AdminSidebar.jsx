import React from "react";
import { AiFillDashboard, AiOutlineFileSearch } from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { GoRequestChanges } from "react-icons/go";
import { ImBooks } from "react-icons/im";
import { IoSettingsSharp } from "react-icons/io5";
import { MdPersonAdd } from "react-icons/md";
import { RiUserSearchFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const AdminSidebar = () => {
  return (
    <div className="bg-blue-900 min-h-screen max-h-screen text-white  top-0 -z-10">
      <div className="flex items-center text-red-600 py-2 px-1 align-center text-2xl mb-2">
        <AiFillDashboard />
        <p className="ml-1 hidden md:block">Dashboard</p>
      </div>
      <u>
        <Link to="/admin/issue-requests" className="underline ">
          <div className="text-black text-lg side-nav p-1 flex items-center md:p-4 no-underline text-center">
            <GoRequestChanges className=" p-1 text-center" />

            <p className="hidden md:block ml-2 uppercase">Issue Request</p>
          </div>
        </Link>
        <Link to="/admin/add-students" className="no-underline">
          <div className="mt-4 text-black text-lg side-nav p-1 flex items-center md:p-4 no-underline text-center">
            <MdPersonAdd className=" p-1 text-center" />
            <p className="hidden md:block ml-2 uppercase">Add Students</p>
          </div>
        </Link>
        <Link to="/admin/add-books" className="mt-4">
          <div className="mt-6 text-black text-lg side-nav p-1 flex items-center md:p-4 no-underline text-center">
            <ImBooks className=" p-1 text-center" />
            <p className="hidden md:block ml-2 uppercase">Add Books</p>
          </div>
        </Link>
        <Link to="/admin/search-students" className="no-underline">
          <div className="mt-4 text-black text-lg side-nav p-1 flex items-center md:p-4 no-underline text-center">
            <RiUserSearchFill className=" p-1 text-center" />
            <p className="hidden md:block ml-2 uppercase">Search Students</p>
          </div>
        </Link>
        <Link to="/admin/search-books" className="mt-4">
          <div className="mt-6 text-black text-lg side-nav p-1 flex items-center md:p-4 no-underline text-center">
            <AiOutlineFileSearch className=" p-1 text-center" />
            <p className="hidden md:block ml-2 uppercase">Search Books</p>
          </div>
        </Link>

        <Link to="/admin/activity" className="mt-4">
          <div className="mt-6 text-black text-lg side-nav p-1 flex items-center md:p-4 no-underline text-center">
            <FiActivity className=" p-1 text-center" />
            <p className="hidden md:block ml-2 uppercase">Activity</p>
          </div>
        </Link>
        <Link to="/admin/settings" className="mt-4">
          <div className="mt-6 text-black text-lg side-nav p-1 flex items-center md:p-4 no-underline text-center">
            <IoSettingsSharp className=" p-1 text-center" />
            <p className="hidden md:block ml-2 uppercase">Settings</p>
          </div>
        </Link>
      </u>
    </div>
  );
};

export default AdminSidebar;
