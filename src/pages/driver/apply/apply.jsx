import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import DriverLayout from "../driverLayout";

const listFunc = (text, link) => {
   return { text, link };
};
const listArr = [
   listFunc("Driver photo", "upload?id=photo"),
   listFunc("Driver's License", "upload?id=license"),
   listFunc("Vehicle Insurance Policy", "upload?id=insurance"),
   listFunc("Vehicle Inspection report", "upload?id=inspection"),
];

export default function Apply() {
   return (
      <DriverLayout>
         <div className="apply py-5 min-h-70vh">
            <div className="container mt-5">
               <div className="col-lg-4 col-12 mx-auto">
                  <div className="header">
                     <h3>Complete your KYC</h3>
                     <div className="wrap">
                        <span className="fw-bold">Required steps</span> <br />
                        <span>
                           Here's what you need to do to setup an account
                        </span>
                     </div>
                  </div>
                  <div className="body">
                     {listArr.map((list, index) => (
                        <Link to={list.link}>
                           <div
                              className="d-flex py-3 my-2 bg-kal-lightgrey px-2 align-items-center rounded justify-content-between border-bottom"
                              key={index}
                           >
                              <div className="text">
                                 <span>{list.text}</span>
                              </div>
                              <span>
                                 <FaArrowRight />
                              </span>
                           </div>
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </DriverLayout>
   );
}
