import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="border shadow-xl">
      <nav className="flex justify-between px-4 items-center">
        <Link to={"/"}>
          {" "}
          <h1 className="cursor-pointer text-[50px] font-extrabold">
            myCrypto<span className="text-blue-700">Tracker</span>
          </h1>
        </Link>
        <navItem className=" flex gap-4 font-semibold text-[25px]">
          <Link to={"/top10"}>
            {" "}
            <p className="cursor-pointer  hover:text-blue-600">Top10</p>
          </Link>
          <Link to={"/trending"}>
            {" "}
            <p className="cursor-pointer  hover:text-blue-600">Trending</p>
          </Link>
          <Link to={"/watchlist"}>
            {" "}
            <p className="cursor-pointer hover:text-blue-600">watchlist</p>
          </Link>
        </navItem>
      </nav>
    </div>
  );
}

export default Navbar;
