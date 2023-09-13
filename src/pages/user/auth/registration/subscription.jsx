import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Subscription() {
   const [activeBtn, setActiveBtn] = useState("");
   
   const btnArr = [
      "Semester NGN 5000",
      "Weekly NGN 500",
      "Daily NGN 100",
      "Pay with per ride",
   ];
   return (
      <div className="sub py-5">
         <div className="container mt-5">
            <div className="col-lg-4 col-12 mx-auto">
               <div className="header pb-3">
                  <div className="mb-2">
                     <h1>Subcription plans</h1>
                  </div>
                  <span>Choose from the various subscription plans</span>
               </div>

               <div className="body">
                  {btnArr.map((btnText, index) => (
                     <div className="btn-wrap" key={index}>
                        <button
                           className={`${
                              activeBtn === index
                                 ? "bg-kal-gold"
                                 : "bg-kal-lightgrey"
                           } btn rounded shadow w-100 my-3 p-2`}
                           onClick={() => setActiveBtn(index)}
                        >
                           {btnText}
                        </button>
                     </div>
                  ))}

                  <div className="btn-wrap mt-5">
                     <button
                        className={`${
                           activeBtn !== "" ? "bg-kal-gold" : "bg-kal-lightgrey"
                        } btn rounded-pill p-3 shadow bg-kal-gold w-100 icon-link-hover`}
                     >
                        Continue <FaArrowRight />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
