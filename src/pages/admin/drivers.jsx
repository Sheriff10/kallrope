import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { logoutAdmin } from "../../functions/logout";

export default function Drivers() {
   const dum = [1, 2, 3, 4];
   const [stats, setStats] = useState([]);
   useEffect(() => {
      getStatsData();
   }, []);

   const getStatsData = async () => {
      try {
         const token = window.sessionStorage.getItem("adminAuthToken");
         const response = await axios.get(`${window.api}/admin/stats-data/driver`, {
            headers: {
               "admin-auth-token": token,
               "Content-Type": "application/json",
            },
         });
         console.log(response);
         if (response) {
            console.log(response.data);
            setStats(response.data);
         }
      } catch (error) {
         if (error) {
            console.log(error);

            if (error.response.data) {
               if (
                  error.response.data == "Invalid Token" ||
                  error.response.data == "Access Denied!"
               ) {
                  logoutAdmin();
               }
            }
         }
      }
   };

   return (
      <div className="drivers pt-5">
         <div className="container py-5">
            <div className="col-lg-4 mx-auto">
               <div className="header pb-4">
                  <h1>All Driver</h1>
                  <span>List of registered driver</span>
               </div>
               <div className="body">
                  {stats.map((i, index) => (
                     <div
                        className="user-card bg-kal-darkgray p-3 rounded mb-3"
                        key={index}
                     >
                        <div className="head d-flex justify-content-between align-items-center">
                           <span className="fs-5 fw-bold text-capitalize">{i.firstname} </span>
                           <FaRegTrashAlt />
                        </div>
                        <div className="body">
                           <div className="d-flex justify-content-between align-items-center">
                              <div className="user-data">
                                 <span>Email: {i.email} </span> <br />
                                 <span>
                                   Phone: {i.phone}
                                 </span>{" "}
                                 <br />
                                 <span>Address: {i.address}</span>
                              </div>
                              <div className="img">
                                 <img
                                    src="/driver.png"
                                    alt="User 01"
                                    className="rounded"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
