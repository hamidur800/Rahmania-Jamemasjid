import React, { useContext, useState } from "react";
import { IoLogInOutline } from "react-icons/io5";
import { Link } from "react-router";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaRegUserCircle, FaUsers } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdConnectWithoutContact } from "react-icons/md";
import { NavLink } from "react-router";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const NavItem = ({ to, icon: Icon, label }) => (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `relative text-lg px-2 py-1 transition-all duration-300
         after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:rounded-xl
         after:bg-blue-600 after:transition-all after:duration-300
         ${isActive ? "after:w-full" : "after:w-0 "}`
        }
      >
        <Icon className="inline mr-1" />
        {label}
      </NavLink>
    </li>
  );

  const Links = (
    <>
      <NavItem to="MembersList" icon={FaUsers} label="Members" />
      <NavItem to="ManthlyPay" icon={GiReceiveMoney} label="Pay Per Month" />
      <NavItem
        to="ContactUs"
        icon={MdConnectWithoutContact}
        label="Contact Us"
      />
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire(
          "Logged Out!",
          "You have successfully logged out.",
          "success"
        );
      })
      .catch((err) => {
        Swal.fire("Error!", err.message, "error");
      });
  };

  return (
    <div>
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <Link to="/" className="text-xl italic font-bold">
            Rahmania Jamemasjid
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 hover:border-none  border-2 border-blue-600 rounded-full transform hover:scale-110 transition-all duration-300">
                  <img
                    alt={"user profile"}
                    src={user.photoURL || <FaRegUserCircle />}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <Link onClick={handleLogout}>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="Login"
              className="btn cursor-pointer bg-gradient-to-b from-indigo-600 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-8 py-3 rounded border-[1px] border-slate-500 text-white font-medium group"
            >
              <div className="relative overflow-hidden">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  Hover Me
                </p>
                <p className="absolute px-1 top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  <span className="flex items-center justify-center ">
                    <span className="">
                      <IoLogInOutline />{" "}
                    </span>
                    <span className="">Log In</span>
                  </span>
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
