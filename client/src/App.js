import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp";
function App() {
  return(
    <div>
      <Navbar/>
      <Home/>
      <Login/>
      <SignUp/>
      <Footer/>
    </div>
  )
}

export default App;
