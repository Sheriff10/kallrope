import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { logoutDriver, logoutUser } from "../../functions/logout";
import Loader from "./loader";

export default function Message({ title, type }) {
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");
   const [loading, setLoading] = useState(false);
   const notifySuccess = (msg) => toast.success(msg, { autoClose: 1500 });
   const notifyError = (msg) => toast.error(msg, { autoClose: 1500 });

   const sendEmergencyMessage = async (data) => {
      try {
         const token = window.sessionStorage.getItem("driverAuthToken");
         const response = await axios.post(
            `${window.api}/driver/send-emergency`,
            data,
            {
               headers: {
                  "driver-auth-token": token,
                  "Content-Type": "application/json",
               },
            }
         );
         console.log(response);
         if (response) {
            setLoading(false);
            notifySuccess("Message sent successfully");
            resetField();
         }
      } catch (error) {
         if (error) {
            console.log(error);
            setLoading(false);
            notifyError("Unknown Error");

            if (error.response.data) {
               if (
                  error.response.data == "Invalid Token" ||
                  error.response.data == "Access Denied!"
               ) {
                  logoutDriver();
               }
            }
         }
      }
   };
   const sendPanicMessage = async (data) => {
      try {
         const token = window.sessionStorage.getItem("userAuthToken");
         const response = await axios.post(
            `${window.api}/user/send-panic`,
            data,
            {
               headers: {
                  "user-auth-token": token,
                  "Content-Type": "application/json",
               },
            }
         );
         console.log(response);
         if (response) {
            setLoading(false);
            notifySuccess("Message sent successfully");
            resetField();
         }
      } catch (error) {
         if (error) {
            console.log(error);
            setLoading(false);
            notifyError("Unknown Error");

            if (error.response.data) {
               if (
                  error.response.data == "Invalid Token" ||
                  error.response.data == "Access Denied!"
               ) {
                  logoutUser();
               }
            }
         }
      }
   };
   const resetField = () => {
      setSubject("");
      setMessage("");
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      console.log("message called");
      const data = { subject, message };

      if (type == "emergency") {
         sendEmergencyMessage(data);
      } else {
         sendPanicMessage(data);
      }
   };
   return (
      <div className="emergency bg-light rounded col-lg-6 mx-auto">
         <form className="form-wrap p-4 rounded" onSubmit={handleSubmit}>
            <Loader loading={loading} />
            <ToastContainer theme="colored" />
            <div className="header col-12 mb-3">
               <h3>{title} Message</h3>
            </div>
            <div className="form-group mb-4">
               <label className="fw-bold">Subject</label>
               <input
                  type="text"
                  className="form-control"
                  placeholder="Subject of emergency"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
               />
            </div>
            <div className="form-group mb-4">
               <label className="fw-bold">Message</label>
               <textarea
                  rows={5}
                  type="text"
                  className="form-control"
                  placeholder="Type your Message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
               />
            </div>
            <div className="btn-wrap d-flex gap-2 mb-4">
               <div className="col">
                  <button
                     type="submit"
                     className="btn btn-block bg-kal-gold w-100"
                  >
                     {" "}
                     Send
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
}
