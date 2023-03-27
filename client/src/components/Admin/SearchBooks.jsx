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
const SearchBooks = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: true,
  });

  ///
  const [books, setBooks] = useState([]);
  const [query, setKey] = useState("");
  const [queryType, setQueryType] = useState("title");

  try {
    useEffect(() => {
      dispatch({ type: "FETCH_REQUEST" });
      const fetchBook = async () => {
        const { data } = await axios.get("http://localhost:5000/book/all");
        setBooks(data);
        dispatch({ type: "FETCH_SUCCESS" });
      };
      fetchBook();
      // console.log(books);
    }, []);
  } catch (error) {
    dispatch({ type: "FETCH_FAIL" });
  }
  useEffect(() => {
    if (!userInfo) {
      navigate("login");
    }
  }, [userInfo, navigate]);
  let filteredBooks = [];
  if (queryType === "title") {
    filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  } else if (queryType === "author") {
    filteredBooks = books.filter((book) =>
      book.author.toLowerCase().includes(query.toLowerCase())
    );
  } else if (queryType === "dept") {
    filteredBooks = books.filter((book) =>
      book.department.toLowerCase().includes(query.toLowerCase())
    );
  } else {
    filteredBooks = books;
  }
  console.log(query, queryType);
  return (
    <section className="grid grid-cols-12  min-h-screen">
      <div className="col-span-1 md:col-span-2">
        <AdminSidebar />
      </div>
      <div className="col-span-11 md:col-span-10 max-h-screen overflow-auto">
        <div>
          <div className="py-10">
            <h1 className="text-center mb-4">Search Books</h1>
            <div className="rounded-md flex justify-center">
              <div className="m-0 p-0">
                <select
                  className="py-2.5 md:py-3 left-10 block w-16  text-sm md:text-lg md:mx-auto md:w-24 rounded-l-md "
                  onChange={(e) => setQueryType(e.target.value)}
                >
                  <option value={"title"}>Titile</option>
                  <option value={"author"}>Author</option>
                  <option value={"dept"}>Department</option>
                </select>
              </div>
              <div className="m-0 p-0">
                <input
                  type="text"
                  name="query"
                  id="query"
                  className="pl-2 py-2 left-10  block w-40  text-sm md:text-lg md:mx-auto md:w-96 "
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setKey(e.target.value)}
                />
              </div>
              <div>
                <BsSearch className="bg-blue-600 text-3xl text-white py-1.5 px-4 rounded-r-md md:py-2.5 hover:bg-blue-700 md:w-20" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-right m-4">
          <Link to="">
            <h1>View all books</h1>
          </Link>
        </div>
        {filteredBooks.map((book) => (
          <div className="m-2 md:m-16">
            <div className="flex gap-1 md:gap-4 outline-double">
              <img
                src={`http://localhost:5000/images/${book.image}`}
                className="h-36 md:h-40 w-28"
                alt=""
              />
              <div>
                <h1 className="text-2xl">{book.title}</h1>
                <h2 className="text-lg">Writer:{book.author}</h2>
                <p className="hidden md:block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
                  consectetur adipisicing elit.
                </p>
                <p className="hidden md:block">Last updated: {Date()}</p>
                <p className="font-bold">Stock : {book.stock}</p>
                <p className="font-bold text-red-900">
                  {" "}
                  Available: {book.available || 0}
                </p>
                <div className="text-right">
                  <Link to="/admin/book/1">
                    <button className=" bg-yellow-700 hover:bg-yellow-800  text-white mr-2 px-4 py-1 rounded-md font-bold ">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchBooks;
