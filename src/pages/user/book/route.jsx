import React, { useContext, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BookingContex } from "../../../functions/bookingContext";
import Header from "../../components/header";
import route from "./routes.json";

export default function BookingRoute() {
   const [destination, setDestination] = useState("");
   const [pickup, setPickup] = useState("");
   const [price, setPrice] = useState(0);

   useEffect(() => {
      getPrice();
   }, [destination, pickup]);

   const getPrice = () => {
      const priceData = route.find(
         (i) => i.pickup === pickup && i.destination === destination
      );
      if (priceData) setPrice(priceData.price);
   };

   const navi = useNavigate();

   const { state, dispatch } = useContext(BookingContex);

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch({ type: "SET_PICKUP", payload: pickup });
      dispatch({ type: "SET_DESTINATION", payload: destination });
      console.log(state);
   };

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
   return (
      <>
         <Header />
         <div className="book pt-5">
            <div className="container mt-5 ">
               <div className="row min-h-80vh align-items-center">
                  <div className="col-lg-5 p-2 mx-auto">
                     <form onSubmit={handleSubmit}>
                        <div className="form-wrap  p-4 rounded bg-white">
                           <div className="header">
                              <h3>Where do you want to be picked</h3>
                           </div>
                           <div className="form-group gap-2 ">
                              <select
                                 type="text"
                                 className="p-3 bg-kal-lightgrey form-select w-100 mb-4"
                                 placeholder="Add a pickup location"
                                 onChange={(e) => setPickup(e.target.value)}
                                 value={pickup}
                                 required
                              >
                                 <option value={""} defaultChecked>
                                    Select pickup location
                                 </option>
                                 {routes.map((i, index) => (
                                    <option value={i} key={index}>
                                       {i}
                                    </option>
                                 ))}
                              </select>
                              <select
                                 type="text"
                                 className="p-3 bg-kal-lightgrey form-select w-100"
                                 placeholder="Enter your destination"
                                 onChange={(e) =>
                                    setDestination(e.target.value)
                                 }
                                 value={destination}
                                 required
                              >
                                 <option value={""} defaultChecked>
                                    Select Destination
                                 </option>{" "}
                                 {routes.map((i, index) => (
                                    <option value={i} key={index}>
                                       {i}
                                    </option>
                                 ))}
                              </select>
                           </div>

                           <div className="checkout-wrap my-5 d-flex justify-content-between align-items-center border rounded p-2">
                              <div className="img-wrap d-flex align-items-center">
                                 <img src="/car.png" alt="Car" width={70} />
                                 <span>Kallrope Bus</span>
                              </div>

                              <div className="price">
                                 <span>
                                    NGN {price} <FaArrowRight />
                                 </span>
                              </div>
                           </div>

                           <div className="btn-wrap mt-5 border-top">
                              <div className="d-flex py-2 d-flex align-items-center justify-content-between">
                                 <span>Proceed to Checkout</span>{" "}
                                 <FaArrowRight />
                              </div>
                              <button className="btn bg-kal-gold w-100 rounded">
                                 Proceed
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
