import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
const Settings = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (!userInfo) {
      navigate("login");
    }
  }, [userInfo, navigate]);

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: true,
  });
  const [admins, setAdmin] = useState([]);
  try {
    useEffect(() => {
      dispatch({ type: "FETCH_REQUEST" });
      const fetchAdmins = async () => {
        const { data } = await axios.get("http://localhost:5000/user/all");
        setAdmin(data);
        dispatch({ type: "FETCH_SUCCESS" });
      };
      fetchAdmins();
      // console.log(books);
    }, []);
  } catch (error) {
    dispatch({ type: "FETCH_FAIL" });
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("image", image);
    formData.append("isAdmin", true);
    console.log(formData);
    try {
      const result = await axios.post(
        "http://localhost:5000/user/add-user",
        formData,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      setName("");

      setEmail("");
      setPassword("");
      setPhone("");
      setImage(null);

      console.log(result.data);
      toast.success("Student Added");
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  return (
    <section className="grid grid-cols-12  min-h-screen">
      <div className="col-span-1 md:col-span-2">
        <AdminSidebar />
      </div>
      <div className="col-span-11 md:col-span-10 max-h-screen overflow-auto">
        <div className="mr-6 mt-8 text-center">
          <h1>Add new Admin</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="uppercase font-bold block">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                name="name"
                className="m-2 w-64 h-6 md:w-96"
                required
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="batch" className="uppercase font-bold block">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="johndoe@gmail.com"
                className="m-2 w-64 h-6 md:w-96"
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="batch" className="uppercase font-bold block">
                Phone No(Optional)
              </label>
              <input
                type="phone"
                name="phone"
                placeholder="019********"
                className="m-2 w-64 h-6 md:w-96"
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="batch" className="uppercase font-bold block">
                Create A Password
              </label>
              <input
                type="pass"
                name="password"
                placeholder="****"
                className="m-2 w-64 h-6 md:w-96"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="uppercase font-bold block">
                Upload a photo
              </label>
              <input
                type="file"
                className=" w-94 h-9 md:w-96 text-lg"
                onChange={(e) => setImage(e.target.files[0])}
              ></input>
            </div>
            <input
              type="submit"
              value="Add Admin"
              className="w-64 md:w-96 bg-blue-900 text-white rounded p-2 text-center hover:bg-blue-600"
            />
          </form>
        </div>
        <div className="mr-6 mt-8 text-center">
          <h1>Admin(s)</h1>
          <div>
            {admins.map(
              (admin) =>
                admin.isAdmin && (
                  <div
                    className="flex gap-3 md:gap-8 m-4 md:m-24 outline-double p-2"
                    key={admin.image}
                  >
                    <div className="items-center flex">
                      <img
                        src={`http://localhost:5000/images/${admin.image}`}
                        alt=""
                        className="w-24 h-24 rounded-full outline-double"
                      />
                    </div>
                    <div>
                      <p className="text-xl font-bold">{admin.name}</p>
                      <p>{admin.email}</p>
                    </div>
                    <div className="items-end flex">
                      <button className="border-0">
                        <button className="bg-red-800 hover:bg-red-900 text-white p-2 items-center flex">
                          Delete Admin
                        </button>
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
