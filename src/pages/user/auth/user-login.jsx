import axios from "axios";
import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/loader";
import { ToastContainer, toast } from "react-toastify";
import storeToken from "../../../functions/storeTokens";

export default function UserLogin() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   const [err, setErr] = useState("");

   const notify = (msg) => toast.error(msg, { autoClose: 1500 });

   const navi = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const data = { email, password };
      toggleLoading();
      try {
         const response = await axios.post(
            `${window.api}/auth/user/login`,
            data
         );
         console.log(response);
         if (response) {
            setLoading(false);
            const token = response.headers["user-auth-token"];
            storeToken("userAuthToken", token);
            navi("/booking");
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
      <div className="driver-login py-5">
         <div className="container mt-5">
            <Loader loading={loading} />
            <ToastContainer theme="dark" />
            <div className="col-lg-4 mx-auto">
               <div className="header">
                  <h3>Login! And order a ride</h3> <br />
               </div>
               <div className="body">
                  <form onSubmit={handleSubmit}>
                     <div className="form-group">
                        <input
                           type="email"
                           className={` rounded p-2 form-control bg-kal-darkgray col w-100 p-3 mb-4 ${
                              err !== "" ? "border-2 border-danger" : ""
                           }`}
                           placeholder="Email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                        />
                        <input
                           type="password"
                           className={` rounded p-2 form-control bg-kal-darkgray col w-100 p-3 ${
                              err !== "" ? "border-2 border-danger" : ""
                           }`}
                           placeholder="Password"
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
                           className="btn bg-kal-gold w-100 p-3 rounded-pill "
                        >
                           Login <FaSignInAlt />
                        </button>
                     </div>
                  </form>
                  <div className="cap d-flex justify-content-between">
                     <Link> Forgot Password.</Link>
                     <Link to={"/apply/driver/information"}>
                        {" "}
                        Not a Driver? Signup
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
