import React from "react";

export default function Services() {
const cardFunc = (title, text, image) => {
    return {title, text, image}
}
const  cardArr = [
   cardFunc("Rides", "Request in seconds, ride in minutes", '/beep.png'),
   cardFunc("Delivery", "Your favourite food, delivered fast.", '/rider.png'),
   cardFunc("Groceries", "All the essentials whenever you need them.", '/munchies.png'),
   cardFunc("Car-sharing", "High-quality car rental made easy", '/truck.png'),
   cardFunc("Micromobility", "2-weel rental ride at your fingertips", '/bike.png'),
   cardFunc("Rides", "Manage business for you team and clients", '/relax.png'),
]
   return (
      <div className="services">
         <div className="container">
            <div className="header text-center py-4">
               <h1>Our Services</h1>
            </div>
            <div className="body">
               <div className="row">
                  {cardArr.map((service, index) => (
                     <div className="col-lg-4 p-3 d-flex" key={index}>
                        <div className="s-con bg-kal-lightgrey rounded p-3">
                           <div className="d-flex align-items-center">
                              <div className="text-wrap p-3">
                                 <span className="fw-bold fs-4">{service.title}</span>{" "}
                                 <br />
                                 <small>
                                    {service.text}
                                 </small>
                              </div>
                              <div className="d-flex justify-content-end">
                                 <img
                                    src={service.image}
                                    alt="Day rider"
                                    className="img-fluid"
                                    width={100}
                                    height={100}
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
