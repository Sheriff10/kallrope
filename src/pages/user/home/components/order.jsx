import React from "react";
import { FaCar } from "react-icons/fa";
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
               <div className="row justify-content-center">
                  <div className="col-lg-6 mx-auto">
                     <div className="o-card shadow rounded my-4">
                        <div className="img-wrap">
                           <iframe
                              width="100%"
                              height="600"
                              frameborder="0"
                              scrolling="no"
                              marginheight="0"
                              marginwidth="0"
                              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Table%20Ilorin%20+(School%20stuff%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                           >
                              <a href="https://www.maps.ie/population/">
                                 Population mapping
                              </a>
                           </iframe>
                           {/* <img
                              src="location.webp"
                              alt="Map"
                              className="img-fluid w-100 rounded"
                           /> */}
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
                  <div className="col-lg-6 d-flex col-12">
                     <div className="btn-wrap w-100">
                        <div className="row">
                           <div className="col">
                              <div className="header">
                                 <h1>Avalaible Busses</h1>
                              </div>
                              <div className="body">
                                 <div className="car-container d-flex gap-3 align-items-center border-1 border-info justify-content-betn">
                                    <div className="img-wrap">
                                       <span className="fs-1" ><FaCar /></span>
                                    </div>
                                    <div className="text">
                                       <span>Bus 1</span> <br />
                                       <span>Location: School Park (P.S) </span>
                                    </div>
                                    <div className="text">
                                       <span>Bus 2</span> <br />
                                       <span>Location: Oke-odo</span>
                                    </div>
                                    <div className="text">
                                       <span>Bus 3</span> <br />
                                       <span>Location: School Gate</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
