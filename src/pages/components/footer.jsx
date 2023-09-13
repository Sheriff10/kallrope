import React from "react";

export default function Footer() {
   const bx1 = [
      "Riders",
      "food Delivery",
      "grocery delivery",
      "Scooter",
      "car-sharing",
      "airport",
      "cities",
   ];
   const bx2 = [
      "Signup as a driver",
      "Signup as a courier",
      "Fleet",
      "Franchise",
      "influencers",
   ];
   const bx3 = [
      "About Us",
      "career",
      "green plan",
      "press",
      "blog",
      "Brand guidelines",
   ];

   const icons = ['/instagram.png', "/x.png", "/fb.png", '/linkedin.png', "/tiktok.png"]
   return (
      <div className="footer bg-kal-lightgrey pt-5">
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-6 mb-2">
                  <div className="box">
                     <div className="box-head py-3">
                        <img src="/logo.png" alt="kallrope" />
                     </div>
                     <div className="box-body">
                        <button className="btn px-5 mb-3 rounded-pill bg-kal-darkgray text-black d-flex align-items-center">
                           <img
                              src="/globe.png"
                              className="me-2"
                              alt="globe"
                              width={30}
                           />{" "}
                           English
                        </button>{" "}
                        <br />
                        <button className="btn px-5 mb-3 rounded-pill bg-kal-darkgray text-black d-flex align-items-center p-2">
                           <img
                              src="/nigeria.png"
                              className="me-2"
                              alt="Nigeria"
                              width={30}
                           />{" "}
                           Nigeria
                        </button>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-6 mb-2">
                  <div className="box">
                     <div className="box-head py-3 fs-3 fw-bold">
                        <span>Kallrope</span>
                     </div>
                     <div className="box-body">
                        <ul className="m-0 list-group leading-5">
                           {bx1.map((i) => (
                              <li
                                 className="list-group-item border-0 px-0 py-1 bg-kal-lightgrey"
                                 key={i}
                              >
                                 {i}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-6 mb-2">
                  <div className="box">
                     <div className="box-head py-3 fs-3 fw-bold">
                        <span>Partner with Kallrope</span>
                     </div>
                     <div className="box-body">
                        <ul className="m-0 list-group leading-5">
                           {bx2.map((i) => (
                              <li
                                 className="list-group-item border-0 px-0 py-1 bg-kal-lightgrey"
                                 key={i}
                              >
                                 {i}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-6 mb-2">
                  <div className="box">
                     <div className="box-head py-3 fs-3 fw-bold">
                        <span>Company</span>
                     </div>
                     <div className="box-body">
                        <ul className="m-0 list-group leading-5">
                           {bx3.map((i) => (
                              <li
                                 className="list-group-item border-0 px-0 py-1 bg-kal-lightgrey"
                                 key={i}
                              >
                                 {i}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="socials py-3">
               <div className="d-flex flex-wrap justify-content-between">
                  <div className="icons mb-4">
                    {icons.map(i => (
                    <img src={i} alt={i} key={i}/>

                    ))}
                  </div>
                  <div className="">
                     <button className="btn px-5 mb-3 rounded-pill bg-kal-darkgray text-black">
                        Get the Kallrope app
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
