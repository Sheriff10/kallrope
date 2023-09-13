import React from "react";
import HashLoader from "react-spinners/HashLoader";

export default function Loader({ loading }) {
   return (
      <div
         className={`loader ${
            !loading && "d-none"
         } d-flex justify-content-center align-items-center position-fixed top-0 start-0 end-0 bottom-0 bg-white zi-5`}
      >
         <div className="wrap text-center ">
            <div className="mx-auto d-flex  justify-content-center">
               <HashLoader className="#fff" />
            </div>
            <img src="/logo.png" alt="kallrope" className="img-fluid" />
         </div>
      </div>
   );
}
