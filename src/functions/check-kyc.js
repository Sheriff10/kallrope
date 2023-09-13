import axios from "axios";
import { logoutDriver } from "./logout";

const checkKyc = async (token) => {
   try {
      const token = window.sessionStorage.getItem("driverAuthToken");
      const response = await axios.get(`${window.api}/driver/kyc`, {
         headers: {
            "driver-auth-token": token,
            "Content-Type": "application/json",
         },
      });
      if (response) return "verified";
      console.log(response);
   } catch (error) {
      if (error) {
         console.log(error);
         if (error.response.data !== undefined) {
            if (
               error.response.data == "Invalid Token" ||
               error.response.data == "Access Denied!"
            ) {
               logoutDriver();
            }
         }

         return "not verified";
      }
   }
};

export default checkKyc;
