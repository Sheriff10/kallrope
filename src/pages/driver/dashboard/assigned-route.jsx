import React from "react";
import DriverLayout from "../driverLayout";

export default function AssignedRoute() {
   return (
      <DriverLayout>
         <div className="ass-route py-5">
            <div className="container mt-5">
               <div className="col-lg-8 mx-auto">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="form-wrap p-4 rounded">
                           <div className="header col-12 mb-3">
                              <h3>Assigned Route</h3>
                           </div>
                           <div className="form-group mb-4">
                              <label className="fw-bold">Pickup</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 value={"School Park (P.S)"}
                                 disabled
                              />
                           </div>
                           <div className="form-group mb-4">
                              <label className="fw-bold">
                                 Final Destination
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 value={"terminus tipper garage, tanke"}
                                 disabled
                              />
                           </div>
                           <div className="text mb-4">
                              <span>Total Passenger: 6</span> <br />
                              <span>Take off: 16:00</span>
                           </div>
                           <div className="btn-wrap d-flex gap-2 mb-4">
                              <div className="col">
                                 <button className="btn btn-block btn-outline-danger w-100">
                                    {" "}
                                    Cancel
                                 </button>
                              </div>
                              <div className="col">
                                 <button className="btn btn-block bg-kal-gold w-100">
                                    {" "}
                                    Completed
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <img
                           src="/location.webp"
                           alt="map"
                           className="img-fluid"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </DriverLayout>
   );
}
