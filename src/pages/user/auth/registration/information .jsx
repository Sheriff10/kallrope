import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Header from "../../../components/header";
export default function Information() {
   return (
      <>
         <Header />{" "}
         <div className="info py-5">
            <div className="container mt-5">
               <div className="col-lg-4 mx-auto">
                  <div className="header">
                     <h1>Confirm our information</h1>
                  </div>
                  <div className="body">
                     <div className=" form-group row">
                        <div className="col-lg-6 col-12 p-3">
                           <input
                              type="text"
                              className=" form-control rounded-pill bg-kal-darkgray p-3"
                              placeholder="Firstname "
                           />
                        </div>
                        <div className="col-lg-6 col-12 p-3">
                           <input
                              type="text"
                              className=" form-control rounded-pill bg-kal-darkgray p-3"
                              placeholder="Lastname "
                           />
                        </div>
                     </div>
                     <div className=" form-group d-flex  align-items-center gap-3">
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
                              min={0}
                           />
                        </div>
                     </div>
                     <div className="btn-wrap d-flex justify-content-between py-3 mt-4">
                        <button className="btn bg-kal-darkgray p-3 rounded-pill ">
                           <FaArrowLeft /> Back
                        </button>
                        <button className="btn bg-kal-gold p-3 rounded-pill ">
                           Continue <FaArrowRight />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
