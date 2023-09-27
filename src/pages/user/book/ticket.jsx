import React, { useContext, useEffect, useState } from "react";
import copy from 'clipboard-copy';
import { Link, useNavigate } from "react-router-dom";
import { BookingContex } from "../../../functions/bookingContext";
import Header from "../../components/header";
import { toast, ToastContainer } from "react-toastify";

export default function Ticket() {
   const navi = useNavigate();
   useEffect(() => {generateRandomString(10)}, [])
   const [ticketID, setTicketID] = useState('')

   const { state, dispatch } = useContext(BookingContex);

   function generateRandomString(length) {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let result = "";

      for (let i = 0; i < length; i++) {
         const randomIndex = Math.floor(Math.random() * characters.length);
         result += characters.charAt(randomIndex);
      }
      setTicketID(result)

      return result;
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      navi("");
   };

   const copyTOClipboard = () => {
      copy(ticketID)
      toast.success("Copied successfully")
   }
   return (
      <>
         <Header />{" "}
         <ToastContainer theme="colored" />
         <div className="book pt-5">
            <div className="container mt-5 ">
               <div className="row min-h-80vh align-items-center">
                  <div className="col-lg-5 p-2 mx-auto">
                     <form onSubmit={handleSubmit}>
                        <div className="form-wrap  p-4 rounded bg-white">
                           <div className="header">
                              <h3>Ticket ID Generation </h3>
                           </div>
                           <div className="wrap">
                              <span className="kal-teal">
                                 <ul className="m-0 p-0 fw-bold">
                                    <li>- Copy your ticket</li>
                                    <li>
                                       - Head over to your pick location when
                                       times' due
                                    </li>
                                    <li>- Show the ticket ID to the driver</li>
                                 </ul>
                              </span>
                              <div className="text-wrap mt-4">
                                 <span>TICKET ID:</span>{" "}
                                 <span className="fw-bold fs-5">
                                    {ticketID}
                                 </span>
                              </div>
                           </div>

                           <div className="btn-wrap mt-5">
                              <button
                                 type="button"
                                 className="btn bg-kal-gold w-100 rounded"
                                 onClick={copyTOClipboard}
                              >
                                 Copy Ticket ID
                              </button>
                           </div>
                        </div>
                     </form>
                  </div>
                  <div className="col-lg-7">
                     {/* <img src="location.webp" alt="map" className="img-flue " /> */}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
