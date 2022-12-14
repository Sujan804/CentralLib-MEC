import { BsSearch } from "react-icons/bs";
const Home = () => {
  return (
    <section className=" md:mx-24 m-2">
      <div className="py-10">
        <h1 className="text-center mb-4">Search Books</h1>
        <div className="rounded-md flex justify-center">
          <div className="m-0 p-0">
            <select className="py-2.5 md:py-3 left-10 block w-16  text-sm md:text-lg md:mx-auto md:w-24 rounded-l-md ">
              <option>Titile</option>
              <option>Author</option>
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
      <div>
        <h1 className="text-3xl text-center">Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 ml-6 md:mx-auto">
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
      </div>
      <div>
        <h1 className="text-center">Notice</h1>
      </div>
    </section>
  );
};
export default Home;
