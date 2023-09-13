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
import { logoutDriver } from "../../functions/logout";
export default function DriverHeader() {
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

   const headerClasses = ["header", "zi-5", "position-fixed", "w-100", "py-2"];
   if (scrolling) {
      headerClasses.push("bg-kal-lightgrey");
   }

   const noAuthFunc = (title, icon, link) => {
      return { title, icon, link };
   };
   const noAuthArr = [
      noAuthFunc("Dashboard", <FaHome />, "/driver/dashboard"),
      noAuthFunc(
         "Emergency Message",
         <FaCarAlt />,
         "/driver/dashboard#emergency-message"
      ),
      noAuthFunc("KYC Verification", <FaTrafficLight />, "/apply/driver"),
      noAuthFunc("Home Page", <FaSignInAlt />, "/"),
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
               <div className="menu px-2">
                  <div className="menu-box mx-3">
                     <div
                        className={`bg-kal-lightgrey zi-5 rounded position-absolute w-100 top-100  ${
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
                        <button
                           className="btn px-3 bg-kal-gold rounded-pill"
                           onClick={() => logoutDriver()}
                        >
                           Logout
                        </button>
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
