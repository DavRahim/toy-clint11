import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const photoUrl = user?.photoURL;
  const name = user?.displayName;

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar bg-base-200 md:w-11/12 m-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="alltoys">All Toys</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="mytoys"> My Toys</Link>
                </li>
              </>
            ) : (
              ""
            )}
            {user ? (
              <>
                {" "}
                <li>
                  <Link to="addtoys">Add A Toy</Link>
                </li>
              </>
            ) : (
              ""
            )}
            <li>
              <Link to="blog">Blogs</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-gray-900">
          Kids Store
        </a>
      </div>
      <div className="navbar-center hidden lg:flex text-gray-900">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to="alltoys">All Toys</Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to="mytoys"> My Toys</Link>
              </li>
            </>
          ) : (
            ""
          )}
          {user ? (
            <>
              {" "}
              <li>
                <Link to="addtoys">Add A Toy</Link>
              </li>
            </>
          ) : (
            ""
          )}

          <li>
            <Link to="blog">Blogs</Link>
          </li>
          {/* <li>
            <a>{user}</a>
          </li> */}
        </ul>
      </div>

      <div className="navbar-end">
        {user && (
          <div className="">
            <img
              title={name}
              className=" w-10 h-10 rounded-full"
              src={
                photoUrl ||
                "https://i.ibb.co/FX61WLf/studio-portrait-cook-man-with-fresh-vegetables-table.jpg"
              }
            />
          </div>
        )}
        {user ? (
          <a
            className="btn bg-base-200 border-none text-gray-900 hover:bg-slate-200"
            onClick={handleLogOut}
          >
            Log Out
          </a>
        ) : (
          <Link
            className="btn bg-base-200 border-none text-gray-900 hover:bg-slate-200"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
