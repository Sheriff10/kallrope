import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaExclamationCircle, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logoutAdmin } from "../../functions/logout";

export default function ViewAllRoutes() {
   const [allRoutes, setAllRoutes] = useState([]);
   useEffect(() => {
      //   getEmergencies();
      getAllRoutes();
   }, []);

   const getAllRoutes = async () => {
      try {
         const token = window.sessionStorage.getItem("adminAuthToken");
         const response = await axios.get(
            `${window.api}/admin/all-assigned-route`,
            {
               headers: {
                  "admin-auth-token": token,
                  "Content-Type": "application/json",
               },
            }
         );

         if (response) {
            setAllRoutes(response.data.assignedRoutes);
            console.log(response);
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
      <div className="emergencies pt-5">
         <div className="container py-5">
            <div className="col-lg-4 mx-auto">
               <div className="header pb-4">
                  <h1>All Emergencies</h1>
                  <span>List of emergencies from driver</span>
               </div>
               <div className="body">
                  {allRoutes.map((i, index) => (
                     <div
                        className={`user-card  p-3 rounded mb-3 ${
                           i.completed == "false" ? "bg-danger" : "bg-kal-teal "
                        }`}
                     >
                        <div className="head d-flex justify-content-between align-items-center text-light">
                           <span className="fs-5 fw-bold">
                              {i.pickup} - {i.destination}
                           </span>
                           <FaRegTrashAlt />
                        </div>
                        <div className="body">
                           <div className="d-flex justify-content-between align-items-center">
                              <div className="user-data">
                                 <span className="text-light">
                                    by Driver with id <b>{i.driver_ID}</b>{" "}
                                 </span>{" "}
                                 <br />
                                 <small >
                                    Route Status:{" "}
                                    <b className="text-warning">{i.completed === "false"
                                       ? "pending"
                                       : "completed"} </b>
                                 </small>
                                 <br />
                              </div>
                              <div className="img">
                                 <FaExclamationCircle className="kal-gold fs-5" />
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
