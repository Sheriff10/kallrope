import axios from "axios";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import checkKyc from "../../../functions/check-kyc";
import { logoutDriver } from "../../../functions/logout";
import Message from "../../components/message";
import DriverLayout from "../driverLayout";

export default function DriverDashboard() {
   const [kyc, setKyc] = useState(false);

   const isKYCed = async () => {
      const isVerified = await checkKyc();

      if (isVerified == "verified") setKyc("verified");
      else setKyc(false);
   };

   useState(async () => {
      await isKYCed();
   }, []);
   const dum = [1, 2, 3, 4];

   return (
      <DriverLayout>
         <div className="book pt-5">
            <div className="container mt-5 ">
               <div className="row min-h-80vh align-items-center">
                  <div className="col-lg-5 p-2 mx-auto">
                        <div className="form-wrap  p-4 rounded bg-white">
                           <div className="header mb-4">
                              <h3>Welcome Driver 001</h3>
                              <div
                                 className={`kyc-wrap ${
                                    kyc === "verified" ? "d-none" : "d-block"
                                 } `}
                              >
                                 <div className="alert alert-danger">
                                    <span>
                                       You're not verified. please ensure you
                                       perform you KYC.{" "}
                                       <Link to={"/apply/driver"}>
                                          Verify Now
                                       </Link>
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <div className="assign-routes">
                              <div className="head py-4">
                                 <span className="fw-bold">Assigned Route</span>{" "}
                                 <br />
                                 <span>Schedule for the day</span>
                              </div>
                              <div className="body">
                                 {dum.map((i, index) => (
                                    <Link
                                       to={"/driver/assigned-route"}
                                       key={index}
                                    >
                                       <div className="route-box d-flex mb-4 bg-kal-lightgrey justify-content-between align-items-center rounded p-3">
                                          <div className="r-text">
                                             <span>Route Xsd34S</span>
                                             <br />
                                             <span>tanke - p.s</span>
                                          </div>
                                          <div className="r-img">
                                             <img
                                                src="/beep.png"
                                                alt="car"
                                                width={70}
                                             />
                                          </div>
                                          <div className="r-icon">
                                             <span>
                                                {" "}
                                                <FaArrowRight />
                                             </span>
                                          </div>
                                       </div>
                                    </Link>
                                 ))}
                              </div>
                           </div>
                        </div>
                  </div>
                  <div className="col-lg-7">
                     <Message title={"Emergency"} type={"emergency"} />
                  </div>
               </div>
            </div>
         </div>
      </DriverLayout>
   );
}
