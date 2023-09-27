import React, { useState } from "react";
import { HashLoader } from "react-spinners";
import DriverLayout from "../driverLayout";

export default function VerifyTicket() {
   const [isValid, setIsValid] = useState(null);
   const [loading, setLoading] = useState(false);
   const handleButtonClick = (e) => {
      e.preventDefault()
      setLoading(true);
      const randomBoolean = Math.random() < 0.5;
      setIsValid(randomBoolean);
      setTimeout(() => setLoading(false), [1500]);
   };

   return (
      <DriverLayout>
         <div className="ass-route py-5">
            <div className="container mt-5">
               <div className="col-lg-8 mx-auto">
                  <div className="row">
                     <div className="col-lg-6">
                        <form onSubmit={handleButtonClick}>
                           <div className="form-wrap p-4 rounded">
                              <div className="header col-12 mb-3">
                                 <h3>Verify Ticket ID </h3>
                              </div>
                              <div className="form-group mb-4">
                                 <label className="fw-bold">Ticket ID</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Input Ticket ID"
                                    required
                                 />
                              </div>
                              <div className="text mb-4">
                                 {isValid !== null && (
                                    <span>
                                       Ticket ID Status:{" "}
                                       {!loading && (
                                          <span
                                             className={`badge ${
                                                isValid
                                                   ? "bg-kal-teal"
                                                   : "bg-danger"
                                             } bg-kal-teal`}
                                          >
                                             {`${
                                                isValid ? "Valid" : "Invalid"
                                             }`}
                                          </span>
                                       )}
                                       {loading && (
                                          <small className="ms-4">
                                             <HashLoader size={30} />
                                          </small>
                                       )}
                                    </span>
                                 )}
                              </div>
                              <div className="btn-wrap d-flex gap-2 mb-4">
                                 <div className="col">
                                    <button
                                       type="submit"
                                       className="btn btn-block bg-kal-gold w-100"
                                       // onClick={handleButtonClick}
                                    >
                                       {" "}
                                       Check
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </form>
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
