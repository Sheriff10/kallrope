import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaImage } from "react-icons/fa";
import axios from "axios";
import Loader from "../../components/loader";
import { ToastContainer, toast } from "react-toastify";
import { logoutDriver } from "../../../functions/logout";
import DriverLayout from "../driverLayout";

export default function Upload() {
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const id = queryParams.get("id");
   const fileInputRef = useRef(null);
   const [loading, setLoading] = useState(false);
   const [selectedImage, setSelectedImage] = useState(null);
   const [img, setImg] = useState("");

   const navi = useNavigate();

   const pageFunc = (id, name, text, img_type) => {
      return { id, name, text, img_type };
   };
   const driverSteps = (
      <>
         <span>
            Your profile photo helps people recognize you. Please note that once
            you submit your profile photo it cannot be changed
         </span>
         <ul className="m-0">
            <li>
               Face the camera directly with your eyes and mouth clearly visible
            </li>
            <li>
               Make sure the photo is well lit, free of glare, and in focus
            </li>
            <li>No photos of a photo, filters, or alterations</li>
         </ul>
      </>
   );
   const liscence = (
      <span>
         All 4 sides of the license should be photographed. Ensure that the
         license number on the top left is clearly visible in the image
         photographed
      </span>
   );
   const insurance = (
      <span>
         All 4 corners of the page should be captured. Ensure the following are
         clear after photographing 1. Policy number & Insurance company name 2.
         Start &Expiry dates Confirm the policy has been updated on askniid.org
      </span>
   );
   const inspection = (
      <span>
         All 4 corners of the report should be captured. Ensure that the
         document is clearly visible when photographed
      </span>
   );
   const pageArr = [
      pageFunc("photo", " self", driverSteps, "driver photo"),
      pageFunc("license", " liscence", liscence, "driver liscence"),
      pageFunc(
         "insurance",
         "Vehicle Insurance Policy",
         insurance,
         "vehicle insurance policy"
      ),
      pageFunc(
         "inspection",
         "Vehicle Inspection Report",
         inspection,
         "vehicle inspection report"
      ),
   ];

   // File upload section
   const handleButtonClick = (e) => {
      // Trigger the file selection dialog when the button is clicked
      e.preventDefault();
      fileInputRef.current.click();
   };

   const handleFileSelect = (val) => {
      setImg(val);
      console.log(val);

      // Config section for viewing selected image.
      if (val) {
         const validImg = val[0];
         const reader = new FileReader();
         reader.onload = (e) => {
            setSelectedImage(e.target.result);
         };
         reader.readAsDataURL(validImg);
      }
   };

   const handleSubmit = async (e) => {
      try {
         e.preventDefault();
         setLoading(true);
         const token = window.sessionStorage.getItem("driverAuthToken");
         const response = await axios.post(
            `http://localhost:5000/upload/driver/${id}`,
            { Image: img },
            {
               headers: {
                  "driver-auth-token": token,
                  "Content-Type": "multipart/form-data",
                  // "Content-Type": "application/json",
               },
            }
         );
         console.log(response);
         if (response) {
            setLoading(false);
            notifySuccess("Document Uploaded Successfully");
            setTimeout(() => navi("/apply/driver"), 1600);
         }
      } catch (error) {
         console.log(error);
         if (error) {
            setLoading(false);
            notifyErr("An error occured, please try again");
            if (error.response.data) {
               if (
                  error.response.data == "Invalid Token" ||
                  error.response.data == "Access Denied!"
               ) {
                  logoutDriver();
               }
            }
         }
      }
   };

   const notifyErr = (msg) => toast.error(msg, { autoClose: 1500 });
   const notifySuccess = (msg) => toast.success(msg, { autoClose: 1500 });
   return (
      <DriverLayout>
         <div className="apply py-5 min-h-70vh">
            <div className="container mt-5">
               <Loader loading={loading} />
               <ToastContainer theme="colored" />
               <div className="col-lg-4 col-12 mx-auto">
                  <div className="header">
                     <h3>
                        Take photo of your{" "}
                        {pageArr.map((page, index) => {
                           if (page.id === id) return page.name;
                        })}{" "}
                     </h3>
                  </div>
                  <div className="body">
                     <form
                        encType="multipart/form-data"
                        onSubmit={handleSubmit}
                     >
                        <div className="wrap">
                           {pageArr.map((page, index) => {
                              if (page.id === id) return page.text;
                           })}
                        </div>
                        <div className="img-wrap text-center border border-dash my-5 py-5">
                           {selectedImage ? (
                              <img
                                 src={selectedImage}
                                 alt="Selected"
                                 className="img-fluid"
                              />
                           ) : (
                              <span className="h1 mx-auto">
                                 <FaImage />
                              </span>
                           )}
                        </div>
                        {/* Upload file section but hidden */}
                        <input
                           type="file"
                           name="SampleFile"
                           onChange={(e) => handleFileSelect(e.target.files)}
                           ref={fileInputRef}
                           className="d-none"
                        />

                        <div className="btn-wrap">
                           {img == "" ? (
                              <button
                                 className="btn bg-kal-teal w-100 rounded"
                                 onClick={handleButtonClick}
                              >
                                 Select picture
                              </button>
                           ) : (
                              <button
                                 type="submit"
                                 className="btn bg-kal-gold w-100 rounded"
                              >
                                 Upload picture
                              </button>
                           )}
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </DriverLayout>
   );
}
