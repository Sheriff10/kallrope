import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { logoutAdmin } from "../../functions/logout";
import AdminLayout from "./adminLayout";

export default function ViewEmergency() {
   const [emergencies, setEmergencies] = useState([]);
   useEffect(() => {
      getEmergencies();
   }, []);

   const { id } = useParams();
   console.log(id);

   const getEmergencies = async () => {
      try {
         const token = window.sessionStorage.getItem("adminAuthToken");
         const response = await axios.get(
            `${window.api}/admin/view-emergency/${id}`,
            {
               headers: {
                  "admin-auth-token": token,
                  "Content-Type": "application/json",
               },
            }
         );
         console.log(response);
         if (response) {
            setEmergencies(response.data);
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
                     <h1>Emergency</h1>
                  </div>
                  <div className="body">
                     {emergencies.map((i, index) => (
                        <div className="user-card bg-kal-darkgray p-3 rounded mb-3 bg-danger">
                           <div className="head d-flex justify-content-between align-items-center text-light">
                              <span className="fs-5 fw-bold">{i.subject}</span>
                              <FaRegTrashAlt />
                           </div>
                           <div className="body">
                              <div className="d-flex justify-content-between align-items-center">
                                 <div className="user-message">
                                    <span>{i.message}</span> <br />
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
