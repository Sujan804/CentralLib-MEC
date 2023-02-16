import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";

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

const SingleBookView = () => {
  const params = useParams();
  const { book_id } = params;
  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: true,
  });
  const [book, setBook] = useState([]);
  try {
    useEffect(() => {
      dispatch({ type: "FETCH_REQUEST" });
      const fetchBook = async () => {
        const { data } = await axios.get(
          `http://localhost:5000/book/${book_id}`
        );
        setBook(data);
        dispatch({ type: "FETCH_SUCCESS" });
      };
      fetchBook();
      // console.log(books);
    }, []);
  } catch (error) {
    dispatch({ type: "FETCH_FAIL" });
  }
  // console.log(books);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className=" mx-auto w-2/4 min-h-screen flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 bg-white shadow p-4 rounded-lg">
      <img
        src={`http://localhost:5000/images/${book.image}`}
        alt={`${book.title} cover`}
        className=" rounded-lg shadow-md w-64 h-80 md:w-80 md:h-96"
      />
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
        <p className="text-lg mb-2">{book.author}</p>
        <p className="text-lg mb-4">{`Stock: ${book.stock}`}</p>
        <p className="text-lg mb-4">{`Available: ${book.availble}`}</p>
        <p className="text-gray-700 mb-4">{book.description}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Request to issue
        </button>
      </div>
    </div>
  );
};

export default SingleBookView;
