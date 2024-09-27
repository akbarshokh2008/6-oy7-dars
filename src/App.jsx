// Components
import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
// IMg
import Moon from "./img/moon.svg";
import Cart from "./img/cart.svg";

function App() {
  return (
    <div className="bg-white h-full">
      <div className="bg-[#f0f6ff]">
        <header className="my-container flex items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center justify-center text-2xl rounded font-bold  w-14 h-14 bg-blue-500 text-white "
          >
            C
          </NavLink>
          <div className="navbar flex items-center ">
            <NavLink to="/" className=" py-1 px-3 hover:bg-slate-200 rounded">
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="py-1 px-3 hover:bg-slate-200 rounded"
            >
              Albums
            </NavLink>
          </div>
          <div className="muloq flex items-center gap-4">
            <Link to="/">
              <img src={Moon} alt="" width={30} />
            </Link>
            <Link to="/" className=" p-2 hover:bg-slate-200 rounded-[50px]">
              <img src={Cart} alt="" width={30} />
            </Link>
          </div>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
