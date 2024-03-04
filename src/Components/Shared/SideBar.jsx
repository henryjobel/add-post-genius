import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo/apg-logo 2.png";
import { RxDashboard } from "react-icons/rx";
import { FaUserFriends } from "react-icons/fa";
import { CiViewTable } from "react-icons/ci";
import { HiOutlineLogout } from "react-icons/hi";




const SideBar = () => {


  return (
    <div>
      <div>
        <div className='min-h-screen bg-white w-[250px]'>
          <div>
            <div className='px-6 py-3'>
              <a href="https://add-post-genius-203b0.web.app/"><img src={logo} alt="" /></a>
            </div>
            <div className="divider"></div>
          </div>
          <div>
            <ul className='menu'>
              <li>

                <NavLink
                  style={({ isActive, isPending, isTransitioning }) => ({
                    fontWeight: isActive ? "bold" : "normal",
                    color: isPending ? "green" : (isActive ? "white" : "#003956"),
                    viewTransitionName: isTransitioning ? "slide" : "auto",
                    backgroundColor: isActive ? "#0CAE93" : "transparent",
                    padding: "16px 24px",
                    width: "226px",
                    borderRadius: "12px"
                  })}
                  to="/dashboard"
                >
                  <RxDashboard className='text-2xl'></RxDashboard> Dashboard
                </NavLink>
              </li>
              <li><NavLink style={({ isActive, isPending, isTransitioning }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isPending ? "green" : (isActive ? "white" : "#003956"),
                viewTransitionName: isTransitioning ? "slide" : "auto",
                backgroundColor: isActive ? "#0CAE93" : "transparent",
                padding: "16px 24px",
                width: "226px",
                borderRadius: "12px"
              })} to="/clients"> <FaUserFriends className='text-2xl'></FaUserFriends> Clinet</NavLink></li>
              <li><NavLink style={({ isActive, isPending, isTransitioning }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isPending ? "green" : (isActive ? "white" : "#003956"),
                viewTransitionName: isTransitioning ? "slide" : "auto",
                backgroundColor: isActive ? "#0CAE93" : "transparent",
                padding: "16px 24px",
                width: "226px",
                borderRadius: "12px"
              })} to="/"> <CiViewTable className='text-2xl'></CiViewTable> Tables</NavLink></li>
              <li><NavLink style={({ isActive, isPending, isTransitioning }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isPending ? "green" : (isActive ? "white" : "#003956"),
                viewTransitionName: isTransitioning ? "slide" : "auto",
                backgroundColor: isActive ? "#0CAE93" : "transparent",
                padding: "16px 24px",
                width: "226px",
                borderRadius: "12px"
              })} to="/"> <HiOutlineLogout className='text-2xl'></HiOutlineLogout> Sing Out</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;