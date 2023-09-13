import axios from "axios";
import React, { useEffect, useState } from "react";
import {
   FaArrowCircleRight,
   FaArrowRight,
   FaMinus,
   FaPlus,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../../functions/logout";
import AdminLayout from "./adminLayout";

export default function Dashboard() {
   const [stats, setStats] = useState({ total_drivers: "..." });
   useEffect(() => {
      getStats();
   }, []);

   const navi = useNavigate();

   const getStats = async () => {
      try {
         const token = window.sessionStorage.getItem("adminAuthToken");
         const response = await axios.get(`${window.api}/admin/stats`, {
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
      <AdminLayout>
         <div className="dashboard pt-5">
            <div className="container py-5">
               <div className="header py-3">
                  <h1>Dashboard</h1>
               </div>
               <div className="body">
                  <div className="row">
                     <div className="col-lg-4 mb-4">
                        <div className="btn-wrap shadow rounded my-5 p-3">
                           <span className="fw-bold">Admin</span>
                           <button className="btn my-3 bg-kal-gold p-3 w-100">
                              Add busses <FaPlus />{" "}
                           </button>
                           <button className="btn my-3 bg-kal-gold p-3 w-100">
                              Remove busses <FaMinus />{" "}
                           </button>
                        </div>
                        <div className="btn-wrap">
                           <button className="btn bg-kal-gold p-3 w-100">
                              Subscription Plans
                           </button>
                           <button
                              className="btn bg-kal-gold mt-4 p-3 w-100"
                              onClick={() => navi("/admin/assign-route")}
                           >
                              Assigned Driver Routes
                           </button>
                        </div>
                     </div>
                     <div className="col-lg-8 d-flex align-items-center">
                        <div className="row w-100">
                           <div className="col-6">
                              <div className="wrap bg-kal-lightgrey p-3 rounded">
                                 <div className="header">
                                    <h3>Emergency</h3>
                                    <span>View Emergency</span>
                                 </div>
                                 <div className="body d-flex justify-content-end">
                                    <Link to={"/admin/emergencies"}>
                                       <span className="kal-gold fs-3">
                                          <FaArrowCircleRight />{" "}
                                       </span>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                           <div className="col-6 ">
                              <div className="wrap bg-kal-lightgrey p-3 rounded">
                                 <div className="header">
                                    <h3>Panic Alert</h3>
                                    <span>View Panic Alerts</span>
                                 </div>
                                 <div className="body d-flex justify-content-end">
                                    <Link to={"/admin/panic"}>
                                       <span className="kal-gold fs-3">
                                          <FaArrowCircleRight />{" "}
                                       </span>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="row">
                     <div className="col-lg-6">
                        <div className="box bg-dark text-light p-3 rounded my-5">
                           <div className="text-wrap d-flex align-items-center fw-bold justify-content-between">
                              <span>TOTAL USERS</span>
                              <span className="fs-2 fw-bold kal-gold">12</span>
                           </div>
                           <div className="btn-wrap">
                              <button className="btn bg-kal-gold rounded py-1 px-auto d-flex gap-3 align-items-center">
                                 <Link to={"/admin/user-list"}>
                                    <span>View all</span> <FaArrowRight />
                                 </Link>
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="box bg-dark text-light p-3 rounded my-5">
                           <div className="text-wrap d-flex align-items-center fw-bold justify-content-between">
                              <span>TOTAL DRIVERS</span>
                              <span className="fs-2 fw-bold kal-gold">
                                 {stats.total_drivers}
                              </span>
                           </div>
                           <div className="btn-wrap">
                              <button className="btn bg-kal-gold rounded py-1 px-auto d-flex gap-3 align-items-center">
                                 <Link to={"/admin/driver-list"}>
                                    <span>View all</span> <FaArrowRight />{" "}
                                 </Link>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}
