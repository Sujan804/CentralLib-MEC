import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";

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

const BookView = (props) => {
  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: true,
  });
  const [books, setBooks] = useState([]);
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

  ///
  const { query, queryType } = props;
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

  // console.log(books);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 ml-6 md:mx-auto">
      {filteredBooks.map((book) => (
        <div
          key={book.image}
          className=" h-auto w-48 bg-teal-400 rounded-lg hover:shadow-xl mx-12 mb-4 shadow-xl flex-col"
        >
          <div className="">
            <img
              className="w-48 h-48 rounded-t-lg"
              src={`http://localhost:5000/images/${book.image}`}
              alt=""
            ></img>
          </div>
          <div className="italic">
            <h3 className="text-md mx-1 text-center">{book.title}</h3>
            <h4 className="text-sm mx-1 text-center">Writer:{book.author}</h4>
            <div className="grid grid-cols-2">
              <h1 className="ml-3 text-sm text-left">Stock : {book.stock}</h1>
              <h1 className="text-sm text-right mr-3">
                Available: {book.available || 0}
              </h1>
            </div>
            <Link to={`/book/${book._id}`}>
              <button className="p-2 bg-red-700 hover:bg-red-800 bold border-spacing-7 text-white min-w-full rounded-b-md ">
                Request
              </button>
            </Link>
          </div>
        </div>
      ))}
      {/* <div className=" h-auto w-48 bg-teal-400 rounded-lg hover:shadow-xl mx-12 mb-4 shadow-xl">
        <div className="">
          <img
            className="w-48 h-48 rounded-t-lg"
            src="http://localhost:5000/images/image-1673080925854-659699998"
            alt=""
          ></img>
        </div>
        <div className="italic">
          <h3 className="text-md mx-1 text-center">
            Data Structure and Algorithm
          </h3>
          <h4 className="text-sm mx-1 text-center">Writer:Harverd Shidlt</h4>
          <div className="grid grid-cols-2">
            <h1 className="ml-3 text-sm text-left">Stock : 12</h1>
            <h1 className="text-sm text-right mr-3">Available: 10</h1>
          </div>
          <button className="p-2 bg-red-700 hover:bg-red-800 bold border-spacing-7 text-white min-w-full rounded-b-md">
            Send Request for the book
          </button>
        </div>
      </div>
      <div className=" h-auto w-48 bg-teal-400 rounded-lg hover:shadow-xl mx-12 mb-4">
        <div className="">
          <img
            className="w-48 h-36 rounded-t-lg"
            src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
            alt=""
          ></img>
        </div>
        <div className="text-center">
          <h3 className="text-md">Data Structure and Algorithm</h3>
          <h4 className="text-sm">Writer:Harverd Shidlt</h4>
          <div className="text-right mr-2 mb-1">
            <button className="p-1 bg-sky-700 hover:bg-sky-800 rounded-md text-white">
              Place Hold
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BookView;
