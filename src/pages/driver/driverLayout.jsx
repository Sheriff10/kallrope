import React from "react";
import DriverHeader from "../components/driver-header";

export default function DriverLayout({ children }) {
   return (
      <>
         <DriverHeader />
         {children}
      </>
   );
}
