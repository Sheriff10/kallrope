import React from "react";
import { Link } from "react-router-dom";

export default function Order() {
   const dum = [1, 2, 3];

   const token = window.sessionStorage.getItem("userAuthToken");
   console.log(token);
   return (
      <div className="order">
         <div className="container">
            <div className="header py-5 text-center">
               <h1>Order a Ride!</h1>
            </div>
            <div className="body">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="o-card shadow rounded my-4">
                        <div className="img-wrap">
                           <img
                              src="location.webp"
                              alt="Map"
                              className="img-fluid w-100 rounded"
                           />
                        </div>
                        <div className="form p-3">
                           <div className="header p-4  text-center">
                              <span className="fw-bold fs-4">
                                 Request a ride now
                              </span>
                           </div>
                           <div className="form-group">
                              <input
                                 type="text"
                                 className="form-control bg-kal-lightgrey bg-kal-darkgrey"
                                 placeholder="Enter pickup location"
                              />
                              <input
                                 type="text"
                                 className="form-control bg-kal-lightgrey bg-kal-darkgrey mt-4"
                                 placeholder="Enter destination"
                              />
                           </div>
                           <div className="btn-wrap d-flex gap-3 justify-content-center py-3">
                              <Link
                                 to={
                                    token == null
                                       ? "/auth/user/login"
                                       : "/booking"
                                 }
                                 className="btn  bg-kal-gold px-4 fs-5 rounded-pill  "
                              >
                                 Request now
                              </Link>
                              <Link
                                 href=""
                                 className="btn btn-outline-primary px-4 fs-5 rounded-pill "
                              >
                                 Schedule for later
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center col-12">
                     <div className="btn-wrap w-100">
                        <div className="row">
                           {dum.map((i) => (
                              <div
                                 className="col-lg-6 py-3 bg-dark text-center justify-content-center"
                                 key={i}
                              >
                                 <div className="bg-kal-gold py-4 p-2 rounded">
                                    <span className="fs-4 fw-bold">Buses</span>{" "}
                                    <br />
                                    <span>Lorem ipsum dolor sit amet.</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
