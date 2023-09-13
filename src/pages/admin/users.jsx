import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import AdminLayout from "./adminLayout";

export default function Users() {
   const dum = [1, 2, 3, 4];
   return (
      <AdminLayout>
         <div className="users pt-5">
            <div className="container py-5">
               <div className="col-lg-4 mx-auto">
                  <div className="header pb-4">
                     <h1>All Users</h1>
                     <span>List of registered Users</span>
                  </div>
                  <div className="body">
                     {dum.map((i, index) => (
                        <div className="user-card bg-kal-darkgray p-3 rounded mb-3">
                           <div className="head d-flex justify-content-between align-items-center">
                              <span className="fs-5 fw-bold">Sheezey </span>
                              <FaRegTrashAlt />
                           </div>
                           <div className="body">
                              <div className="d-flex justify-content-between align-items-center">
                                 <div className="user-data">
                                    <span>Abubakar Shaibu </span> <br />
                                    <span>
                                       Joined kallrope 10th July, 202{" "}
                                    </span>{" "}
                                 </div>
                                 <div className="img">
                                    <img
                                       src="/user.png"
                                       alt="User 01"
                                       className="rounded"
                                       width={80}
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
      </AdminLayout>
   );
}
