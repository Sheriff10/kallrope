import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaExclamationCircle, FaRegTrashAlt } from "react-icons/fa";
import { logoutAdmin } from "../../functions/logout";
import AdminLayout from "./adminLayout";

export default function Panic() {
   const [panics, setPanics] = useState([]);
   useEffect(() => {
      getPanics();
   }, []);

   const getPanics = async () => {
      try {
         const token = window.sessionStorage.getItem("adminAuthToken");
         const response = await axios.get(`${window.api}/admin/get-panics`, {
            headers: {
               "admin-auth-token": token,
               "Content-Type": "application/json",
            },
         });
         if (response) {
            setPanics(response.data);
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
      <AdminLayout>
         <div className="emergencies pt-5">
            <div className="container py-5">
               <div className="col-lg-4 mx-auto">
                  <div className="header pb-4">
                     <h1> Passengers panic</h1>
                     <span>Complaint from passengers</span>
                  </div>
                  <div className="body">
                     {panics.map((i, index) => (
                        <div className="user-card  p-3 rounded mb-3 bg-kal-teal">
                           <div className="head d-flex justify-content-between align-items-center text-light">
                              <span className="fs-5 fw-bold">
                                 Panic from {i.user_name}
                              </span>
                              <FaRegTrashAlt />
                           </div>
                           <div className="body">
                              <div className="d-flex justify-content-between align-items-center">
                                 <div className="user-data">
                                    <span>From user with id  {i.user_ID} </span> <br />
                                    <small>{i.message}</small>
                                 </div>
                                 <div className="img">
                                    <FaExclamationCircle className="text-danger fs-5" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}
