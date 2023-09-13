import axios from "axios";
import React, { useState } from "react";
import { FaKey, FaSignInAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import storeToken from "../../functions/storeTokens";
import Loader from "../components/loader";
import AdminLayout from "./adminLayout";

export default function AdminLogin() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   const [err, setErr] = useState("");

   const notify = (msg) => toast.error(msg, { autoClose: 1500 });

   const navi = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const data = { username, password };
      toggleLoading();
      try {
         const response = await axios.post(
            `${window.api}/auth/admin/login`,
            data
         );
         console.log(response);
         if (response) {
            setLoading(false);
            const token = response.headers["admin-auth-token"];
            storeToken("adminAuthToken", token);
            navi("/admin/dashboard");
         }
      } catch (error) {
         if (error) {
            setLoading(false);
            notify("Login Error");
            setErr("Invalid Login Credential");
            console.log(error);
         }
      }
   };

   const toggleLoading = () => {
      setLoading(!loading);
   };
   return (
      <div className="admin-login py-5">
         <div className="container mt-5">
            <Loader loading={loading} />
            <ToastContainer theme="dark" />
            <div className="col-lg-5 mx-auto">
               <div className="header text-center">
                  <h3>
                     Admin Login <FaKey />{" "}
                  </h3>{" "}
                  <br />
               </div>
               <div className="body">
                  <form onSubmit={handleSubmit}>
                     <div className="form-group bg-dark rounded p-5">
                        <input
                           type="text"
                           className={` rounded p-2 form-control bg-kal-darkgray col w-100 p-3 mb-4 ${
                              err !== "" ? "border-2 border-danger" : ""
                           }`}
                           placeholder="Admin username"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           required
                        />
                        <input
                           type="password"
                           className={` rounded p-2 form-control bg-kal-darkgray col w-100 p-3 ${
                              err !== "" ? "border-2 border-danger" : ""
                           }`}
                           placeholder="Admin Password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required
                        />
                     </div>
                     <div className="err-wrap my-3">
                        <span className="fw-bold text-danger text-capitalize">
                           {err}
                        </span>
                     </div>
                     <div className="btn-wrap py-3 mt-4">
                        <button
                           type="submit"
                           className="btn btn-dark w-100 p-3 rounded-pill "
                        >
                           Login <FaSignInAlt />
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
