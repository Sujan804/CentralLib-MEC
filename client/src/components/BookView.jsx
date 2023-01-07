import React from "react";

const BookView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 ml-6 md:mx-auto">
      <div className=" h-auto w-48 bg-teal-400 rounded-lg hover:shadow-xl mx-12 mb-4 shadow-xl">
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
      </div>
    </div>
  );
};

export default BookView;
