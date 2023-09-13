import React from "react";
import Header from "../../components/header";

export default function Signup() {
   const btnFunc = (img, title, link) => {
      return { img, title, link };
   };
   const btnArr = [
      btnFunc("/google.png", "google", "#"),
      btnFunc("/apple.png", "apple", "#"),
      btnFunc("/fb.png", "facebook", "#"),
   ];
   return (
      <div className="signup  py-5">
         <Header />
         <div className="container mt-5">
            <div className="col-lg-4 col-12 mx-auto">
               <div className="email pt-5">
                  <h3>Signup up using email or phone number</h3>
                  <div className="form-group my-4">
                     <input
                        type="text"
                        className="form-control bg-kal-lightgrey rounded-pill p-3"
                        placeholder="Enter email or phone number "
                     />
                  </div>
                  <div className="btn-wrap">
                     <button className="btn w-100 bg-black text-light rounded-pill">
                        Continue
                     </button>
                  </div>
               </div>
               <div className="divider position-relative d-flex justify-content-center py-4">
                  <span className="position-absolute mx-auto bg-kal-lightgrey rounded-circle p-1 px-2  z-2">
                     or
                  </span>
                  <hr className="w-100" />
               </div>
               <div className="providers">
                  {btnArr.map((i) => (
                     <div className="btn-wrap mb-3">
                        <button className="btn w-100 bg-kal-lightgrey text-black rounded-pill">
                           <img src={i.img} alt={i.title} /> Continue with{" "}
                           {i.title}
                        </button>
                     </div>
                  ))}
               </div>
               <div className="term p-3">
                <span>By Signing up, you agree to the <a href="">Term of service</a> and <a href="">Privacy Policy.</a></span>
               </div>
            </div>
         </div>
      </div>
   );
}
