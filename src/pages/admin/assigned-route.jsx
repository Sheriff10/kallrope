import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { logoutAdmin } from "../../functions/logout";
import Loader from "../components/loader";
import AdminLayout from "./adminLayout";

export default function AdminAssignedRoute() {
   const routes = [
      "School Park (P.S)",
      "terminus tipper garage, tanke",
      "MFM, Tanke",
      "Oko Oba, Tanke",
      "Ajanakun, Tanke",
      "Oke Odo, tanke",
      "School Gate",
      "Offa garage",
      "Post-Office",
      "Challenge",
   ];
   const [pickup, setPickup] = useState("");
   const [destination, setDestination] = useState("");
   const [passenger, setPassenger] = useState("");
   const [time, setTime] = useState("");
   const [driver, setDriver] = useState("");
   const [loading, setLoading] = useState(false);

   const [stats, setStats] = useState([]);
   useEffect(() => {
      getStatsData();
   }, []);

   const getStatsData = async () => {
      try {
         const token = window.sessionStorage.getItem("adminAuthToken");
         const response = await axios.get(
            `${window.api}/admin/stats-data/driver`,
            {
               headers: {
                  "admin-auth-token": token,
                  "Content-Type": "application/json",
               },
            }
         );
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

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const data = { pickup, destination, passenger, time, driver };
      const notifySuccess = (msg) => toast.success(msg, { autoClose: 1500 });
      const notifyError = (msg) => toast.error(msg, { autoClose: 1500 });

      try {
         const token = window.sessionStorage.getItem("adminAuthToken");
         const response = await axios.post(
            `${window.api}/admin/assign-route`,
            data,
            {
               headers: {
                  "admin-auth-token": token,
                  "Content-Type": "application/json",
               },
            }
         );
         console.log(response);
         if (response) {
            setLoading(false);
            notifySuccess("Route Assigned Successfully");
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
                  logoutAdmin();
               }
            }
         }
      }

      console.log(data);
   };

   return (
      <AdminLayout>
         <div className="ass-route py-5">
            <div className="container mt-5">
               <div className="col-lg-8 mx-auto">
                  <div className="row">
                     <div className="col-lg-6 mx-auto">
                        <Loader loading={loading} />
                        <ToastContainer theme="colored" />
                        <form
                           className="form-wrap p-4 rounded"
                           onSubmit={handleSubmit}
                        >
                           <div className="header col-12 mb-3">
                              <h3>Assign Route to Driver</h3>
                           </div>
                           <div className="form-group mb-4">
                              <label className="fw-bold">Driver</label>
                              <select
                                 className="form-select"
                                 value={driver}
                                 onChange={(e) => setDriver(e.target.value)}
                                 required
                              >
                                 <option value={""} defaultValue>
                                    Select Driver
                                 </option>
                                 {stats.map((i, index) => (
                                    <option value={i.driver_ID} key={index}>
                                       {i.firstname}
                                    </option>
                                 ))}
                              </select>
                           </div>
                           <div className="form-group mb-4">
                              <label className="fw-bold">Pickup</label>
                              <select
                                 className="form-select"
                                 required
                                 value={pickup}
                                 onChange={(e) => setPickup(e.target.value)}
                              >
                                 <option value={""} defaultValue>
                                    Select Pickup Location
                                 </option>
                                 {routes.map((i, index) => (
                                    <option value={i} key={index}>
                                       {i}
                                    </option>
                                 ))}
                              </select>
                           </div>
                           <div className="form-group mb-4">
                              <label className="fw-bold">
                                 Final Destination
                              </label>
                              <select
                                 className="form-select"
                                 required
                                 value={destination}
                                 onChange={(e) =>
                                    setDestination(e.target.value)
                                 }
                              >
                                 <option value={""} defaultValue>
                                    Select Dropoff Location
                                 </option>
                                 {routes.map((i, index) => (
                                    <option value={i} key={index}>
                                       {i}
                                    </option>
                                 ))}
                              </select>
                           </div>
                           <div className="text mb-4">
                              <label>Total Passenger</label>
                              <select
                                 className="form-select"
                                 required
                                 value={passenger}
                                 onChange={(e) => setPassenger(e.target.value)}
                              >
                                 {routes.map((i, index) => (
                                    <option value={index + 1} key={index}>
                                       {index + 1}
                                    </option>
                                 ))}
                              </select>
                              <div className="form-group mt-4">
                                 <label>Time</label>
                                 <input
                                    type="time"
                                    className="form-control"
                                    required
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                 />
                              </div>
                           </div>
                           <div className="btn-wrap d-flex gap-2 mb-4">
                              <div className="col">
                                 <button className="btn btn-block bg-kal-gold w-100">
                                    Assign Route
                                 </button>
                              </div>
                           </div>
                           <div className="wrap d-flex justify-content-between align-items-center">
                              <Link to={"view-all"}>
                                 {" "}
                                 View All Assigned Route
                              </Link>{" "}
                              <FaArrowRight />
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}
