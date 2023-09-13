import React, { useState } from "react";
import { Link } from "react-router-dom";
import Message from "../../../components/message";

export default function BookRide() {
   const [openMessage, setOpenMessage] = useState(false);
   const token = window.sessionStorage.getItem("userAuthToken");

   return (
      <div className="book-ride py-5">
         <div className="container">
            <div className="header text-center">
               <div className="col-lg-6 mx-auto">
                  <h1>Book ride with other companies</h1>
                  <span>
                     Here at Kallrope, we have made it possible for our
                     customers to book rides with popular transport companies.
                     Booking rides is made easy with Kallrope
                  </span>
               </div>
            </div>
            <div className="body mt-4">
               <div className="img-wrap text-center myb-5">
                  <img
                     src="bolt.png"
                     alt="Bolt"
                     width={200}
                     className="shadow img-fluid mx-auto"
                  />
               </div>

               <div className="btn-wrap mt-3 ">
                  <div className="wrap text-center">
                     <Link
                        to={token == null ? "/auth/user/login" : ""}
                        className="btn bg-kal-orange px-5 py-2 rounded-pill"
                        onClick={() => setOpenMessage(!openMessage)}
                     >
                        {" "}
                        Panic Button
                     </Link>
                  </div>
                  <div className="messageWrap my-4">
                     {openMessage && <Message title={"Panic"} type="panic" />}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
