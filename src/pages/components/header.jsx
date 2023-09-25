import React, { useEffect, useState } from "react";
import {
   FaBars,
   FaCarAlt,
   FaHome,
   FaSignInAlt,
   FaTrafficLight,
   FaUser,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "../../functions/logout";
export default function Header() {
   const [scrolling, setScrolling] = useState(false);
   const [toggleMenu, setToggleMenu] = useState(true);

   useEffect(() => {
      function handleScroll() {
         if (window.scrollY > 0) {
            setScrolling(true);
         } else {
            setScrolling(false);
         }
      }

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   const headerClasses = ["header", "position-fixed", "w-100", "py-2"];
   if (scrolling) {
      headerClasses.push("bg-kal-lightgrey");
   }

   const token = window.sessionStorage.getItem("userAuthToken");

   const noAuthFunc = (title, icon, link) => {
      return { title, icon, link };
   };
   const noAuthArr = [
      noAuthFunc("Home", <FaHome />, "/"),
      noAuthFunc("Book a ride", <FaCarAlt />, "/auth/user/signup"),
      noAuthFunc(
         "Become a driver",
         <FaTrafficLight />,
         "/apply/driver/information"
      ),
      noAuthFunc("Login", <FaSignInAlt />, "/auth/user/login"),
   ];

   return (
      <div className={headerClasses.join(" ")}>
         <div className="container">
            <div className="d-flex justify-content-between align-items-center ">
               <div className="logo-con">
                  <Link to={"/"}>
                     <img src="/logo.png" alt="Kallrope" width={100} />
                  </Link>
               </div>
               <div className="menu px-2 d-none">
                  <div className="links align-items-center d-flex gap-4">
                     <a href="#">Admin</a>
                     <a href="#">Support</a>
                     <a href="#">Notifications</a>
                     <a href="#">
                        <i className="bg-white d-flex justify-content-between align-items-center rounded-circle p-2">
                           <FaUser />
                        </i>
                     </a>
                     <span className="fs-5 kal-teal">
                        <FaBars />
                     </span>
                  </div>
               </div>
               <div className="menu px-2">
                  <div className="menu-box mx-3">
                     <div
                        className={`bg-kal-lightgrey rounded position-absolute w-100 top-100  ${
                           toggleMenu && "d-none"
                        }`}
                     >
                        <ul className="m-0 p-0">
                           {noAuthArr.map((i, index) => (
                              <li className=" w-100 mb-2 d-flex" key={index}>
                                 {" "}
                                 <NavLink to={i.link} className="w-100 p-2">
                                    {i.icon} {i.title}{" "}
                                 </NavLink>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className="links align-items-center d-flex gap-4">
                     <a href="#">Support</a>
                     <a href="#">
                        <Link to={token == null ? "/auth/user/signup" : ""}>
                           <button
                              className="btn px-3 bg-kal-gold rounded-pill"
                              // onClick={() => {token == null ? "" : logoutUser}}
                           >
                              {token == null ? "Signup" : "Logout"}
                           </button>
                        </Link>
                     </a>
                     <span
                        className="fs-5 kal-teal"
                        onClick={() => setToggleMenu(!toggleMenu)}
                     >
                        <FaBars />
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
