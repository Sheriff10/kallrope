import React, { useContext } from "react";
import { FaMoneyBillAlt, FaRecycle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BookingContex } from "../../../functions/bookingContext";
import Header from "../../components/header";

export default function CheckOut() {
   const navi = useNavigate();

   const { state, dispatch } = useContext(BookingContex);

   const handleSubmit = (e) => {
      e.preventDefault();
      navi("ticket");
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
                           <div className="form-group ">
                              <div className="mb-3">
                                 <label
                                    htmlFor="cardholderName"
                                    className="form-label"
                                 >
                                    Card Name
                                 </label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="cardholderName"
                                    name="cardholderName"
                                    required
                                 />
                              </div>
                              <div className="mb-3">
                                 <label
                                    htmlFor="cardNumber"
                                    className="form-label"
                                 >
                                    Card Number
                                 </label>
                                 <input
                                    type="number"
                                    className="form-control"
                                    id="cardNumber"
                                    name="cardNumber"
                                    required
                                 />
                              </div>
                              <div className="row">
                                 <div className="col-md-6 mb-3">
                                    <label
                                       htmlFor="expirationDate"
                                       className="form-label"
                                    >
                                       Expiration Date
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="expirationDate"
                                       name="expirationDate"
                                       placeholder="MM/YY"
                                       required
                                    />
                                 </div>
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="cvv" className="form-label">
                                       CVV
                                    </label>
                                    <input
                                       type="number"
                                       className="form-control"
                                       id="cvv"
                                       name="cvv"
                                       required
                                    />
                                 </div>
                              </div>
                           </div>

                           <div className="divider position-relative d-flex justify-content-center py-4">
                              <span className="position-absolute mx-auto bg-kal-lightgrey rounded-circle p-1 px-2  z-2">
                                 or
                              </span>
                              <hr className="w-100" />
                           </div>

                           <div className="text-wrap d-flex justify-content-between">
                              <button className="btn btn-info fw-bold"> <FaRecycle /> Pay by transafer</button>
                              <button className="btn btn-info fw-bold"> Pay with cash <FaMoneyBillAlt /></button>
                           </div>

                           <div className="btn-wrap mt-5">
                              <button className="btn bg-kal-gold w-100 rounded">
                                 Checkout
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
