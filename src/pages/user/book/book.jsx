import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookingContex } from "../../../functions/bookingContext";
import Header from "../../components/header";

export default function Book() {
   const navi = useNavigate();

   const { state, dispatch } = useContext(BookingContex);

   const handleSubmit = (e) => {
      e.preventDefault();
      navi("route");
   };
   return (
      <>
         <Header />{" "}
         <div className="book pt-5">
            <div className="container mt-5 ">
               <div className="row min-h-80vh align-items-center">
                  <div className="col-lg-5 p-2 mx-auto">
                     <form onSubmit={handleSubmit}>
                        <div className="form-wrap  p-4 rounded bg-white">
                           <div className="header">
                              <h3>When do you want to be picked</h3>
                           </div>
                           <div className="form-group d-flex gap-2 ">
                              <input
                                 type="date"
                                 value={state.date}
                                 onChange={(e) =>
                                    dispatch({
                                       type: "SET_DATE",
                                       payload: e.target.value,
                                    })
                                 }
                                 className="p-3 bg-kal-lightgrey form-control"
                                 required
                              />
                              <input
                                 type="time"
                                 value={state.time}
                                 onChange={(e) =>
                                    dispatch({
                                       type: "SET_TIME",
                                       payload: e.target.value,
                                    })
                                 }
                                 className="p-3 bg-kal-lightgrey form-control"
                                 required
                              />
                           </div>

                           <div className="text-wrap my-5">
                              <span>
                                 Choose your pickup time up to 30 days in
                                 advance
                              </span>{" "}
                              <br /> <br />
                              <span>
                                 Extra wait time included to meet your ride
                              </span>{" "}
                              <br /> <br />
                              <span>
                                 ancel at no charge up to 60 minutes in advanc
                              </span>
                           </div>

                           <div className="btn-wrap mt-5">
                              <button className="btn bg-kal-gold w-100 rounded">
                                 Next
                              </button>
                           </div>

                           <div className="sub">
                              <div className="alert alert-info">
                                 Choose a subscription plan today,{" "}
                                 <Link to={"/auth/subcription"}>
                                    Subcribe Now!
                                 </Link>
                              </div>
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
