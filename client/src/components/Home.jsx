import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import BookView from "./BookView";
const Home = () => {
  const [key, setKey] = useState("");
  const [keyType, setKeyType] = useState("title");

  console.log(key, keyType);
  return (
    <section className=" md:mx-24 m-2">
      <div className="py-10">
        <h1 className="text-center mb-4">Search Books</h1>
        <div className="rounded-md flex justify-center">
          <div className="m-0 p-0">
            <select
              className="py-2.5 md:py-3 left-10 block w-16  text-sm md:text-lg md:mx-auto md:w-24 rounded-l-md "
              onChange={(e) => setKeyType(e.target.value)}
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
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
          </div>
          <div>
            <BsSearch className="bg-blue-600 text-3xl text-white py-1.5 px-4 rounded-r-md md:py-2.5 hover:bg-blue-700 md:w-20" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-center">Books</h1>
        <BookView query={key} queryType={keyType} />
      </div>
      <div>
        <h1 className="text-center">Notice</h1>
      </div>
    </section>
  );
};
export default Home;
