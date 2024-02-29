import React from 'react';
import { FaHome, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/logo/apg-logo 2.png";

const SideBar = () => {
    const location = useLocation();

  const navLinks = [
    // navigation link for the dashboard menu
    { to: "/dashboard", icon: <FaHome />, text: "Dashboard" },
    { to: "/clients", icon: <FaUsers />, text: "Clients" },
    { to: "/signout", icon: <FaSignOutAlt />, text: "Sign Out" },
  ];
    return (
        <div>
            <div>
      <div className="z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform">
        <div>
          <div className="pb-10">
            <img src={logo} alt="" />
          </div>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to} className="mb-2 ">
                <Link
                  to={link.to}
                  className={`${
                    location.pathname === link.to
                      ? "text-white bg-[#0CAE93] hover:bg-[#0CAE93] active:bg-[#0CAE93]"
                      : "text-blue-500 hover:text-blue-700 hover:bg-gray-200"
                  } flex items-center justify-center w-full p-2 rounded-md`}
                >
                  {link.icon}
                  <span className="ml-2">{link.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
        </div>
    );
};

export default SideBar;