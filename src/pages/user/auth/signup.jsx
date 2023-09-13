import axios from "axios";
import React, { useReducer, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/loader";
import errorReducer, { INITIAL_ERROR_STATE } from "../../driver/apply/errorReducer";
import { ToastContainer, toast } from "react-toastify";

export default function UserSignup() {
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [phone, setPhone] = useState("");
   const [address, setAddress] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [conPassword, setConPassword] = useState("");
   const [loading, setLoading] = useState(false);

   const [{ errType, errMessage }, dispatch] = useReducer(
      errorReducer,
      INITIAL_ERROR_STATE
   );

   const navi = useNavigate();

   const notify = (msg) => toast.error(msg);
   const notifySuccess = (msg) => toast.success(msg);
   const handleSubmit = async (e) => {
      try {
         e.preventDefault();
         setLoading(true);
         dispatch({ type: "reset" });

         if (password !== conPassword) {
            notify("Password Error");
            dispatch({
               type: "passwordError",
               payload: {
                  errType: "passwordErr",
                  errMessage: "Password Doesn't Match",
               },
            });
            setLoading(false);
         } else {
            const data = {
               firstname,
               lastname,
               phone,
               address,
               email,
               password,
            };
            const response = await axios.post(
               `${window.api}/auth/user/new`,
               data
            );
            if (response) {
               notifySuccess("Registration Successful");
               setLoading(false);
               navi("/auth/user/login");
            }
         }
      } catch (error) {
         if (error) {
            setLoading(false);
            console.log(error);

            console.log(error.response.data.err);
            if (error.response.data.err === "Email exists") {
               notify("Email Error");
               dispatch({
                  type: "emailError",
                  payload: {
                     errType: "emailErr",
                     errMessage: `Driver with email ${email} exist already. Please try again.`,
                  },
               });
            }
         }
      }
   };
   return (
         <div className="info py-5">
            <div className="container mt-5">
               <Loader loading={loading} />
               <div className="col-lg-4 mx-auto">
                  <div className="header">
                     <h3>User Information</h3>
                  </div>
                  <div className="body">
                     <form action="" onSubmit={handleSubmit}>
                        <div className=" form-group row">
                           <div className="col-lg-6 col-12 p-3">
                              <ToastContainer theme="dark" />

                              <input
                                 type="text"
                                 className=" form-control rounded-pill bg-kal-darkgray p-3"
                                 placeholder="Firstname "
                                 value={firstname}
                                 onChange={(e) => setFirstname(e.target.value)}
                                 required
                              />
                           </div>
                           <div className="col-lg-6 col-12 p-3">
                              <input
                                 type="text"
                                 className=" form-control rounded-pill bg-kal-darkgray p-3"
                                 placeholder="Lastname "
                                 value={lastname}
                                 onChange={(e) => setLastname(e.target.value)}
                                 required
                              />
                           </div>
                        </div>
                        <div className=" form-group d-flex  align-items-center gap-3 pb-4">
                           <div className="">
                              <select className="rounded-pill px-2 py-3 bg-kal-darkgray">
                                 <option value="Ng">NG</option>
                              </select>
                           </div>
                           <div className="d-flex gap-2 align-items-center rounded-pill bg-kal-darkgray w-100 px-3 py-1">
                              <span className="fs-5 fw-bold">+234</span>
                              <input
                                 type="number"
                                 className=" rounded- p-2 bg-kal-darkgray border-0 col w-100 p-3"
                                 placeholder="Phone number"
                                 min={11}
                                 value={phone}
                                 onChange={(e) => setPhone(e.target.value)}
                                 required
                              />
                           </div>
                        </div>
                        <div className="form-group">
                           <div className="d-flex gap-2 align-items-center rounded-pill bg-kal-darkgray w-100 px-3 py-1">
                              <input
                                 type="text"
                                 className=" rounded- p-2 bg-kal-darkgray border-0 col w-100 p-3"
                                 placeholder="Address"
                                 value={address}
                                 onChange={(e) => setAddress(e.target.value)}
                                 required
                              />
                           </div>
                           <input
                              type="email"
                              className={` rounded- p-2 bg-kal-darkgray rounded-pill mt-4 form-control col w-100 p-3 ${
                                 errType == "emailErr"
                                    ? "border-2 border-danger"
                                    : ""
                              } `}
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                           />
                           <div className="err-wrap my-3">
                              <span className="fw-bold text-danger">
                                 {errType === "emailErr" ? errMessage : ""}
                              </span>
                           </div>
                           <input
                              type="password"
                              className={` rounded- p-2 bg-kal-darkgray rounded-pill mt-4 form-control col w-100 p-3 ${
                                 errType == "passwordErr"
                                    ? "border-2 border-danger"
                                    : ""
                              }`}
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                           />
                           <input
                              type="password"
                              className={` rounded- p-2 bg-kal-darkgray rounded-pill mt-4 form-control col w-100 p-3 ${
                                 errType == "passwordErr"
                                    ? "border-2 border-danger"
                                    : ""
                              }`}
                              placeholder="Confirm password"
                              value={conPassword}
                              onChange={(e) => setConPassword(e.target.value)}
                              required
                           />
                           <div className="err-wrap my-3">
                              <span className="fw-bold text-danger text-capitalize">
                                 {errType === "passwordErr" ? errMessage : ""}
                              </span>
                           </div>
                        </div>
                        <div className="cap d-flex justify-content-between">
                           <Link to={"/driver/login"}>
                              {" "}
                              Already a driver? Login
                           </Link>
                        </div>
                        <div className="btn-wrap d-flex justify-content-end py-3 mt-4">
                           <button className="btn bg-kal-gold p-3 rounded-pill ">
                              Continue <FaArrowRight />
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
   );
}
