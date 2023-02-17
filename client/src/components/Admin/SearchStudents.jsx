import axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
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
const SearchStudents = () => {
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
  const [students, setStudent] = useState([]);
  try {
    useEffect(() => {
      dispatch({ type: "FETCH_REQUEST" });
      const fetchStudents = async () => {
        const { data } = await axios.get("http://localhost:5000/user/all");
        setStudent(data);
        dispatch({ type: "FETCH_SUCCESS" });
      };
      fetchStudents();
      // console.log(books);
    }, []);
  } catch (error) {
    dispatch({ type: "FETCH_FAIL" });
  }
  // console.log(books);
  const deptMap = {
    CSE: "Computer Science and Engineering",
    EEE: "Electrical and Electronics Engineering",
    CIVIL: "Civil Engineering",
  };
  return (
    <section className="grid grid-cols-12  min-h-screen">
      <div className="col-span-1 md:col-span-2">
        <AdminSidebar />
      </div>
      <div className="col-span-11 md:col-span-10 max-h-screen overflow-auto">
        <div>
          <div className="py-10">
            <h1 className="text-center mb-4">Search Students</h1>
            <div className="rounded-md flex justify-center">
              <div className="m-0 p-0">
                <select className="py-2.5 md:py-3 left-10 block w-16  text-sm md:text-lg md:mx-auto md:w-24 rounded-l-md ">
                  <option>Name</option>
                  <option>Student Id</option>
                  <option>Registration</option>
                  <option>Department</option>
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
          {students.map(
            (student) =>
              !student.isAdmin && (
                <div
                  className="flex gap-3 md:gap-8 m-4 md:m-24 outline-double p-2"
                  key={student.image}
                >
                  <div className="items-center flex">
                    <img
                      src={`http://localhost:5000/images/${student.image}`}
                      alt=""
                      className="w-24 h-24 rounded-full outline-double"
                    />
                  </div>
                  <div>
                    <p className="text-xl font-bold">
                      {student.name}({student.collegeId})
                    </p>
                    <p>{deptMap[student.department]}</p>
                    <p>Batch: {student.batchNo}</p>
                    <p>Reg No: {student.registration}</p>
                  </div>
                  <div className="items-end flex">
                    <Link to={`/admin/student/${student._id}`}>
                      <button className="bg-blue-800 hover:bg-blue-900 text-white p-2 items-center flex">
                        View Student
                      </button>
                    </Link>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchStudents;
