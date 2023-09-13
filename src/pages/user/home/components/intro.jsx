import React from "react";

export default function Intro() {
   return (
      <div className="intro text-white">
         <div className="bg-wrap">
            <div className="container">
               <div className="col-lg-6 col-12 min-h-80vh d-flex align-items-center">
                  <div className="wrap">
                     <h1 className="fw-bold">Welcome!</h1> <br />
                     <span className="">
                        Kallrope Welcome to kallrope, your go-to transportation
                        service for the university of illorin com
                     </span>
                     <div className="btn-wrap mt-3">
                        <a href="" className="btn bg-kal-gold fs-2 px-5 fw-bold rounded-pill">
                           {" "}
                           Get Started
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
